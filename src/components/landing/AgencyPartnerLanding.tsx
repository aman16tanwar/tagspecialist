'use client';

import { motion } from 'framer-motion';
import {
  HiCheck,
  HiCurrencyDollar,
  HiUserGroup,
  HiSupport,
  HiTemplate,
  HiTrendingUp,
  HiShieldCheck,
} from 'react-icons/hi';
import { useModal } from '@/contexts/ModalContext';

interface PartnerTier {
  name: string;
  clients: string;
  discount: string;
  margin: string;
  features: string[];
}

export default function AgencyPartnerLanding() {
  const { openContactForm } = useModal();

  const partnerTiers: PartnerTier[] = [
    {
      name: 'Affiliate',
      clients: '1-4 clients',
      discount: '15% off',
      margin: 'Keep $15-45/client',
      features: [
        'Partner pricing on all tiers',
        'Co-branded reports',
        'Partner portal access',
        'Email support',
        'Monthly partner newsletter',
      ],
    },
    {
      name: 'Agency',
      clients: '5-19 clients',
      discount: '25% off',
      margin: 'Keep $25-75/client',
      features: [
        'Everything in Affiliate',
        'White-label dashboard option',
        'Priority implementation queue',
        'Dedicated Slack channel',
        'Quarterly strategy calls',
        'Case study collaboration',
      ],
    },
    {
      name: 'Enterprise',
      clients: '20+ clients',
      discount: '35% off',
      margin: 'Keep $35-105/client',
      features: [
        'Everything in Agency',
        'Fully white-labeled solution',
        'Custom pricing flexibility',
        'Dedicated partner manager',
        'Co-marketing opportunities',
        'Revenue share options',
        'API access for integrations',
      ],
    },
  ];

  const benefits = [
    {
      icon: HiCurrencyDollar,
      title: 'Recurring Revenue',
      desc: 'Earn $15-105 per client per month. Build predictable MRR without doing the technical work.',
    },
    {
      icon: HiTemplate,
      title: 'White-Label Ready',
      desc: 'Present as your own service. Your branding, your client relationship, our infrastructure.',
    },
    {
      icon: HiSupport,
      title: 'We Handle Support',
      desc: 'Technical issues? We fix them. You maintain the client relationship, we do the heavy lifting.',
    },
    {
      icon: HiTrendingUp,
      title: 'Upsell Opportunities',
      desc: 'Start with tracking, expand to full analytics. Average partner client value grows 3x in year one.',
    },
    {
      icon: HiUserGroup,
      title: 'No Hiring Needed',
      desc: 'Offer enterprise-grade tracking without hiring specialists. We are your tracking team.',
    },
    {
      icon: HiShieldCheck,
      title: 'Proven Results',
      desc: 'Back your pitch with real data: 40-90% more conversions tracked. Happy clients = retention.',
    },
  ];

  const calculateEarnings = (clients: number, avgTier: number) => {
    const margins = [30, 50, 75]; // Starter, Growth, Scale margins at 25% discount
    const monthly = clients * margins[avgTier];
    const annual = monthly * 12;
    return { monthly, annual };
  };

  const earnings = calculateEarnings(10, 1); // 10 clients, Growth tier avg

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
              <span className="inline-block px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-bold uppercase tracking-wider mb-6">
                Agency Partner Program
              </span>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white">
                Add <span className="text-green-400">$500-2,000/mo</span> to Your Agency Revenue
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Offer server-side tracking to your clients. We handle the tech, you keep the margin. White-label available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openContactForm({ service: 'Agency Partner Program', leadType: 'Partner' })}
                  className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-green-500/25 text-lg"
                >
                  Apply for Partnership
                </button>
                <a
                  href="#calculator"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20 text-lg"
                >
                  Calculate Your Earnings
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-navy-900 text-center mb-4">
              Why Agencies Partner With Us
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Your clients need better tracking. You don&apos;t need to hire to deliver it.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-navy-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section id="calculator" className="py-20 bg-gradient-to-br from-green-900 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-white">
              Partner Earnings Calculator
            </h2>
            <p className="text-xl text-green-100 text-center mb-12">
              See what you could earn as a Tag Specialist partner
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="text-center mb-8">
                <p className="text-green-200 mb-2">Example: 10 clients on Growth tier ($199/mo)</p>
                <p className="text-green-200 mb-4">Your cost: $149/mo per client (25% partner discount)</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-black text-green-400 mb-2">${earnings.monthly}</div>
                  <div className="text-sm text-green-200">Monthly Profit</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-black text-green-400 mb-2">${earnings.annual.toLocaleString()}</div>
                  <div className="text-sm text-green-200">Annual Profit</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center">
                  <div className="text-4xl font-black text-green-400 mb-2">0 hrs</div>
                  <div className="text-sm text-green-200">Technical Work</div>
                </div>
              </div>

              <div className="text-center text-green-200 text-sm mb-8">
                * Actual margins vary by tier and volume. Enterprise partners can negotiate custom rates.
              </div>

              <div className="text-center">
                <button
                  onClick={() => openContactForm({ service: 'Agency Partner - Custom Quote', leadType: 'Partner' })}
                  className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all shadow-lg text-lg"
                >
                  Get Your Custom Partner Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-navy-900 mb-4">
              Partner Tiers
            </h2>
            <p className="text-xl text-gray-600">
              Better discounts as you grow. No minimums to start.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partnerTiers.map((tier, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl shadow-lg border-2 ${
                  i === 1 ? 'border-green-600 scale-105 relative z-10' : 'border-gray-200'
                } overflow-hidden`}
              >
                {i === 1 && (
                  <div className="bg-green-600 text-white text-center py-2 text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{tier.clients}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-black text-green-600">{tier.discount}</span>
                    <span className="text-gray-500 ml-2">all tiers</span>
                  </div>
                  <p className="text-sm text-green-700 font-semibold mb-6 bg-green-50 px-3 py-2 rounded-lg">
                    {tier.margin}/mo
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <HiCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openContactForm({ service: `Agency Partner - ${tier.name}`, leadType: 'Partner' })}
                    className={`w-full py-4 rounded-xl font-bold transition-all ${
                      i === 1
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-navy-900 text-white hover:bg-navy-800'
                    }`}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-navy-900 text-center mb-12">
              How the Partnership Works
            </h2>

            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'You Sell',
                  desc: 'Present server-side tracking to your clients as part of your service offering. Use our sales materials or white-label as your own.',
                },
                {
                  step: '2',
                  title: 'We Implement',
                  desc: 'Send us the client details. We handle all technical setup within 1-5 business days. You stay informed via partner portal.',
                },
                {
                  step: '3',
                  title: 'You Bill, We Support',
                  desc: 'Bill your client at your markup. We handle all technical support and maintenance. You maintain the relationship.',
                },
                {
                  step: '4',
                  title: 'Grow Together',
                  desc: 'As you add clients, your discount increases. Hit 20 clients? Let\'s talk custom enterprise pricing.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
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
            Ready to Add Tracking to Your Services?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join agencies earning $500-2,000+/month in passive revenue. No technical expertise required.
          </p>
          <button
            onClick={() => openContactForm({ service: 'Agency Partner Program', leadType: 'Partner' })}
            className="px-10 py-5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all shadow-lg text-lg"
          >
            Apply for Partnership
          </button>
          <p className="mt-6 text-blue-300 text-sm">
            No commitment to apply. We&apos;ll schedule a call to discuss if it&apos;s a good fit.
          </p>
        </div>
      </section>
    </div>
  );
}
