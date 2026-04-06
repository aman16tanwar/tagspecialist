'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiCheck,
  HiShieldCheck,
  HiServer,
  HiChartBar,
  HiClock,
  HiCurrencyDollar,
  HiLightningBolt,
  HiChevronDown,
  HiChevronUp
} from 'react-icons/hi';
import Link from 'next/link';

interface PricingTier {
  name: string;
  price: string;
  setupFee: string;
  description: string;
  features: string[];
  bestFor: string;
  popular?: boolean;
}

interface FAQ {
  q: string;
  a: string;
}

interface Stat {
  value: string;
  label: string;
  source: string;
}

export default function ManagedTrackingLanding() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [adSpend, setAdSpend] = useState<number>(5000);

  const stats: Stat[] = [
    { value: '40-70%', label: 'Conversion data lost to blockers', source: 'Industry Average' },
    { value: '+46%', label: 'Increase in Google Ads conversions', source: 'Google Case Study' },
    { value: '+90%', label: 'Increase in Meta conversions', source: 'WooCommerce Study' },
    { value: '-13%', label: 'Lower cost per result', source: 'Meta CAPI Data' },
  ];

  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter',
      price: '$150',
      setupFee: '$500',
      description: '1 domain, up to 100K pageviews/mo',
      bestFor: 'Small businesses, single brand DTC',
      features: [
        '1 domain included',
        'Up to 100K pageviews/month',
        'Server-side GTM container',
        'Google Ads Enhanced Conversions',
        'Meta Conversion API (CAPI)',
        'Custom domain (first-party cookies)',
        'Ad blocker bypass (Custom Loader)',
        'Monthly performance report',
        'Email support',
      ],
    },
    {
      name: 'Growth',
      price: '$250',
      setupFee: '$750',
      description: 'Up to 3 domains, 500K pageviews/mo',
      bestFor: 'Agencies, multi-brand businesses',
      features: [
        'Up to 3 domains',
        'Up to 500K pageviews/month',
        'Everything in Starter, plus:',
        'TikTok Events API',
        'Pinterest Conversion API',
        'Cross-domain tracking',
        'Bi-weekly performance reports',
        'Priority support',
        'Slack channel access',
      ],
      popular: true,
    },
    {
      name: 'Scale',
      price: '$350',
      setupFee: '$1,000',
      description: 'Up to 5 domains, 1M pageviews/mo',
      bestFor: 'Enterprise, booking engines, marketplaces',
      features: [
        'Up to 5 domains',
        'Up to 1M pageviews/month',
        'Everything in Growth, plus:',
        'Dedicated server resources',
        'Custom event tracking',
        'Data enrichment pipelines',
        'Weekly performance calls',
        'Dedicated account manager',
        '24/7 emergency support',
      ],
    },
  ];

  const faqs: FAQ[] = [
    {
      q: 'How is this different from doing it myself?',
      a: 'Setting up server-side tracking requires cloud infrastructure expertise, ongoing maintenance, and monitoring. We handle all of this - you just see better data in your ad platforms. No technical knowledge required.',
    },
    {
      q: 'What if I don\'t have tracking set up yet?',
      a: 'Managed tracking covers the ongoing server-side hosting and maintenance. If you need a full tracking build from scratch (GTM setup, GA4 configuration, data layer, conversion tracking), that requires a one-time implementation package first. See our full pricing and setup packages at tagspecialist.ca/services for details.',
    },
    {
      q: 'Do I own the tracking infrastructure?',
      a: 'The infrastructure runs on our managed cloud environment. This keeps costs low and ensures reliability. If you prefer to own your infrastructure, check out our one-time setup packages starting at $12,000.',
    },
    {
      q: 'What platforms do you support?',
      a: 'Google Ads, Meta (Facebook/Instagram), TikTok, Pinterest, Snapchat, LinkedIn, and most major ad platforms. We also support GA4, Klaviyo, and other marketing tools.',
    },
    {
      q: 'How long does setup take?',
      a: 'Basic websites: 1-2 business days. eCommerce/booking sites: 3-5 business days. We handle everything - you just need to provide platform access.',
    },
    {
      q: 'What happens if tracking breaks?',
      a: 'We monitor your tracking 24/7 and catch issues before you do. Our 99.5% uptime SLA means your data keeps flowing. If something does break, we fix it at no extra cost.',
    },
    {
      q: 'Can I cancel anytime?',
      a: 'We require a 6-month minimum commitment (12 months for Scale tier). After that, you can cancel with 30 days notice. Annual plans receive waived setup fees.',
    },
    {
      q: 'What if I don\'t see improvements?',
      a: 'Our 30-day guarantee: if you don\'t see increased conversion data within 30 days, we\'ll work with you at no additional cost until you do.',
    },
  ];

  // ROI Calculator
  const missedConversions = Math.round(adSpend / 50 * 0.4); // Assuming $50 CPA, 40% missed
  const recoveredValue = missedConversions * 50;
  const cpaSavings = Math.round(adSpend * 0.15);
  const totalBenefit = recoveredValue + cpaSavings;
  const roi = Math.round(totalBenefit / 250);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-900 via-blue-900 to-navy-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-bold uppercase tracking-wider mb-6">
                Managed Server-Side Tracking
              </span>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white">
                Stop Losing <span className="text-blue-400">40-70%</span> of Your Conversion Data
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                You shouldn&apos;t have to manage cloud servers, monitor infrastructure health, or debug tracking pipelines. We own and maintain the entire server-side tracking stack — you focus on your business, we keep the data flowing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-audit"
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-500/25 text-lg inline-block"
                >
                  Get Started - From $150/mo
                </Link>
                <a
                  href="#calculator"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20 text-lg"
                >
                  Calculate Your ROI
                </a>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="text-3xl md:text-4xl font-black text-blue-400 mb-2">{stat.value}</div>
                <div className="text-sm text-blue-100 mb-1">{stat.label}</div>
                <div className="text-xs text-blue-300/60">{stat.source}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-navy-900 text-center mb-12">
              Your Ads Are Optimizing on <span className="text-orange-500">Incomplete Data</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: '🚫', title: 'Ad Blockers', desc: '30-40% of users block tracking pixels. Your conversions disappear.' },
                { icon: '🍎', title: 'iOS Privacy', desc: 'App Tracking Transparency decimated Meta tracking. CAPI fixes it.' },
                { icon: '🍪', title: 'Cookie Death', desc: 'Safari ITP, Chrome deprecation. First-party server-side survives.' },
                { icon: '📉', title: 'Wasted Spend', desc: 'Missing data = bad optimization = higher CPAs = lost revenue.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-navy-900 text-center mb-4">
              Server-Side Tracking: The Fix
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We move tracking from the browser to the server. Ad blockers can&apos;t block what they can&apos;t see.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: HiServer, title: 'Server Infrastructure', desc: 'Your own cloud container, managed by us. No technical skills needed.' },
                { icon: HiShieldCheck, title: 'Bypass Blockers', desc: 'Custom Loader technology captures 40% more data that blockers miss.' },
                { icon: HiChartBar, title: 'Better ROAS', desc: 'Complete data = smarter bidding = lower CPAs = more profit.' },
                { icon: HiLightningBolt, title: 'Faster Site', desc: 'Fewer client-side scripts = faster load times = better UX.' },
                { icon: HiClock, title: 'Set & Forget', desc: 'We monitor 24/7 and handle all updates. You just run your business.' },
                { icon: HiCurrencyDollar, title: 'Predictable Cost', desc: 'Flat monthly fee with clear limits. Scale as you grow.' },
              ].map((item, i) => (
                <div key={i} className="text-center p-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-navy-900 text-center mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Get up and running in as little as 1-3 days
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Book a Call',
                  desc: 'We review your current setup, identify gaps, and recommend the right plan for your needs.',
                  icon: '📞',
                },
                {
                  step: '2',
                  title: 'We Implement',
                  desc: 'Our team sets up your server-side tracking. You just provide platform access - we handle the rest.',
                  icon: '⚙️',
                },
                {
                  step: '3',
                  title: 'See More Conversions',
                  desc: 'Watch your reported conversions increase as we capture data that was previously lost.',
                  icon: '📈',
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 h-full">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300 text-2xl">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="calculator" className="py-20 bg-gradient-to-br from-navy-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-white">
              Calculate Your ROI
            </h2>
            <p className="text-xl text-blue-100 text-center mb-12">
              See how much revenue you&apos;re leaving on the table
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="mb-8">
                <label className="block text-blue-200 mb-3 font-semibold">
                  Your Monthly Ad Spend: <span className="text-white font-black">${adSpend.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="1000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-3 bg-blue-800 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-blue-300 mt-2">
                  <span>$1,000</span>
                  <span>$50,000</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-black text-orange-400 mb-2">~{missedConversions}</div>
                  <div className="text-sm text-blue-200">Conversions you&apos;re missing/month</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-black text-blue-400 mb-2">${cpaSavings.toLocaleString()}</div>
                  <div className="text-sm text-blue-200">Potential CPA savings (15%)</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-black text-blue-400 mb-2">{roi}x</div>
                  <div className="text-sm text-blue-200">Potential ROI on $250/mo</div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/book-audit"
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-500/25 text-lg inline-block"
                >
                  Get Your Custom Analysis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-navy-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Setup fees waived with annual commitment. 6-month minimum.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl shadow-lg border-2 ${
                  tier.popular ? 'border-blue-600 scale-105 relative z-10' : 'border-gray-200'
                } overflow-hidden`}
              >
                {tier.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{tier.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-black text-navy-900">{tier.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-6">
                    Setup: {tier.setupFee} <span className="text-blue-600 font-semibold">(free w/ annual)</span>
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <HiCheck className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book-audit"
                    className={`block w-full py-4 rounded-xl font-bold transition-all text-center ${
                      tier.popular
                        ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-500/25'
                        : 'bg-navy-900 text-white hover:bg-navy-800'
                    }`}
                  >
                    Get Started
                  </Link>
                  <p className="text-xs text-gray-500 text-center mt-4">Best for: {tier.bestFor}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 border border-blue-200 rounded-full">
              <HiShieldCheck className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-semibold">30-Day Performance Guarantee</span>
            </div>
            <p className="text-gray-500 text-sm">
              Need more? Overage: $50 per additional 500K pageviews. <br />
              <Link
                href="/book-audit"
                className="text-blue-600 font-semibold hover:underline"
              >
                Contact us for Enterprise pricing
              </Link> (6+ domains or 1M+ pageviews).
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-navy-900 text-center mb-4">
              What&apos;s Included
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Setup fee covers connecting your existing tracking to server-side. Don&apos;t have tracking yet? See our one-time setup packages.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Included in Setup */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <HiCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900">Included in Setup Fee</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  For businesses with existing web tracking that need server-side upgrade.
                </p>
                <ul className="space-y-3">
                  {[
                    'Server-side GTM container setup',
                    'Connect existing web tags to server',
                    'Google Ads Enhanced Conversions',
                    'Meta Conversion API connection',
                    'Custom domain configuration',
                    'Ad blocker bypass (Custom Loader)',
                    'Testing & QA validation',
                    'Handover documentation',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <HiCheck className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Timeline:</span> 1-3 business days
                  </p>
                </div>
              </div>

              {/* Need Full Build? */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <HiServer className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">Need a Full Build First?</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  If you&apos;re starting from scratch or need a complete tracking overhaul (GTM, GA4, data layer, conversion tracking), you&apos;ll need a one-time implementation package first. Then managed tracking keeps it running.
                </p>
                <ul className="space-y-3">
                  {[
                    'GTM container build + data layer',
                    'GA4 configuration + custom events',
                    'Full conversion tracking (all platforms)',
                    'eCommerce event tracking',
                    'Server-side GTM + CAPI setup',
                    'Cross-domain tracking',
                    'Testing & QA across all platforms',
                    'Documentation & handoff',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <HiCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-sm text-gray-600 mb-4">
                    Then add managed hosting from <span className="font-semibold text-blue-600">$150/month</span> to keep it running.
                  </p>
                  <Link
                    href="/services"
                    className="block w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all text-sm text-center shadow-lg hover:shadow-orange-500/25"
                  >
                    View Setup Packages & Pricing →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-navy-900 text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-navy-900 pr-8">{faq.q}</span>
                    {activeFaq === i ? (
                      <HiChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <HiChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {activeFaq === i && (
                    <div className="px-6 pb-6 text-gray-600">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">
            Ready to Recover Your Lost Conversions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join businesses capturing 40-70% more conversion data. Setup takes just 1-5 days.
          </p>
          <Link
            href="/book-audit"
            className="px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-500/25 text-lg inline-block"
          >
            Start Your Free Consultation
          </Link>
          <p className="mt-6 text-blue-300 text-sm">
            No commitment required. We&apos;ll analyze your current setup and show you exactly what you&apos;re missing.
          </p>
        </div>
      </section>
    </div>
  );
}
