'use client';

import { motion } from 'framer-motion';
import {
  HiCheck,
  HiArrowRight,
  HiShieldCheck,
  HiServer,
  HiCog,
  HiChevronDown,
  HiChevronUp,
  HiCheckCircle,
  HiGlobe,
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

export default function SSTSpecialistLanding() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const services = [
    {
      icon: HiServer,
      title: 'Server-Side GTM Setup',
      description:
        'Full server-side Google Tag Manager deployment on Google Cloud Run with custom domain, first-party cookies, and ad blocker bypass. The foundation of modern tracking infrastructure.',
      deliverables: [
        'Cloud Run container deployment',
        'Custom domain & SSL configuration',
        'First-party cookie setup',
        'Ad blocker bypass configuration',
        'Health monitoring & alerting',
      ],
    },
    {
      icon: HiGlobe,
      title: 'Conversion API Integration',
      description:
        'Server-to-server conversion tracking for every major ad platform. Send deduplicated, enriched events directly from your server — no browser limitations.',
      deliverables: [
        'Meta Conversion API (CAPI)',
        'Google Ads Enhanced Conversions',
        'TikTok Events API',
        'Pinterest Conversion API',
        'Event deduplication & enrichment',
      ],
    },
    {
      icon: HiCog,
      title: 'Server-Side Migration',
      description:
        'Seamlessly migrate your existing client-side tracking to a server-side architecture. We run parallel tracking to validate data accuracy before full cutover.',
      deliverables: [
        'Current setup audit & migration plan',
        'Parallel client + server tracking',
        'Data accuracy validation',
        'Gradual traffic migration',
        'Post-migration QA & documentation',
      ],
    },
    {
      icon: HiShieldCheck,
      title: 'Managed Server-Side Tracking',
      description:
        'Ongoing monitoring, maintenance, and optimization of your server-side tracking infrastructure. Starting at $150/mo — we handle everything so you can focus on growth.',
      deliverables: [
        'Infrastructure monitoring & uptime',
        'Tag & event maintenance',
        'Monthly performance reports',
        'Platform API updates & fixes',
        'Priority support & escalation',
      ],
    },
  ];

  const whyChoose = [
    {
      title: '15+ Years of Tracking Experience',
      description:
        'Not a generalist agency. We are data engineers who specialize exclusively in server-side tagging, GTM, and conversion APIs.',
    },
    {
      title: 'A Decade of Implementations',
      description:
        'From DTC Shopify stores to enterprise advertisers spending $50M+ annually — proven results across every scale.',
    },
    {
      title: 'Direct Specialist Access',
      description:
        'No account managers, no middlemen. You work directly with the engineer building and maintaining your server-side setup.',
    },
    {
      title: '30-40% More Data Captured',
      description:
        'Server-side tagging bypasses ad blockers and ITP restrictions, recovering conversion data that client-side tracking simply cannot see.',
    },
    {
      title: 'ROI-First Approach',
      description:
        'Every implementation is designed to improve ad platform signal quality. Documented case studies show up to 451% ROAS improvement after going server-side.',
    },
    {
      title: 'Managed Infrastructure Included',
      description:
        'We deploy on Google Cloud Platform and handle monitoring, scaling, and maintenance. Enterprise-grade reliability without the DevOps overhead.',
    },
  ];

  const steps = [
    {
      step: '1',
      title: 'Audit Current Setup',
      description:
        'We analyze your existing tracking, identify data gaps, and quantify how much conversion signal you are losing to ad blockers and browser restrictions.',
    },
    {
      step: '2',
      title: 'Design Architecture',
      description:
        'Custom server-side architecture tailored to your platforms, ad channels, and data requirements. Fixed-price quote with clear deliverables.',
    },
    {
      step: '3',
      title: 'Implement & Test',
      description:
        'We deploy your server-side container, configure conversion APIs, and run parallel tracking to validate data accuracy before cutover.',
    },
    {
      step: '4',
      title: 'Launch & Monitor',
      description:
        'Full production launch with monitoring, documentation, and ongoing support. Your tracking runs reliably with zero maintenance on your end.',
    },
  ];

  const faqs: FAQ[] = [
    {
      q: 'What does a server-side tagging specialist do?',
      a: 'A server-side tagging specialist designs, implements, and maintains server-side tracking infrastructure that processes analytics and advertising tags on a cloud server instead of in the visitor\'s browser. This includes deploying server-side GTM containers on Google Cloud Run, configuring first-party cookie domains, integrating conversion APIs for platforms like Meta, Google Ads, and TikTok, and ensuring event deduplication between client-side and server-side streams. As a server-side tagging specialist, we go beyond basic setup — we architect measurement systems that recover the 30-40% of conversion data lost to ad blockers and browser privacy restrictions.',
    },
    {
      q: 'Is a server-side tracking specialist the same as a server-side tagging specialist?',
      a: 'Yes — "server-side tracking specialist" and "server-side tagging specialist" describe the same role with different terminology. Both implement server-side tag management (typically Google Tag Manager Server-Side on Cloud Run), conversion API integrations (Meta CAPI, Google Ads Enhanced Conversions, TikTok Events API), first-party cookie configuration, and ad blocker bypass. Marketing teams often say "server-side tracking specialist" while engineering teams say "server-side tagging specialist," but the deliverables are identical: capture 30-40% more conversions and feed cleaner data to your ad platforms.',
    },
    {
      q: 'How much does server-side tagging implementation cost?',
      a: 'Server-side tagging implementation typically ranges from $4,000 to $15,000 depending on scope. A basic server-side GTM setup with one or two conversion APIs starts around $4,000-$8,000. A full implementation with multiple CAPI integrations (Meta, Google Ads, TikTok, Pinterest), custom domain, first-party cookies, and parallel tracking validation runs $8,000-$15,000. Ongoing managed server-side tracking starts at $150/month. Cloud hosting on Google Cloud Run typically costs $30-$100/month depending on traffic. Book a free audit to get an exact quote from our server-side tagging specialist team.',
    },
    {
      q: 'How much more data will server-side tagging capture?',
      a: 'Most clients see a 30-40% increase in tracked conversions after moving to server-side tagging. The exact improvement depends on your audience — sites with tech-savvy visitors (who use ad blockers at higher rates) often see even larger gains. Server-side tagging bypasses browser-based ad blockers, extends cookie lifetimes beyond Safari\'s 7-day ITP limit using first-party domains, and sends conversion events directly from server to ad platform via conversion APIs. One client saw a 46% increase in Google Ads reported conversions and 451% ROAS improvement after our server-side tagging specialist implemented their full server-side setup.',
    },
    {
      q: 'How long does server-side tagging implementation take?',
      a: 'A typical server-side tagging implementation takes 2-4 weeks from kickoff to full production launch. Week one covers server deployment, custom domain setup, and Cloud Run configuration. Weeks two and three focus on conversion API integrations, event mapping, and parallel tracking validation. Week four is for final QA, data accuracy verification, and production cutover. Simpler setups (single CAPI integration) can be completed in 1-2 weeks. Our server-side tagging specialist team provides regular updates throughout the process and handles all the infrastructure complexity.',
    },
    {
      q: 'Do I need to replace my existing GTM setup?',
      a: 'No — server-side tagging works alongside your existing client-side GTM container, not as a replacement. We deploy a separate server-side GTM container that receives events from your client-side container and forwards them to ad platforms and analytics tools via server-to-server connections. Your existing tags continue to work during and after the migration. We run both in parallel to validate data accuracy before shifting traffic to the server-side path. This approach means zero downtime and no disruption to your current tracking during implementation.',
    },
    {
      q: 'What platforms do you support for server-side tracking?',
      a: 'We support all major advertising and analytics platforms for server-side tracking: Google Ads Enhanced Conversions, Meta Conversion API (CAPI), Google Analytics 4, TikTok Events API, Pinterest Conversion API, LinkedIn Conversions API, Snapchat Conversions API, and Microsoft Ads UET. On the e-commerce side, we work with Shopify, Shopify Plus, WooCommerce, Magento, BigCommerce, and fully custom-built platforms. As your server-side tagging specialist, we configure each platform\'s conversion API with proper event mapping, deduplication, and data enrichment to maximize signal quality.',
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
              Server-Side Tracking Expert
            </p>
            <h1 className="text-white text-[32px] lg:text-[52px] leading-[1.1] tracking-tight mb-6">
              Server-Side Tracking Specialist:{' '}
              <span className="text-orange-400">Expert Implementation for Better Data & Higher ROAS</span>
            </h1>
            <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Ad blockers and browser restrictions are silently killing 30-40% of your conversion data. Our server-side
              tagging specialists recover that lost signal — so your ad platforms optimize on complete, accurate data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-audit?service=tracking"
                className="btn-primary text-center inline-flex items-center justify-center gap-2 group"
              >
                Book a Free Tracking Audit
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
                <HiCheckCircle className="text-green-400" /> 10 years of implementations
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
              <strong>A server-side tagging specialist</strong> — also called a <strong>server-side tracking specialist</strong> —
              implements and manages server-side tracking infrastructure that routes data through your own server instead of
              relying on browser-based scripts. This includes deploying GTM server containers on Google Cloud Run, integrating
              conversion APIs (Meta CAPI, Google Ads Enhanced Conversions, TikTok Events API), configuring custom domains for
              first-party cookies, and bypassing ad blockers. As of 2026, server-side tracking typically recovers
              <strong> 30-40% of conversion data</strong> lost to ad blockers and browser restrictions like ITP. Implementation
              takes <strong>2-4 weeks</strong> and costs between <strong>$4,000 and $15,000</strong>, with ongoing managed
              tracking available from <strong>$150/month</strong>.
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
            <h2>Server-Side Tracking Services</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              End-to-end server-side tracking — from initial deployment to ongoing managed infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
            <h2>Why Choose TagSpecialist for Server-Side Tracking</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              We&apos;re not a generalist agency — we&apos;re data engineers who build server-side tracking
              infrastructure every day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChoose.map((item, index) => (
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

      {/* How It Works */}
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
              From audit to production launch in 2-4 weeks — a proven process with zero disruption to your live tracking.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
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

      {/* FAQ Section */}
      {/* Testimonials */}
      <TestimonialsSection />

      <section className="section-padding bg-gray-50">
        <div className="content-container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2>Server-Side Tagging Specialist FAQ</h2>
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

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="content-container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-white mb-4">Stop Losing 30-40% of Your Conversion Data</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Book a free 15-minute audit. We&apos;ll show you exactly how much conversion data you&apos;re losing to ad
              blockers and browser restrictions — and how server-side tagging recovers it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-audit?service=tracking"
                className="bg-orange-500 text-white px-8 py-4 rounded-md font-heading font-semibold hover:bg-orange-600 transition-all shadow-lg inline-flex items-center justify-center gap-2 group"
              >
                Book Your Free Tracking Audit
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
