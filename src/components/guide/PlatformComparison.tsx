'use client';

import { useState } from 'react';
import { HiCheck, HiChevronDown } from 'react-icons/hi';

const platforms = [
  {
    id: 'sgtm',
    name: 'Google sGTM',
    icon: '📊',
    bestFor: 'Google ecosystem users',
    pricing: 'Free (hosting costs apply)',
    keyFeatures: ['Native GA4 & Google Ads integration', 'Custom domain routing'],
    moreCount: 3,
    details: {
      bestForDetails: 'Ideal for businesses already heavily invested in Google Analytics, Google Ads, and the broader Google Marketing Platform.',
      pricingDetails: 'The sGTM container itself is free, but you\'ll pay for cloud hosting (GCP typically $50-200/month depending on traffic).',
      bestFitScenario: 'E-commerce brands using GA4 and Google Ads who want full control over their data pipeline without vendor lock-in.',
      allFeatures: ['Native GA4 & Google Ads integration', 'Custom domain routing', 'Built-in event transformations', 'Preview mode for testing', 'Community templates'],
      pros: ['No licensing cost', 'Deep Google integration', 'Large community support'],
      cons: ['Requires technical expertise', 'Self-managed infrastructure', 'Limited native support for non-Google vendors'],
    },
  },
  {
    id: 'segment',
    name: 'Segment',
    icon: '🔗',
    bestFor: 'Multi-platform enterprises',
    pricing: 'From $120/month',
    keyFeatures: ['CDP with 400+ integrations', 'Unified customer profiles'],
    moreCount: 3,
    details: {
      bestForDetails: 'Enterprises requiring a centralized Customer Data Platform with extensive third-party integrations beyond just analytics.',
      pricingDetails: 'Team plan starts at $120/month. Business plan is custom pricing based on tracked users and events volume.',
      bestFitScenario: 'SaaS and enterprise companies with complex multi-platform stacks that need unified customer data across all tools.',
      allFeatures: ['CDP with 400+ integrations', 'Unified customer profiles', 'Identity resolution', 'Real-time event streaming', 'Data governance tools'],
      pros: ['Extensive integrations', 'Customer data unification', 'Strong documentation'],
      cons: ['Expensive at scale', 'Not purely server-side focused', 'Complexity for simple setups'],
    },
  },
  {
    id: 'stape',
    name: 'Stape.io',
    icon: '⚡',
    bestFor: 'Quick deployment teams',
    pricing: 'From $20/month',
    keyFeatures: ['Managed GTM server hosting', 'One-click deployment'],
    moreCount: 3,
    details: {
      bestForDetails: 'Teams wanting managed server-side GTM without the overhead of managing their own cloud infrastructure.',
      pricingDetails: 'Starts at $20/month for basic plan. Pro plan at $50/month includes custom domain, multiple containers.',
      bestFitScenario: 'Small to mid-size businesses that want server-side benefits without hiring DevOps or managing GCP.',
      allFeatures: ['Managed GTM server hosting', 'One-click deployment', 'Custom domain included', 'Automatic scaling', 'Built-in monitoring'],
      pros: ['Easiest setup', 'Affordable', 'No DevOps needed'],
      cons: ['Less customizable', 'Vendor dependency', 'Limited to GTM ecosystem'],
    },
  },
  {
    id: 'tealium',
    name: 'Tealium',
    icon: '🏢',
    bestFor: 'Enterprise compliance',
    pricing: 'Custom enterprise',
    keyFeatures: ['Enterprise-grade compliance', 'Advanced consent orchestration'],
    moreCount: 3,
    details: {
      bestForDetails: 'Large enterprises with strict compliance requirements (healthcare, finance) needing enterprise-grade tag management.',
      pricingDetails: 'Custom enterprise pricing, typically $50,000+ annually. Includes dedicated support and SLAs.',
      bestFitScenario: 'Healthcare, financial services, and regulated industries requiring enterprise SLAs, SOC 2, and HIPAA compliance.',
      allFeatures: ['Enterprise-grade compliance', 'Advanced consent orchestration', 'Real-time data enrichment', 'Machine learning audiences', 'Dedicated support'],
      pros: ['Enterprise SLAs', 'Advanced compliance', 'Dedicated support'],
      cons: ['High cost', 'Complex implementation', 'Long sales cycle'],
    },
  },
];

export default function PlatformComparison() {
  const [expandedPlatform, setExpandedPlatform] = useState<string | null>(null);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-8">
      {/* Table Header */}
      <div className="grid grid-cols-[1fr_1fr_1fr_1.5fr_auto] bg-[#eff6ff] text-gray-800">
        <div className="px-4 py-3 font-semibold text-sm flex items-center gap-1">Platform <HiChevronDown className="w-4 h-4" /></div>
        <div className="px-4 py-3 font-semibold text-sm flex items-center gap-1">Best For <HiChevronDown className="w-4 h-4" /></div>
        <div className="px-4 py-3 font-semibold text-sm flex items-center gap-1">Pricing <HiChevronDown className="w-4 h-4" /></div>
        <div className="px-4 py-3 font-semibold text-sm">Key Features</div>
        <div className="px-4 py-3 w-12"></div>
      </div>

      {platforms.map((platform) => (
        <div key={platform.id} className="border-t border-gray-100">
          <div
            onClick={() => setExpandedPlatform(expandedPlatform === platform.id ? null : platform.id)}
            className="grid grid-cols-[1fr_1fr_1fr_1.5fr_auto] cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="px-4 py-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-[#dbeafe] rounded flex items-center justify-center text-[#1d4ed8] text-sm">{platform.icon}</div>
              <span className="font-medium text-gray-900">{platform.name}</span>
            </div>
            <div className="px-4 py-4 text-gray-600 underline decoration-dotted">{platform.bestFor}</div>
            <div className="px-4 py-4 text-gray-600 underline decoration-dotted">{platform.pricing}</div>
            <div className="px-4 py-4 flex flex-wrap gap-2">
              {platform.keyFeatures.map((feature, idx) => (
                <span key={idx} className="px-2 py-1 bg-[#eff6ff] border border-[#bfdbfe] rounded text-xs text-[#1e40af]">{feature}</span>
              ))}
              <span className="px-2 py-1 bg-gray-100 border border-gray-200 rounded text-xs text-gray-600">+{platform.moreCount} more</span>
            </div>
            <div className="px-4 py-4 flex items-center">
              <HiChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedPlatform === platform.id ? 'rotate-180' : ''}`} />
            </div>
          </div>

          {expandedPlatform === platform.id && (
            <div className="border-t border-gray-100 bg-gray-50 p-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">BEST FOR (DETAILS)</h4>
                    <p className="text-sm text-gray-600">{platform.details.bestForDetails}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">PRICING DETAILS</h4>
                    <p className="text-sm text-gray-600">{platform.details.pricingDetails}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">BEST FIT SCENARIO</h4>
                    <div className="bg-[#eff6ff] text-gray-800 p-4 rounded-lg text-sm">
                      {platform.details.bestFitScenario}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">ALL FEATURES</h4>
                    <div className="space-y-2">
                      {platform.details.allFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-4 h-4 bg-[#eff6ff] rounded flex items-center justify-center">
                            <HiCheck className="w-3 h-3 text-white" />
                          </div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs font-bold text-[#1d4ed8] uppercase tracking-wider mb-2">PROS</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {platform.details.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start gap-1"><span className="text-[#2563eb]">+</span> {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">CONS</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {platform.details.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start gap-1"><span className="text-gray-400">-</span> {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
