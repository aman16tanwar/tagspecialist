'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HiCheck, HiPlus, HiShieldCheck, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

interface SetupPackage {
  name: string;
  price: string;
  roi: string;
  value: string;
  note: string;
  size: string;
  features: string[];
  popular?: boolean;
  popularTag?: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface Addon {
  name: string;
  price: string;
}

const PricingSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const setupPackages: SetupPackage[] = [
    {
      name: "Tracking Audit & Strategy",
      price: "$1,200 Fixed Price",
      roi: "Know exactly what's broken and how to fix it",
      value: "Stop guessing what's wrong with your tracking. Get a complete diagnosis with prioritized fixes and ROI projections before investing in implementation. 100% credited toward implementation if you proceed.",
      note: "Fixed scope. Delivered in 5 business days.",
      size: "Every project starts here",
      features: [
        "Full tracking stack audit",
        "Data quality assessment",
        "Written gap analysis report",
        "Prioritized fix recommendations",
        "ROI opportunity sizing",
        "30-min strategy call",
        "Fee credited toward implementation"
      ],
      popular: true,
      popularTag: "Start Here"
    },
    {
      name: "Implementation",
      price: "Typically $4K – $15K",
      roi: "Fixed quote after your audit — no surprises",
      value: "Scoped to exactly what your audit uncovers: from GA4 + GTM cleanups to full server-side tracking with BigQuery pipelines. You approve a fixed price before any work starts.",
      note: "Fixed quote. 2-4 week timeline.",
      size: "Scoped to your needs",
      features: [
        "GA4 & GTM foundation (as needed)",
        "Server-side GTM setup",
        "Meta CAPI & Google Enhanced Conversions",
        "BigQuery pipelines & dashboards (as needed)",
        "Advanced deduplication logic",
        "Documentation & training",
        "30-day post-launch support",
        "→ Audit fee credited toward this"
      ]
    },
    {
      name: "Managed Tracking",
      price: "From $150/mo",
      roi: "Your tracking stays accurate as platforms change",
      value: "Ad platforms and browsers change constantly. We host and maintain your server-side infrastructure, monitor data quality, and fix breakage before it costs you conversions.",
      note: "Monthly. No long-term contract.",
      size: "After your build (or existing setup)",
      features: [
        "Server-side GTM hosting & maintenance",
        "Uptime & data-flow monitoring",
        "Tag and platform API updates",
        "Consent & privacy compliance upkeep",
        "Monthly data-quality check",
        "Priority support"
      ]
    }
  ];

  const faqs: FAQ[] = [
    {
      q: "Why are you more expensive than Upwork freelancers?",
      a: "Freelancers set up tags. We engineer business-grade data infrastructure — server-side tracking, BigQuery pipelines, CRM integrations, and attribution modeling. You work directly with a senior data engineer, not a junior tag placer. Our systems are built to scale to $100M+ revenue."
    },
    {
      q: "What's included in post-launch support?",
      a: "Every build includes 30 days of 'hyper-care' period where we monitor data flows, fix any edge-case bugs, and ensure your team is fully comfortable using the new dashboards."
    },
    {
      q: "How does payment work?",
      a: "The $1,200 audit is paid upfront and fully credited toward implementation if you proceed. Implementation projects are 50% deposit to begin, 50% on completion. Managed tracking is billed monthly with no long-term contract."
    },
    {
      q: "How is this different from tools like Elevar or Littledata?",
      a: "Tools are products; we are a custom solution. Tools are 'one-size-fits-all' and you don't own the infrastructure. With us, you own the code, the GCP environment, and the data. We're built for complex setups where tools hit their limits."
    }
  ];

  const addons: Addon[] = [
    { name: "Training & Enablement", price: "$2,500/session" },
    { name: "Deep Data Audit", price: "$3,500 one-time" },
    { name: "Emergency Support", price: "$500/hour" }
  ];

  return (
    <section id="pricing" className="py-20 bg-brand-highlight">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-brand-primary mb-4 uppercase tracking-tighter">
            Investment Structure
          </h2>
          <p className="text-xl text-text-main max-w-3xl mx-auto">
            Every engagement starts with a fixed-price audit. Implementation is quoted from what the audit finds, and managed hosting keeps it running after launch.
          </p>
        </div>

        {/* Setup Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {setupPackages.map((plan, index) => {
            const id = plan.name.toLowerCase().replace(/ /g, '-').replace('-infrastructure', '').replace('&-', '');
            return (
              <div key={index} id={id} className={`bg-white rounded-2xl shadow-lg border-2 ${plan.popular ? 'border-blue-600 scale-105 z-10' : 'border-gray-200'} overflow-hidden hover:shadow-xl transition-all flex flex-col relative`}>
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 text-[10px] font-black uppercase tracking-[0.2em] absolute top-0 left-0 right-0">
                    {plan.popularTag}
                  </div>
                )}
                <div className={`p-8 text-center bg-gray-50 border-b border-gray-200 ${plan.popular ? 'pt-12' : ''}`}>
                  <h3 className="text-2xl font-bold mb-2 text-brand-primary uppercase tracking-tight">{plan.name}</h3>
                  <div className="text-4xl font-black text-brand-accent mb-1">{plan.price}</div>
                  <p className="text-text-main text-xs font-bold uppercase tracking-widest mb-4">{plan.note}</p>
                  <div className="p-3 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg text-left">
                      <p className="text-[10px] font-black text-blue-800 leading-relaxed uppercase mb-1">Value Framing</p>
                      <p className="text-[11px] font-bold text-blue-700 leading-tight">{plan.value}</p>
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-text-main">
                        <HiCheck className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-sm font-bold text-navy-900">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0">
                  <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-4 justify-center font-black uppercase tracking-widest">
                      <HiShieldCheck className="text-blue-500 text-base" />
                      <span>30-Day Satisfaction Guarantee</span>
                  </div>
                  <Link
                    href={plan.name === "Managed Tracking" ? "/managed-tracking" : "/book-audit"}
                    className={`block w-full py-4 rounded-xl font-black uppercase tracking-widest transition-all text-center ${plan.popular ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-500/25' : 'bg-navy-900 text-white hover:bg-navy-800'}`}
                  >
                    {plan.name === "Tracking Audit & Strategy" ? "Book Your Audit" : plan.name === "Implementation" ? "Start With an Audit" : "See Managed Plans"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selection Guide Section */}
        <div className="max-w-5xl mx-auto mb-20">
            <div className="bg-gradient-to-r from-navy-900 to-blue-900 rounded-[2rem] p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-black mb-6 text-white uppercase tracking-tighter">Not Sure Which Package?</h3>
                        <p className="text-xl mb-8 text-blue-100 font-medium">We&apos;ll audit your current setup and recommend the best solution—completely free.</p>

                        <h4 className="text-blue-400 font-black uppercase text-[10px] tracking-[0.2em] mb-4">Our 15-Minute Audit Covers:</h4>
                        <ul className="space-y-3 mb-10">
                            <li className="flex items-center gap-3 text-blue-100 text-sm font-bold">
                                <HiCheck className="text-blue-400 text-xl" /> Current tracking gaps & data quality issues
                            </li>
                            <li className="flex items-center gap-3 text-blue-100 text-sm font-bold">
                                <HiCheck className="text-blue-400 text-xl" /> ROI opportunity sizing
                            </li>
                            <li className="flex items-center gap-3 text-blue-100 text-sm font-bold">
                                <HiCheck className="text-blue-400 text-xl" /> Custom package recommendation
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
                        <h3 className="text-xl font-black mb-8 uppercase tracking-widest text-center text-blue-400 underline decoration-blue-600 underline-offset-8">Selection Guide</h3>
                        <div className="space-y-6">
                            {[
                                { icon: "Audit", label: "Not Sure What's Broken", meta: "Any revenue stage", rec: "Tracking Audit ($1.2K)" },
                                { icon: "Growth", label: "Tracking Is Broken or Incomplete", meta: "Ready to fix it properly", rec: "Implementation ($4K-$15K)" },
                                { icon: "Scale", label: "Setup Works, Needs Upkeep", meta: "Existing sGTM or new build", rec: "Managed Tracking ($150/mo)" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="text-2xl">{item.icon === "Audit" ? "🔍" : item.icon === "Growth" ? "📈" : "🚀"}</div>
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

        {/* Pricing FAQs */}
        <div className="max-w-3xl mx-auto mb-24">
            <h3 className="text-2xl font-black text-brand-primary mb-8 text-center uppercase tracking-widest">Pricing Strategy FAQ</h3>
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
        </div>

        {/* Strategic Add-Ons */}
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-sm border border-gray-200 p-10 lg:p-12">
           <h3 className="text-xl font-black text-brand-primary mb-10 text-center uppercase tracking-[0.2em]">Strategic Add-Ons</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {addons.map((addon, index) => (
               <div key={index} className="flex flex-col items-center text-center p-6 bg-brand-highlight rounded-2xl border border-gray-200 hover:border-blue-400 transition-all hover:-translate-y-1">
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                    <HiPlus className="w-5 h-5 text-brand-accent" />
                 </div>
                 <span className="font-black text-navy-900 text-sm block mb-1 uppercase tracking-wide">{addon.name}</span>
                 <span className="text-blue-600 font-black text-lg">{addon.price}</span>
               </div>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
