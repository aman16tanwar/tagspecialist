'use client';

import { motion } from 'framer-motion';
import {
  HiShieldCheck,
  HiLightningBolt,
  HiChartBar,
  HiArrowRight,
  HiDatabase,
  HiGlobe,
  HiClock,
  HiEye,
  HiChevronDown,
  HiChevronUp,
} from 'react-icons/hi';
import Link from 'next/link';
import { useState } from 'react';

interface FAQ {
  q: string;
  a: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BenefitsOfServerSideTagging() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: HiChartBar,
      title: 'Capture 30-40% More Conversion Data',
      description:
        'Ad blockers and browser restrictions like ITP silently kill your conversion tracking. Server-side tagging bypasses these by routing data through your own server, capturing conversions that client-side tags miss entirely.',
      stat: '+38%',
      statLabel: 'average attribution accuracy improvement',
    },
    {
      icon: HiShieldCheck,
      title: 'Ad Blocker & ITP Bypass',
      description:
        '30-40% of users run ad blockers that prevent your Meta Pixel, Google Ads tag, and GA4 from firing. Server-side tagging uses your first-party domain, making tracking requests indistinguishable from normal site traffic.',
      stat: '40%',
      statLabel: 'of users block client-side tracking',
    },
    {
      icon: HiLightningBolt,
      title: 'Faster Website Performance',
      description:
        'Every client-side tag adds JavaScript that slows your page load. Server-side tagging moves this processing off the browser — fewer scripts, faster page loads, better Core Web Vitals, and improved SEO rankings.',
      stat: '20-30%',
      statLabel: 'faster page load times',
    },
    {
      icon: HiGlobe,
      title: 'GDPR, CCPA & Privacy Compliance',
      description:
        'Control exactly what data is sent to third-party platforms. Strip PII, enforce consent decisions, and filter sensitive data on your server before it reaches Google, Meta, or TikTok. Centralized privacy control.',
      stat: '100%',
      statLabel: 'data control before third-party sharing',
    },
    {
      icon: HiDatabase,
      title: 'Better Ad Platform Performance',
      description:
        'More complete conversion data means ad platform algorithms optimize better. Google Ads Smart Bidding and Meta Advantage+ need accurate signals. Server-side tagging feeds them the data they need to lower your CPA.',
      stat: '+46%',
      statLabel: 'increase in Google Ads reported conversions',
    },
    {
      icon: HiClock,
      title: 'Extended First-Party Cookie Lifespan',
      description:
        'Safari ITP limits client-side cookies to 7 days (or 24 hours from ads). Server-side tagging sets cookies from your domain with extended lifespans, maintaining user identity for accurate attribution across sessions.',
      stat: '7→400+',
      statLabel: 'days cookie lifespan (Safari)',
    },
    {
      icon: HiEye,
      title: 'Data Enrichment at the Server Level',
      description:
        'Enrich events with CRM data, customer segments, lifetime value, or product margins before sending to analytics — all without exposing sensitive data to the browser. Turn raw pageviews into actionable business insights.',
      stat: 'Real-time',
      statLabel: 'server-side data enrichment',
    },
  ];

  const comparisonRows = [
    { feature: 'Conversion data captured', clientSide: '60-70%', serverSide: '95-100%' },
    { feature: 'Ad blocker resilience', clientSide: 'None — blocked entirely', serverSide: 'Full bypass via first-party domain' },
    { feature: 'Cookie lifespan (Safari)', clientSide: '7 days (ITP limited)', serverSide: '400+ days (server-set)' },
    { feature: 'Page load impact', clientSide: 'High — multiple JS tags', serverSide: 'Minimal — single request' },
    { feature: 'Privacy compliance', clientSide: 'Limited — data sent to browser', serverSide: 'Full — centralized data control' },
    { feature: 'Data enrichment', clientSide: 'Not possible', serverSide: 'CRM, LTV, segment data at server' },
    { feature: 'Meta CAPI support', clientSide: 'Browser pixel only', serverSide: 'Direct server-to-server API' },
    { feature: 'Google Ads Enhanced Conversions', clientSide: 'Client-side only', serverSide: 'Server-side with hashed PII' },
  ];

  const faqs: FAQ[] = [
    {
      q: 'What is server-side tagging?',
      a: 'Server-side tagging moves your tracking and analytics data collection from the user\'s browser to a server you control. Instead of JavaScript tags firing in the browser (where they can be blocked), events are sent to your server first, then forwarded to platforms like GA4, Google Ads, and Meta — with full control over what data is shared.',
    },
    {
      q: 'What are the main benefits of server-side tagging?',
      a: 'The key benefits are: 30-40% more conversion data captured (bypassing ad blockers and ITP), faster website performance (fewer client-side scripts), better privacy compliance (GDPR/CCPA), improved ad platform performance through more complete conversion signals, extended cookie lifespans for better attribution, and the ability to enrich data with CRM/business data at the server level.',
    },
    {
      q: 'What are the advantages of server-side tagging over client-side tagging?',
      a: 'The main advantages of server-side tagging over client-side tagging are: (1) it bypasses ad blockers and ITP restrictions that block 30-40% of client-side tracking, (2) it processes data on a server you control instead of in the browser, giving you a centralized point to enforce consent, strip PII, and enrich events with CRM data, (3) it extends first-party cookie lifespans from Safari\'s 7-day ITP limit to 400+ days, (4) it reduces the JavaScript footprint on your site, improving Core Web Vitals and page load speed, and (5) it sends server-to-server conversion events via APIs (Meta CAPI, Google Ads Enhanced Conversions, TikTok Events API) that browsers cannot block. Combined, these advantages typically deliver +46% more reported Google Ads conversions and up to 451% ROAS improvement.',
    },
    {
      q: 'How much does server-side tagging improve conversion tracking?',
      a: 'On average, businesses see 30-40% more conversions captured after implementing server-side tagging. This varies by industry and audience — sites with tech-savvy audiences (higher ad blocker usage) see even greater improvements. Google case studies report up to +46% increase in reported conversions, and Meta CAPI studies show up to +90% increase.',
    },
    {
      q: 'Is server-side tagging worth the investment?',
      a: 'If you spend $10K+ per month on digital ads, server-side tagging is almost certainly worth it. The 30-40% more conversion data means better algorithm optimization, lower CPAs, and more accurate attribution. Most businesses see ROI within the first month through improved ad efficiency alone.',
    },
    {
      q: 'Does server-side tagging replace Google Tag Manager?',
      a: 'No — server-side tagging works alongside your existing GTM setup. You keep your web container for sending events, and add a server container that processes and routes those events. It\'s an upgrade, not a replacement.',
    },
    {
      q: 'How does server-side tagging help with GDPR and CCPA?',
      a: 'Server-side tagging gives you a central chokepoint for data flowing to third parties. You can enforce consent decisions, strip personally identifiable information (PII), redact sensitive fields, and ensure only compliant data reaches platforms like Google and Meta — all before the data leaves your infrastructure.',
    },
    {
      q: 'How long does it take to implement server-side tagging?',
      a: 'A basic implementation takes 1-2 weeks. A full enterprise setup with Meta CAPI, Google Ads Enhanced Conversions, consent management, and data enrichment takes 3-4 weeks. At TagSpecialist, we handle everything end-to-end.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-navy-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl" />
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
              Server-Side Tagging Guide
            </p>
            <h1 className="text-white text-[32px] lg:text-[52px] leading-[1.1] tracking-tight mb-6">
              Benefits of Server-Side Tagging:{' '}
              <span className="text-orange-400">Why Leading Brands Are Making the Switch</span>
            </h1>
            <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Ad blockers eat 30-40% of your conversion data. Browser restrictions shorten cookies to 7 days.
              Your ad platforms are optimizing on incomplete signals. Server-side tagging fixes all of this.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-audit?service=tracking"
                className="btn-primary text-center inline-flex items-center justify-center gap-2 group"
              >
                Get a Free Tracking Audit
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/server-side-tagging-guide"
                className="bg-white/10 text-white border-2 border-white/20 px-7 py-3.5 rounded-md font-heading font-semibold transition-all hover:bg-white/20 text-center"
              >
                Read the Full Technical Guide
              </Link>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto"
          >
            {[
              { value: '+38%', label: 'Attribution Accuracy' },
              { value: '30-40%', label: 'More Conversions Captured' },
              { value: '+46%', label: 'Google Ads Conversions' },
              { value: '+90%', label: 'Meta CAPI Conversions' },
            ].map((stat, i) => (
              <div key={i} className="text-center bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-2xl lg:text-3xl font-heading font-bold text-orange-400">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Answer-First Summary for AI/AEO */}
      <section className="py-10 bg-gray-50 border-b border-gray-200" data-speakable="true">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>The main benefits of server-side tagging</strong> are: capturing <strong>30-40% more conversion data</strong> by bypassing ad blockers and browser restrictions, improving website performance by <strong>40-60%</strong> through reduced client-side JavaScript, ensuring <strong>GDPR/CCPA privacy compliance</strong> with centralized data control, extending first-party cookie lifespans from <strong>7 days to 400+ days</strong>, improving ad platform performance (Google reports <strong>+46% conversions</strong>, Meta reports <strong>+90% conversions</strong>), and enabling server-level data enrichment before vendor transmission. Server-side tagging routes tracking data through your own server instead of loading scripts in the browser, giving you full control over what data reaches third-party platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-white">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2>7 Key Benefits and Advantages of Server-Side Tagging</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              These advantages of server-side tagging directly translate to better marketing ROI and lower cost per acquisition.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                    <div className="bg-navy-50 rounded-lg p-3 inline-flex items-center gap-3">
                      <span className="text-xl font-heading font-bold text-navy-900">
                        {benefit.stat}
                      </span>
                      <span className="text-sm text-gray-600">{benefit.statLabel}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-gray-50">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2>Server-Side vs Client-Side Tagging: Full Comparison</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              See exactly what you gain by moving from browser-based to server-based tracking.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto overflow-x-auto"
          >
            <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="text-left px-6 py-4 font-heading font-semibold rounded-tl-xl">Feature</th>
                  <th className="text-left px-6 py-4 font-heading font-semibold">Client-Side</th>
                  <th className="text-left px-6 py-4 font-heading font-semibold rounded-tr-xl">
                    Server-Side
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-6 py-4 font-semibold text-navy-900">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-500">{row.clientSide}</td>
                    <td className="px-6 py-4 text-green-700 font-medium">{row.serverSide}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
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
            <h2>How Server-Side Tagging Works</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              A simple shift in architecture that delivers outsized results.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Browser Sends Events to Your Server',
                description:
                  'Instead of sending data directly to Google, Meta, and TikTok from the browser (where it gets blocked), events go to your first-party server endpoint first.',
              },
              {
                step: '2',
                title: 'Server Processes & Enriches',
                description:
                  'Your server validates the data, enforces consent rules, strips PII, and enriches events with CRM data — all before any third party sees it.',
              },
              {
                step: '3',
                title: 'Server Sends to Platforms',
                description:
                  'Clean, enriched, consent-compliant data is sent server-to-server to Google Ads, Meta CAPI, GA4, TikTok, and others via their APIs.',
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
                <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-4 text-xl font-heading font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-white">Real Results from Server-Side Tagging</h2>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
              These are actual results from TagSpecialist implementations, not theoretical projections.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                client: 'DTC Fashion Brand',
                result: '451% ROAS Increase',
                detail: 'Server-side tagging + first-party attribution recovered $200K+/month in previously invisible conversions.',
              },
              {
                client: 'B2B SaaS Company',
                result: '35% Lower CPL',
                detail: '40% more conversion signal through server-side Meta CAPI and Google Ads Enhanced Conversions.',
              },
              {
                client: 'E-commerce (Shopify)',
                result: '+90% Meta Conversions',
                detail: 'Server-side CAPI implementation captured conversions blocked by iOS privacy and ad blockers.',
              },
            ].map((cs, i) => (
              <motion.div
                key={cs.client}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.15 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8"
              >
                <p className="text-orange-400 font-heading font-semibold text-sm mb-2">
                  {cs.client}
                </p>
                <p className="text-3xl font-heading font-bold text-white mb-3">{cs.result}</p>
                <p className="text-gray-400">{cs.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="content-container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2>Frequently Asked Questions About Server-Side Tagging</h2>
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
                className="border border-gray-200 rounded-xl overflow-hidden"
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
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="content-container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-white mb-4">Ready to Capture 30-40% More Conversions?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get a free tracking audit. We&apos;ll show you exactly how much conversion data you&apos;re losing
              and what server-side tagging can recover.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-audit?service=tracking"
                className="bg-orange-500 text-white px-8 py-4 rounded-md font-heading font-semibold hover:bg-orange-600 transition-all shadow-lg inline-flex items-center justify-center gap-2 group"
              >
                Book Your Free Audit
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/managed-tracking"
                className="bg-white/10 text-white border-2 border-white/20 px-8 py-4 rounded-md font-heading font-semibold hover:bg-white/20 transition-all text-center"
              >
                See Managed Tracking Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
