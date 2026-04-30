'use client';

import { motion } from 'framer-motion';
import {
  HiCheck,
  HiArrowRight,
  HiShieldCheck,
  HiLightningBolt,
  HiChartBar,
  HiCode,
  HiServer,
  HiCog,
  HiChevronDown,
  HiChevronUp,
  HiCheckCircle,
} from 'react-icons/hi';
import Link from 'next/link';
import { useState } from 'react';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';

interface FAQ {
  q: string;
  a: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function GTMSpecialistLanding() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const services = [
    {
      icon: HiCog,
      title: 'GTM Audit & Fix',
      description:
        'Comprehensive audit of your existing GTM setup. We identify broken tags, duplicate fires, missing conversions, data layer issues, and consent gaps — then fix everything.',
      deliverables: [
        'Full container health check',
        'Broken tag identification & repair',
        'Data layer validation',
        'Consent Mode v2 compliance',
        'Documentation of all changes',
      ],
    },
    {
      icon: HiServer,
      title: 'Server-Side GTM Implementation',
      description:
        'Full server-side Google Tag Manager setup with conversion APIs. Capture 30-40% more conversions by bypassing ad blockers and ITP restrictions.',
      deliverables: [
        'Server-side GTM container (Cloud Run)',
        'Google Ads Enhanced Conversions',
        'Meta Conversion API (CAPI)',
        'First-party cookie domain',
        'Ad blocker bypass configuration',
      ],
    },
    {
      icon: HiChartBar,
      title: 'GA4 + GTM Migration',
      description:
        'Complete GA4 implementation through GTM with custom events, e-commerce tracking, and enhanced measurement — built properly from day one.',
      deliverables: [
        'GA4 property setup & configuration',
        'Custom event tracking',
        'E-commerce data layer',
        'Cross-domain tracking',
        'BigQuery export configuration',
      ],
    },
    {
      icon: HiCode,
      title: 'E-Commerce Tracking',
      description:
        'Full e-commerce tracking implementation for Shopify, WooCommerce, Magento, or custom platforms. Every product view, add-to-cart, and purchase captured accurately.',
      deliverables: [
        'Complete data layer implementation',
        'Product impression & click tracking',
        'Cart & checkout funnel tracking',
        'Revenue & transaction tracking',
        'Cross-platform attribution',
      ],
    },
    {
      icon: HiShieldCheck,
      title: 'Consent Mode v2 Setup',
      description:
        'Implement Google Consent Mode v2 with your CMP to maintain ad targeting while respecting privacy. Required for EU/EEA advertising since March 2024.',
      deliverables: [
        'CMP integration (Cookiebot, OneTrust, etc.)',
        'Google Consent Mode v2 configuration',
        'Consent state testing & validation',
        'Advanced vs Basic consent mode setup',
        'Geo-targeted consent flows',
      ],
    },
    {
      icon: HiLightningBolt,
      title: 'Conversion API Integrations',
      description:
        'Direct server-to-server conversion tracking for Meta, TikTok, Pinterest, LinkedIn, and Snapchat. Send deduplicated, enriched conversion events through APIs.',
      deliverables: [
        'Meta Conversion API (CAPI)',
        'TikTok Events API',
        'Pinterest Conversion API',
        'LinkedIn Conversions API',
        'Event deduplication setup',
      ],
    },
  ];

  const whyUs = [
    {
      title: '15+ Years of Tracking Experience',
      description: 'Not a generalist agency — we\'re data engineers who specialize exclusively in GTM, GA4, and server-side tracking.',
    },
    {
      title: 'Direct Access to Engineers',
      description: 'No account managers or middlemen. You work directly with the people writing your tags and building your pipelines.',
    },
    {
      title: 'Up to 451% ROAS Improvement',
      description: 'Our implementations don\'t just track data — they recover conversion signal that directly improves ad platform performance.',
    },
    {
      title: 'Enterprise-Grade, Boutique Service',
      description: 'We build on Google Cloud Platform with the same infrastructure as enterprise brands, but with the responsiveness of a small team.',
    },
    {
      title: 'End-to-End Data Ownership',
      description: 'Everything we build, you own. No vendor lock-in, no proprietary platforms, no recurring license traps.',
    },
    {
      title: '70+ Successful Implementations',
      description: 'From DTC Shopify brands to $50M enterprise advertisers — proven results across industries and scales.',
    },
  ];

  const faqs: FAQ[] = [
    {
      q: 'What does a Google Tag Manager specialist do?',
      a: 'A GTM specialist implements and manages all tracking tags, conversion pixels, and analytics scripts on your website through Google Tag Manager. This includes GA4 setup, conversion tracking for Google Ads and Meta, e-commerce tracking, server-side tagging, consent management, and ensuring data accuracy across all marketing platforms. We go beyond basic tag placement — we architect your entire measurement infrastructure.',
    },
    {
      q: 'How much does it cost to hire a Google Tag Manager expert?',
      a: 'It depends on scope. A GTM audit and fix typically costs $1,500-$5,000. Full server-side GTM with conversion APIs starts at $12,000-$18,500. Ongoing managed tracking plans start at $150/month. We offer transparent, fixed-price quotes — no hourly billing surprises. Book a free audit call to get an exact quote for your situation.',
    },
    {
      q: 'Do I need a GTM specialist or can I do it myself?',
      a: 'Basic GTM is doable DIY, but you need a specialist for: server-side tagging, conversion API integrations (Meta CAPI, TikTok Events API), complex e-commerce tracking, cross-domain tracking, Consent Mode v2, and any setup where data accuracy directly impacts ad spend. A misconfigured GTM container silently loses conversion data — and your ad platforms optimize on bad signals.',
    },
    {
      q: 'What results can I expect?',
      a: 'Clients typically see: 30-40% more conversion data captured, +46% increase in Google Ads reported conversions, up to 451% ROAS improvement through better attribution, and 15-20% lower CPA from improved signal quality. Results vary by setup and ad spend, but we guarantee measurable improvement or we work at no additional cost until you see it.',
    },
    {
      q: 'How long does a GTM implementation take?',
      a: 'GTM audit & fix: 3-5 business days. GA4 + GTM setup: 1-2 weeks. Full server-side implementation with CAPI: 3-4 weeks. We work in sprints and provide regular updates. Emergency/rush implementations are available.',
    },
    {
      q: 'Do you work with Shopify, WooCommerce, and custom platforms?',
      a: 'Yes — we work with all major platforms including Shopify, Shopify Plus, WooCommerce, Magento, BigCommerce, Squarespace, WordPress, and fully custom-built sites. We\'ve implemented tracking for headless commerce setups, SPAs, and complex multi-domain architectures.',
    },
    {
      q: 'What\'s the difference between a GTM specialist and a marketing agency?',
      a: 'Most marketing agencies outsource tracking to junior developers or use pre-built templates. A GTM specialist designs custom measurement architecture tailored to your business. We understand both the marketing KPIs and the technical implementation — no telephone game between teams.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-navy-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl" />
        </div>
        <div className="content-container py-16 lg:py-24 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Certified GTM Expert
            </p>
            <h1 className="text-white text-[32px] lg:text-[52px] leading-[1.1] tracking-tight mb-6">
              Google Tag Manager Specialist:{' '}
              <span className="text-orange-400">Expert GTM Implementation That Drives Results</span>
            </h1>
            <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Stop losing conversions to broken tags and incomplete tracking. Our GTM specialists have 15+ years
              experience building measurement infrastructure for DTC brands, agencies, and enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-audit?service=tracking"
                className="btn-primary text-center inline-flex items-center justify-center gap-2 group"
              >
                Book a Free GTM Audit
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/case-studies"
                className="bg-white/10 text-white border-2 border-white/20 px-7 py-3.5 rounded-md font-heading font-semibold transition-all hover:bg-white/20 text-center"
              >
                See Our Results
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-6 justify-center mt-12 text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <HiCheckCircle className="text-green-400" /> 70+ implementations
              </span>
              <span className="flex items-center gap-2">
                <HiCheckCircle className="text-green-400" /> Up to 451% ROAS improvement
              </span>
              <span className="flex items-center gap-2">
                <HiCheckCircle className="text-green-400" /> 15+ years experience
              </span>
              <span className="flex items-center gap-2">
                <HiCheckCircle className="text-green-400" /> 5.0 client rating
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Answer-First Summary for AI/AEO */}
      <section className="py-10 bg-gray-50 border-b border-gray-200" data-speakable="true">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>A Google Tag Manager specialist</strong> implements and manages tracking tags, conversion pixels, and analytics scripts across your website using GTM. Services include GTM container audits and fixes, server-side GTM implementation with Meta CAPI and Google Ads Enhanced Conversions, GA4 migration, e-commerce tracking for Shopify and WooCommerce, Consent Mode v2 setup, and cross-domain tracking. Professional GTM implementation typically results in <strong>30-40% more conversion data captured</strong>, up to <strong>451% ROAS improvement</strong>, and <strong>15-20% lower CPA</strong>. A GTM audit costs <strong>$1,500-$5,000</strong>, full server-side implementation starts at <strong>$12,000-$18,500</strong>, and managed tracking plans start at <strong>$150/month</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2>GTM Specialist Services</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              From quick audits to full server-side implementations — we handle every aspect of Google Tag Manager.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <HiCheck className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2>Why Choose TagSpecialist as Your GTM Expert</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              We&apos;re not a generalist agency — we&apos;re data engineers who specialize in measurement infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <HiCheck className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2>How It Works</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              A straightforward process from audit to implementation to results.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Free Audit Call',
                description: 'We review your current tracking setup and identify what\'s broken, missing, or underperforming.',
              },
              {
                step: '2',
                title: 'Custom Proposal',
                description: 'Fixed-price quote with clear scope, timeline, and expected results. No surprises.',
              },
              {
                step: '3',
                title: 'Implementation',
                description: 'We build and deploy your tracking infrastructure. You get regular updates and full transparency.',
              },
              {
                step: '4',
                title: 'Validation & Handoff',
                description: 'Thorough QA, documentation, and knowledge transfer. Your tracking runs perfectly, with ongoing support available.',
              },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-navy-900 text-white flex items-center justify-center mx-auto mb-4 text-xl font-heading font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="content-container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2>Google Tag Manager Specialist FAQ</h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.05 }}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-heading font-semibold text-navy-900">{faq.q}</span>
                  {activeFaq === i ? (
                    <HiChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <HiChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="content-container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-white mb-4">Stop Losing Conversions to Broken Tracking</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Book a free 15-minute audit. We&apos;ll show you what&apos;s broken, what&apos;s missing, and exactly how to fix it —
              no sales pressure, just engineering expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-audit?service=tracking"
                className="bg-orange-500 text-white px-8 py-4 rounded-md font-heading font-semibold hover:bg-orange-600 transition-all shadow-lg inline-flex items-center justify-center gap-2 group"
              >
                Book Your Free GTM Audit
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="bg-white/10 text-white border-2 border-white/20 px-8 py-4 rounded-md font-heading font-semibold hover:bg-white/20 transition-all text-center"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
