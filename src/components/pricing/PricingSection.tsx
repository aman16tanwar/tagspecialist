'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HiCheck,
  HiShieldCheck,
  HiChevronDown,
  HiChevronUp,
  HiSearch,
  HiClipboardList,
  HiCheckCircle,
  HiCog,
  HiRefresh,
} from 'react-icons/hi';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface ProcessStep {
  icon: React.ElementType;
  verb: string;
  title: string;
  desc: string;
}

interface FAQ {
  q: string;
  a: string;
}

const PricingSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const processSteps: ProcessStep[] = [
    {
      icon: HiSearch,
      verb: "Diagnose",
      title: "Audit & Strategy",
      desc: "We diagnose your entire tracking stack, pinpoint what's broken, and size the revenue opportunity — before a single line gets built.",
    },
    {
      icon: HiClipboardList,
      verb: "Design",
      title: "Measurement Architecture",
      desc: "We design a measurement plan and data architecture mapped directly to your business goals, KPIs, and reporting needs.",
    },
    {
      icon: HiCheckCircle,
      verb: "Align",
      title: "Your Approval",
      desc: "You review the blueprint and scope and sign off on a fixed plan. Nothing gets built until you approve it.",
    },
    {
      icon: HiCog,
      verb: "Build",
      title: "Implementation",
      desc: "We build it cleanly — GA4, server-side GTM, CAPI, BigQuery pipelines — fully documented, tested, and validated.",
    },
    {
      icon: HiRefresh,
      verb: "Sustain",
      title: "Maintenance",
      desc: "We host, monitor, and maintain your setup so it stays accurate as ad platforms and browsers keep changing.",
    },
  ];

  const addOns: string[] = [
    "Server-Side Tagging",
    "Offline Conversions",
    "Meta CAPI",
    "BigQuery Pipelines",
    "Consent Mode v2",
    "Enhanced Conversions",
  ];

  const faqs: FAQ[] = [
    {
      q: "Why are you more expensive than Upwork freelancers?",
      a: "Freelancers set up tags. We engineer business-grade data infrastructure — server-side tracking, BigQuery pipelines, CRM integrations, and attribution modeling. You work directly with a senior data engineer, not a junior tag placer. Our systems are built to scale to $100M+ revenue.",
    },
    {
      q: "What's included in post-launch support?",
      a: "Every build includes 30 days of 'hyper-care' where we monitor data flows, fix any edge-case bugs, and ensure your team is fully comfortable using the new dashboards.",
    },
    {
      q: "How does the engagement work?",
      a: "Every project starts with a fixed-scope audit, which is fully credited toward implementation if you proceed. Implementation is quoted as a fixed price after the audit — you approve it before any work begins. Managed tracking is billed monthly with no long-term contract.",
    },
    {
      q: "How is this different from tools like Elevar or Littledata?",
      a: "Tools are products; we are a custom solution. Tools are 'one-size-fits-all' and you don't own the infrastructure. With us, you own the code, the GCP environment, and the data. We're built for complex setups where tools hit their limits.",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4 uppercase tracking-widest">
            <HiClipboardList className="w-4 h-4" />
            <span>Our Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-navy-900 mb-4 uppercase tracking-tighter">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every engagement follows the same disciplined path — diagnose first, design a plan you approve, build it properly, then keep it accurate. No guesswork, no surprises.
          </p>
        </div>

        {/* Animated Process Flow */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Desktop connector: gray track + self-drawing blue line */}
            <div className="hidden md:block absolute left-[10%] right-[10%] top-8 h-1 bg-gray-200 rounded-full z-0" />
            <motion.div
              className="hidden md:block absolute left-[10%] right-[10%] top-8 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full origin-left z-0"
              initial={{ scaleX: reduce ? 1 : 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: reduce ? 0 : 1.4, ease: "easeInOut" }}
            />

            {/* Step nodes */}
            <div className="flex flex-col md:flex-row md:items-start relative z-10">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === processSteps.length - 1;
                return (
                  <React.Fragment key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.4, delay: reduce ? 0 : index * 0.18 }}
                      className="flex-1 flex flex-col items-center text-center px-3"
                    >
                      <div className="relative mb-5">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ring-4 ring-gray-50 ${isLast ? 'bg-blue-600' : 'bg-navy-900'}`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-black flex items-center justify-center shadow ring-2 ring-white">
                          {index + 1}
                        </div>
                        {isLast && (
                          <div className="absolute -top-2.5 -right-3 inline-flex items-center gap-1 px-2 h-6 rounded-full bg-blue-100 text-blue-700 text-[9px] font-black uppercase tracking-wide shadow ring-2 ring-white">
                            <HiRefresh className="w-3 h-3" /> Loop
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1">{step.verb}</span>
                      <h3 className="text-sm font-black text-navy-900 uppercase tracking-tight mb-2 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs text-gray-600 font-medium leading-relaxed max-w-[220px]">
                        {step.desc}
                      </p>
                    </motion.div>

                    {/* Mobile connector line */}
                    {!isLast && (
                      <div className="md:hidden flex justify-center py-2">
                        <div className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-blue-200 rounded-full" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Phase band (desktop) */}
            <div className="hidden md:grid grid-cols-5 gap-3 mt-8">
              <div className="col-span-3 rounded-xl bg-navy-900/5 border border-navy-900/10 py-2 text-center text-[10px] font-black uppercase tracking-[0.2em] text-navy-900">
                Plan &amp; Design
              </div>
              <div className="col-span-1 rounded-xl bg-orange-500/10 border border-orange-500/20 py-2 text-center text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">
                Build
              </div>
              <div className="col-span-1 rounded-xl bg-blue-600/10 border border-blue-600/20 py-2 text-center text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">
                Ongoing
              </div>
            </div>
          </div>

          {/* Add-ons branching off Implementation / Maintenance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="mt-10 bg-white rounded-2xl border border-gray-200 shadow-sm p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="md:w-64 flex-shrink-0">
                <p className="text-[10px] font-black text-blue-700 uppercase tracking-[0.2em] mb-1">
                  Bolt On Anytime
                </p>
                <h4 className="text-lg font-black text-navy-900 uppercase tracking-tight leading-tight">
                  Add-On Capabilities
                </h4>
                <p className="text-xs text-gray-500 font-medium mt-2 leading-relaxed">
                  Scoped into your implementation or added later as your stack grows.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 flex-grow">
                {addOns.map((addon, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-bold text-blue-800"
                  >
                    <HiCheck className="w-4 h-4 text-blue-600" />
                    {addon}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Free Audit CTA Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-navy-900 to-blue-900 rounded-[2rem] p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black mb-6 text-white uppercase tracking-tighter">Not Sure Where to Start?</h3>
                <p className="text-xl mb-8 text-blue-100 font-medium">We&apos;ll audit your current setup and recommend the best path forward—completely free.</p>

                <h4 className="text-blue-400 font-black uppercase text-[10px] tracking-[0.2em] mb-4">Our 15-Minute Audit Covers:</h4>
                <ul className="space-y-3 mb-10">
                  <li className="flex items-center gap-3 text-blue-100 text-sm font-bold">
                    <HiCheck className="text-blue-400 text-xl" /> Current tracking gaps & data quality issues
                  </li>
                  <li className="flex items-center gap-3 text-blue-100 text-sm font-bold">
                    <HiCheck className="text-blue-400 text-xl" /> ROI opportunity sizing
                  </li>
                  <li className="flex items-center gap-3 text-blue-100 text-sm font-bold">
                    <HiCheck className="text-blue-400 text-xl" /> A recommended path for your business
                  </li>
                </ul>

                <p className="text-blue-300 text-[10px] font-black uppercase tracking-widest mb-8">Free. No obligation. No sales pitch.</p>

                <Link
                  href="/book-audit"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-black px-10 py-5 rounded-xl transition-all shadow-xl hover:shadow-orange-500/25 uppercase tracking-widest text-sm"
                >
                  Book Free 15-Min Audit
                </Link>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <h3 className="text-xl font-black mb-8 uppercase tracking-widest text-center text-blue-400 underline decoration-blue-600 underline-offset-8">Where You Fit</h3>
                <div className="space-y-6">
                  {[
                    { icon: "🔍", label: "Not Sure What's Broken", meta: "Any revenue stage", rec: "Start with an Audit" },
                    { icon: "📈", label: "Tracking Is Broken or Incomplete", meta: "Ready to fix it properly", rec: "Move to Implementation" },
                    { icon: "🚀", label: "Setup Works, Needs Upkeep", meta: "Existing sGTM or new build", rec: "Ongoing Managed Tracking" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <div className="font-black text-sm uppercase tracking-wide">{item.label}</div>
                        <div className="text-blue-300 text-xs font-bold">{item.meta}</div>
                        <div className="text-blue-400 text-[11px] font-black mt-1 uppercase">{item.rec}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-[100px]"></div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-black text-navy-900 mb-8 text-center uppercase tracking-widest">Common Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-navy-900 pr-8">{faq.q}</span>
                  {activeFaq === index ? <HiChevronUp className="text-blue-600 flex-shrink-0" /> : <HiChevronDown className="text-gray-400 flex-shrink-0" />}
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-gray-100"
                    >
                      <div className="p-6 text-gray-600 text-sm font-medium leading-relaxed bg-gray-50/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[10px] text-gray-500 mt-8 justify-center font-black uppercase tracking-widest">
            <HiShieldCheck className="text-blue-500 text-base" />
            <span>30-Day Satisfaction Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
