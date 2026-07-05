'use client';

import { motion } from 'framer-motion';
import {
  HiCheck,
  HiArrowRight,
  HiCheckCircle,
  HiChevronDown,
  HiChevronUp,
  HiLightningBolt,
  HiClock,
  HiShieldCheck,
} from 'react-icons/hi';
import Link from 'next/link';
import { useState } from 'react';
import BeforeAfterDashboard from '@/components/landing/BeforeAfterDashboard';

interface FAQ {
  q: string;
  a: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function MetaCAPILanding() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    {
      number: '1',
      title: 'We Connect',
      duration: '15-min call',
      description:
        'Quick discovery call. You share your store URL, Meta Business Manager access, and Google Ads account. We confirm scope and lock in the start date.',
    },
    {
      number: '2',
      title: 'We Build',
      duration: '1 week',
      description:
        'We set up Meta Conversion API, Google Ads Enhanced Conversions, and server-side tracking on our managed Cloud Run infrastructure. You do nothing.',
    },
    {
      number: '3',
      title: 'You Win',
      duration: '14-21 days',
      description:
        'Meta and Google start receiving the conversion data they were missing. Per platform averages: lower CPA, more attributed conversions, higher reported ROAS. We monitor everything in the background as part of your managed hosting.',
    },
  ];

  const included = [
    {
      title: 'Meta Conversion API (CAPI)',
      desc: 'Direct server-to-server connection from your store to Facebook and Instagram ads.',
    },
    {
      title: 'Google Ads Enhanced Conversions',
      desc: 'Server-side hashed customer data sent to Google for better attribution and Smart Bidding.',
    },
    {
      title: 'GA4 Server-Side Configuration',
      desc: 'Cleaner GA4 data with first-party server-side events instead of unreliable browser-side tracking.',
    },
    {
      title: 'Event Deduplication',
      desc: 'Your existing Pixel keeps working. We deduplicate events so conversions are never double-counted.',
    },
    {
      title: 'Sandbox Testing Before Launch',
      desc: 'Every event is validated in a test environment before going live. Zero disruption to your campaigns.',
    },
    {
      title: 'Hosted on Our Infrastructure',
      desc: 'No GCP account needed on your end. We deploy on our managed Cloud Run setup and handle every operational detail.',
    },
  ];

  const outcomes = [
    {
      stat: '13%↓',
      label: 'Lower CPA on Meta',
      detail: "Meta's published average for advertisers using CAPI alongside the Pixel.",
    },
    {
      stat: '8%↑',
      label: 'More attributed conversions',
      detail: "Meta's published average lift when combining Pixel + Conversion API.",
    },
    {
      stat: '5-17%↑',
      label: 'Google Search conversion lift',
      detail: "Google's reported range for Enhanced Conversions — varies by vertical and audience.",
    },
  ];

  const faqs: FAQ[] = [
    {
      q: 'What is the Meta Conversion API?',
      a: 'The Meta Conversion API (also called CAPI) is a direct server-to-server connection between your website and Meta. It sends conversion data straight from your server to Facebook and Instagram ads — bypassing ad blockers and browser privacy restrictions like iOS 17 ATT. Meta uses this data to optimize ad delivery and report accurate conversions. Per Meta\'s own published averages, advertisers running CAPI alongside the Pixel see a 13% lower cost per acquisition and 8% more attributed conversions on average. Recovery in tech-heavy or ad-blocker-heavy verticals can be substantially higher.',
    },
    {
      q: 'Will this break my current Meta Pixel or Google Ads tracking?',
      a: 'No. We set up the Conversion API alongside your existing Meta Pixel and Google Ads tag — they run in parallel. We use event deduplication to ensure conversions are not double-counted. Your current campaigns keep running normally throughout the setup, and we test everything in a sandbox before going live.',
    },
    {
      q: 'Do I need a Google Cloud, AWS, or any technical account?',
      a: 'No. We host all the infrastructure on our managed Cloud Run setup. You do not need a Google Cloud account, a server, or any technical knowledge. You give us access to your Meta Business Manager and Google Ads account — we handle everything else.',
    },
    {
      q: 'How long does setup take?',
      a: '1 week from kickoff to live. Days 1-2: we learn your store and configure events. Days 3-5: we deploy and test the Conversion API in a sandbox. Days 6-7: we go live and validate data is flowing correctly. You will see results in your Meta Ads Manager and Google Ads accounts within 14-21 days.',
    },
    {
      q: 'What platforms do you support?',
      a: 'Ad platforms: Meta Conversion API (Facebook + Instagram), Google Ads Enhanced Conversions, GA4 server-side, TikTok Events API, Pinterest Conversion API, Snapchat CAPI, and LinkedIn Conversions API. E-commerce platforms: Shopify, Shopify Plus, WooCommerce, Magento, BigCommerce, and custom-built sites.',
    },
    {
      q: 'Is the $150/month managed hosting required, or can I just pay the $1,500 setup?',
      a: 'Managed hosting is required — they\'re sold as one bundled package, not separate optional tiers. The $1,500 covers building your Meta CAPI and Google Ads Enhanced Conversions setup; the $150/mo covers what keeps it running: cloud infrastructure on Google Cloud Run, 24/7 uptime monitoring, automatic scaling for traffic spikes, alert routing, monthly performance reviews, and unlimited tracking-issue support. Without managed hosting, the infrastructure has nowhere to live and no one watching it.',
    },
    {
      q: 'Why $1,500 — what is the catch?',
      a: 'No catch — $1,500 covers about 20 hours of setup work, which is realistic because we\'ve built Conversion API implementations for a decade and have a tight process. The $1,500 is intentionally an accessible entry point. Our business model is the bundled monthly managed hosting and clients who later expand into bigger projects (data warehouses, attribution modeling). The setup gets you working Conversion APIs and lets you experience the work before any larger commitment.',
    },
    {
      q: 'What if I want to cancel or move to my own setup later?',
      a: 'Your plan includes a 6-month service term. After that, cancel anytime or migrate to your own Google Cloud account ($500 migration service to move everything over). If something goes wrong in the first 30 days of going live, we offer a full money-back guarantee. For early exits before the 6-month term, you can either pay out remaining months or use the migration service — whichever is lower.',
    },
  ];

  return (
    <>
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
              Stop Losing Ad Conversions
            </p>
            <h1 className="text-white text-[32px] lg:text-[52px] leading-[1.1] tracking-tight mb-6">
              Send Meta & Google the{' '}
              <span className="text-orange-400">Conversion Data They&apos;re Missing</span>
            </h1>
            <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
              Done-for-you Meta Conversion API + Google Ads Enhanced Conversions setup.{' '}
              <strong className="text-white">$1,500 setup + $150/mo managed hosting.</strong> Delivered in
              1 week, no Google Cloud account needed.
            </p>
            <p className="text-gray-400 text-base max-w-2xl mx-auto mb-8">
              Meta reports a <strong className="text-gray-200">13% lower CPA</strong> and{' '}
              <strong className="text-gray-200">8% more attributed conversions</strong> for CAPI users.
              Google reports up to <strong className="text-gray-200">17% conversion lift</strong> with
              Enhanced Conversions. We&apos;ve seen up to 40% recovery in tech-heavy verticals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-audit?service=conversion-api"
                className="btn-primary text-center inline-flex items-center justify-center gap-2 group"
              >
                Get a Free Tracking Diagnostic
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#estimate-recovery"
                className="bg-white/10 text-white border-2 border-white/20 px-7 py-3.5 rounded-md font-heading font-semibold transition-all hover:bg-white/20 text-center inline-flex items-center justify-center gap-2"
              >
                Estimate Your Recovery
              </Link>
            </div>

            {/* Above-the-fold trust strip */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">
                Built and run by a senior data engineer — 10 years in ad-tech
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-gray-300 text-sm font-semibold">
                <span>Dayer Digital Agency</span>
                <span className="text-gray-600">·</span>
                <span>Willow Voice</span>
                <span className="text-gray-600">·</span>
                <span>Pets on Me</span>
                <span className="text-gray-600">·</span>
                <span className="text-gray-400">+ 67 more</span>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-6 justify-center mt-8 text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <HiCheckCircle className="text-green-400" /> 5.0 on Upwork
              </span>
              <span className="flex items-center gap-2">
                <HiCheckCircle className="text-green-400" /> 1-week delivery
              </span>
              <span className="flex items-center gap-2">
                <HiCheckCircle className="text-green-400" /> 15+ years experience
              </span>
              <span className="flex items-center gap-2">
                <HiCheckCircle className="text-green-400" /> 30-day money-back
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-padding bg-white">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              How It Works
            </p>
            <h2>Three Steps. One Week. Done.</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              You don&apos;t need to know what server-side tracking is. We handle every technical detail end to end.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl mb-0">{step.title}</h3>
                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
                      {step.duration}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get (Outcomes) */}
      <section className="section-padding bg-gray-50">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              The Outcome
            </p>
            <h2>What Actually Changes for You</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Cleaner data into Meta and Google. Better algorithms making better decisions on your ad spend.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="text-5xl font-black text-orange-500 mb-2">{outcome.stat}</div>
                <p className="text-navy-900 font-bold text-lg mb-3">{outcome.label}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{outcome.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* What's Included */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-center text-2xl mb-8">What&apos;s included in every package:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {included.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 flex items-start gap-4 border border-gray-100"
                >
                  <HiCheck className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-navy-900 mb-1">{item.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Before/After Dashboard */}
      <BeforeAfterDashboard />

      {/* Who This Is For — qualifying section */}
      <section className="section-padding bg-gray-50">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Who This Is For
              </p>
              <h2>Is This the Right Fit for You?</h2>
              <p className="text-gray-600 text-base mt-4 max-w-2xl mx-auto">
                We don&apos;t want to waste your time or ours. Here&apos;s an honest read on who
                this service is built for.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Best Fit */}
              <div className="bg-white border-2 border-green-200 rounded-xl p-8">
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-bold uppercase tracking-widest rounded">
                    Best Fit
                  </span>
                </div>
                <ul className="space-y-3">
                  {[
                    'Spending $3-5k+/month on Meta or Google ads (sometimes both)',
                    'Running Shopify, Shopify Plus, WooCommerce, or a custom-built store',
                    'Lead gen / SaaS sending conversion events to Meta or Google Ads',
                    'Already see GA4 / ad platform numbers not matching your backend',
                    'Want cleaner signal so Meta and Google optimize on real conversions',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      <HiCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not the Right Fit */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-2.5 py-1 bg-gray-500 text-white text-xs font-bold uppercase tracking-widest rounded">
                    Not the Right Fit
                  </span>
                </div>
                <ul className="space-y-3">
                  {[
                    'Spending under $1k/month on ads — the math won\'t justify the setup cost',
                    'Running only organic / SEO traffic with no paid ad spend',
                    'Need a fix in under 5 business days — we ship in one week, not 24 hours',
                    'Want fully self-hosted on your own GCP / AWS account (we offer a separate migration service for that)',
                    'Looking for a $99 / one-time fix — we run managed infra, not a side-gig setup',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="text-gray-400 font-bold text-lg leading-none mt-0.5 flex-shrink-0">×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-8">
              Not sure where you fall?{' '}
              <Link
                href="/book-audit?service=conversion-api"
                className="text-blue-600 hover:underline font-semibold"
              >
                Book the free diagnostic
              </Link>{' '}
              — we&apos;ll tell you straight.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Objection Removal — right before Pricing */}
      <section className="section-padding bg-white">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Common Concerns
              </p>
              <h2>What This Doesn&apos;t Require</h2>
              <p className="text-gray-600 text-base mt-4 max-w-2xl mx-auto">
                Server-side tracking sounds intimidating. We&apos;ve made the setup so you don&apos;t
                need any of it on your end.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'No Google Cloud, AWS, or Azure account on your side',
                'No server, no SSH, no DevOps work',
                'No developer hours from your team',
                'No replacing or removing your existing Meta Pixel',
                'No replacing or removing your existing Google Ads tag',
                'No downtime to your live campaigns during setup',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3"
                >
                  <HiCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-gray-50">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-3">
              Recover Lost Conversions in 7 Days
            </p>
            <h2>Setup + Managed Hosting — One Package.</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Setup gets your Conversion APIs live. Managed hosting keeps them running and your data
              flowing. Both are required — pick the plan that matches your number of sites.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Single Site Package */}
            <div className="bg-white border-2 border-blue-500 rounded-2xl p-8 flex flex-col relative shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Most Popular
              </div>
              <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">
                Single Site Package
              </p>
              <div className="mb-2">
                <span className="text-5xl font-black text-navy-900">$1,500</span>
                <span className="text-gray-500 ml-2">one-time setup</span>
              </div>
              <div className="mb-6 pb-6 border-b border-gray-200">
                <span className="text-2xl font-bold text-navy-900">+ $150</span>
                <span className="text-gray-500 ml-2">/mo managed hosting</span>
              </div>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Full Meta CAPI + Google Ads Enhanced Conversions setup for one site, plus ongoing managed
                infrastructure so you never touch a server.
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <HiCheck className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> 1-week setup delivery + 30-day post-launch monitoring
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <HiCheck className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Hosted on our managed Cloud Run setup
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <HiCheck className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> 24/7 uptime monitoring + automatic scaling
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <HiCheck className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Unlimited support for tracking issues
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <HiCheck className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> Full documentation handover
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <HiCheck className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" /> 6-month minimum service term
                </li>
              </ul>
              <Link
                href="/book-audit?service=conversion-api"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Multi-Site Package */}
            <div className="bg-navy-900 text-white rounded-2xl p-8 flex flex-col">
              <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
                Multi-Site Package
              </p>
              <div className="mb-2">
                <span className="text-5xl font-black">$1,500</span>
                <span className="text-gray-400 ml-2">one-time setup</span>
              </div>
              <div className="mb-6 pb-6 border-b border-white/20">
                <span className="text-2xl font-bold">+ $220</span>
                <span className="text-gray-400 ml-2">/mo managed hosting</span>
              </div>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                For brands or agencies running 2 sites. Same setup work covers both sites, hosted on one
                unified plan. Saves $80/mo vs. two single-site plans.
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <HiCheck className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" /> Everything in Single Site Package
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <HiCheck className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" /> 2 sites configured + hosted on one plan
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <HiCheck className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" /> Unified monitoring dashboard across sites
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <HiCheck className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" /> Save $80/mo vs. two single-site plans
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <HiCheck className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" /> 6-month minimum service term
                </li>
              </ul>
              <Link
                href="/book-audit?service=conversion-api"
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Running 3+ sites or an agency?{' '}
            <Link href="/book-audit?service=conversion-api" className="text-blue-600 hover:underline font-semibold">
              Let&apos;s chat about a volume plan.
            </Link>
          </p>
        </div>
      </section>

      {/* Trust / Reviews */}
      <section className="section-padding bg-gray-50">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Trusted By
            </p>
            <h2>Real Brands. Real Implementations.</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              A selection of agencies and brands we&apos;ve built Conversion API infrastructure for.
            </p>
          </motion.div>

          {/* Client Strip */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Dayer Digital Agency', desc: 'Performance marketing agency' },
                { name: 'Willow Voice', desc: 'Voice AI platform' },
                { name: 'Pets on Me', desc: 'DTC pet brand' },
              ].map((client) => (
                <div
                  key={client.name}
                  className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <p className="font-bold text-navy-900 text-base mb-1">{client.name}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">{client.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Verifiable Trust Strip */}
          <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 mb-4">
              <div>
                <div className="text-3xl font-black text-navy-900">10+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Years of Engineering</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-3xl text-orange-400">★★★★★</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">5.0 Rating · Upwork</div>
              </div>
              <div>
                <div className="text-3xl font-black text-navy-900">15+ yrs</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Experience</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Verified reviews and project history available on request.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2>Common Questions</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  className="w-full text-left p-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span className="font-bold text-navy-900 pr-4">{faq.q}</span>
                  {activeFaq === idx ? (
                    <HiChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <HiChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included in the Free Diagnostic */}
      <section className="section-padding bg-white">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
                What&apos;s Free?
              </p>
              <h2>What&apos;s Included in Your Free Diagnostic</h2>
              <p className="text-gray-600 text-base mt-4 max-w-2xl mx-auto">
                A 15-minute screen-share call. You walk away with a clear picture of your tracking
                gaps and what it would take to fix them — whether you hire us or not.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Live Setup Audit',
                  desc: 'We screen-share through your current Meta Pixel, Google Ads tag, and any existing CAPI or Enhanced Conversions setup. You see exactly where the gaps are.',
                },
                {
                  title: 'Lost-Conversion Estimate',
                  desc: 'Based on your ad spend, traffic, and audience, we estimate how many conversions ad blockers and iOS 17 ATT are hiding from your campaigns each month.',
                },
                {
                  title: 'Written Recovery Roadmap',
                  desc: 'You leave with a sequenced fix list — what to do first, what is highest impact, and what is optional. Build it yourself or hire us. Your call.',
                },
                {
                  title: 'Zero Sales Pitch',
                  desc: 'If your setup is fine, we will tell you. If it is not, you decide what to do with the info. No follow-up emails, no pressure to buy anything.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6"
                >
                  <div className="flex items-start gap-3">
                    <HiCheck className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-navy-900 mb-2">{item.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mt-8">
              15-minute call · No credit card · No prerequisite · Email follow-up only if you ask
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-b from-navy-900 to-navy-800 text-white text-center">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 text-orange-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-orange-500/20">
              <HiLightningBolt /> 1-Week Delivery
            </div>
            <h2 className="text-white text-3xl lg:text-5xl mb-6 leading-tight">
              Stop ignoring the dashboard prompts.
            </h2>
            <p className="text-gray-300 text-lg lg:text-xl mb-10 leading-relaxed">
              Book a free 15-min call. We&apos;ll tell you exactly what your Conversion API setup needs and how
              fast we can ship it.
            </p>
            <Link
              href="/book-audit?service=conversion-api"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-10 py-5 rounded-md transition-all shadow-2xl hover:shadow-orange-500/40 group"
            >
              Get a Free Tracking Diagnostic
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex flex-wrap gap-6 justify-center mt-10 text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <HiClock className="text-blue-400" /> 1-week delivery
              </span>
              <span className="flex items-center gap-2">
                <HiShieldCheck className="text-blue-400" /> 30-day money-back guarantee
              </span>
              <span className="flex items-center gap-2">
                <HiCheckCircle className="text-blue-400" /> 10 years of implementations
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Mobile CTA — only visible on mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-navy-900 truncate">Recover Lost Conversions</p>
            <p className="text-xs text-gray-500 truncate">$1,500 + $150/mo · 1-week delivery</p>
          </div>
          <Link
            href="/book-audit?service=conversion-api"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2.5 rounded-md text-sm whitespace-nowrap flex items-center gap-1"
          >
            Free Diagnostic
            <HiArrowRight className="text-xs" />
          </Link>
        </div>
      </div>

      {/* Spacer so the sticky mobile bar doesn't obscure the final CTA */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  );
}
