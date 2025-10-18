import React, { useState } from 'react';
import { 
    HiCheckCircle, HiLightningBolt, HiChartBar, HiClock,
    HiCursorClick, HiArrowRight, HiSparkles, HiCloud
} from 'react-icons/hi';
import { FaRocket, FaChartLine, FaCrown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PricingSection = () => {
    const [hoveredPlan, setHoveredPlan] = useState(null);

    const pricingPlans = [
        {
            id: 'foundation',
            name: 'Foundation',
            tagline: 'Analytics & Tracking Setup',
            price: '$4,997',
            priceNote: 'One-time implementation',
            icon: HiLightningBolt,
            color: 'from-green-500 to-blue-500',
            features: [
                'GA4 + GTM complete setup',
                'Server-side tracking implementation',
                'Meta Conversions API setup',
                'Enhanced ecommerce tracking',
                'Cross-domain tracking',
                'Custom events & conversions',
                'Testing & QA process',
                '30-day support included'
            ],
            addOns: [
                'Monthly maintenance: $497/month',
                'Additional platforms: $1,997 each',
                'Priority support: $297/month'
            ],
            cta: 'Start Tracking Right',
            ctaLink: '/contact',
            popular: false,
            highlight: 'Most accurate tracking',
            outcome: 'Never miss a conversion again',
            isNew: false
        },
        {
            id: 'data-pipeline',
            name: 'Data Pipeline',
            tagline: 'Automated ETL & Reporting',
            price: '$7,997',
            priceNote: 'Setup + $997/month',
            icon: HiCloud,
            color: 'from-blue-500 to-cyan-500',
            features: [
                'Google Ads → BigQuery pipeline',
                'Meta Ads → BigQuery pipeline',
                'GA4 → BigQuery streaming',
                'Automated daily/hourly sync',
                'Data transformation & cleaning',
                'Custom Looker Studio dashboards',
                'Automated email reports',
                'API rate limit handling',
                'Error monitoring & alerts'
            ],
            addOns: [
                'Additional data sources: $1,997 each',
                'Custom transformations: $2,997',
                'Real-time streaming: $497/month'
            ],
            cta: 'Automate Your Data',
            popular: true,
            highlight: '70+ clients served',
            outcome: 'Save 20+ hours/week on reporting'
        },
        {
            id: 'performance',
            name: 'Performance Suite',
            tagline: 'Full Marketing Stack Integration',
            price: '$14,997',
            priceNote: 'Setup + $1,997/month',
            icon: FaChartLine,
            color: 'from-indigo-500 to-blue-600',
            features: [
                'All Data Pipeline features',
                'DV360 + SA360 integration',
                'Campaign Manager sync',
                'Shopify/eCommerce pipelines',
                'Cross-channel attribution',
                'Custom BigQuery ML models',
                'Automated bid optimization',
                'LTV & cohort analysis',
                'AI-powered anomaly detection',
                'Weekly strategy calls'
            ],
            addOns: [
                'Predictive modeling: $4,997',
                'Custom AI chatbot: $7,997',
                'White-label dashboards: $2,997'
            ],
            cta: 'Maximize Performance',
            popular: false,
            highlight: '451% average ROAS',
            outcome: 'Complete marketing intelligence'
        },
        {
            id: 'enterprise',
            name: 'Enterprise AI',
            tagline: 'Custom AI-Powered Solutions',
            price: 'From $24,997',
            priceNote: 'Custom implementation',
            icon: FaCrown,
            color: 'from-yellow-500 to-orange-500',
            features: [
                'Everything in Performance Suite',
                'LangChain AI chatbot for data',
                'Predictive revenue modeling',
                'Churn prediction & prevention',
                'Budget allocation optimization',
                'Custom workflow automation',
                'Airflow/Composer orchestration',
                'Dedicated GCP infrastructure',
                'SLA guarantees',
                'Weekly strategy sessions',
                '24/7 priority support'
            ],
            notIncluded: [],
            cta: 'Transform with AI',
            popular: false,
            highlight: 'For $3M+ ad spend',
            outcome: 'AI-driven competitive advantage'
        }
    ];

    return (
        <section id="pricing" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Investment That{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                            Pays for Itself
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Enterprise-grade solutions that delivered 451% ROAS for $3.5M+ in ad spend. Every package designed for immediate ROI.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={plan.id}
                            className={`group relative ${plan.id === 'automated' ? 'lg:col-span-1' : ''}`}
                            onMouseEnter={() => setHoveredPlan(plan.id)}
                            onMouseLeave={() => setHoveredPlan(null)}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className={`px-4 py-1 ${plan.isNew ? 'bg-gradient-to-r from-green-600 to-blue-600' : 'bg-gradient-to-r from-blue-600 to-purple-600'} text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-1`}>
                                        {plan.isNew && <HiSparkles className="w-4 h-4" />}
                                        {plan.isNew ? 'NEW' : 'MOST POPULAR'}
                                    </div>
                                </div>
                            )}

                            {/* Card */}
                            <div className={`relative h-full bg-gray-800 rounded-2xl overflow-hidden transition-all duration-300 ${
                                hoveredPlan === plan.id ? 'transform -translate-y-2 shadow-2xl' : 'shadow-xl'
                            } ${plan.popular ? 'border-2 border-blue-500/50' : 'border border-gray-700'}`}>
                                {/* Gradient Border Effect */}
                                {hoveredPlan === plan.id && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-50"></div>
                                )}

                                {/* Content */}
                                <div className="relative z-10 p-8 flex flex-col h-full">
                                    {/* Icon & Title */}
                                    <div className="mb-6">
                                        <div className={`w-12 h-12 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center mb-4`}>
                                            <plan.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                                        <p className="text-gray-400 text-sm">{plan.tagline}</p>
                                    </div>

                                    {/* Price */}
                                    <div className="text-center mb-8">
                                        <div className="text-4xl font-bold text-white mb-1">{plan.price}</div>
                                        <div className="text-gray-400 text-sm">{plan.priceNote}</div>
                                        {plan.highlight && (
                                            <div className={`mt-2 text-sm font-medium ${plan.isNew ? 'text-green-400' : 'text-yellow-400'}`}>{plan.highlight}</div>
                                        )}
                                    </div>

                                    {/* Features */}
                                    <div className="flex-grow">
                                        <h4 className="text-sm font-semibold text-gray-400 mb-4">WHAT'S INCLUDED</h4>
                                        <ul className="space-y-3 mb-6">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <HiCheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.id === 'automated' ? 'text-green-400' : plan.id === 'starter' ? 'text-blue-400' : plan.id === 'growth' ? 'text-indigo-400' : 'text-yellow-400'}`} />
                                                    <span className="text-gray-300 text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Add-ons for Automated Plan */}
                                        {plan.addOns && (
                                            <>
                                                <h4 className="text-sm font-semibold text-gray-400 mb-3">PREMIUM ADD-ONS</h4>
                                                <ul className="space-y-2 mb-6">
                                                    {plan.addOns.map((addon, idx) => (
                                                        <li key={idx} className="text-gray-400 text-sm pl-6">{addon}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}

                                        {/* Not Included */}
                                        {plan.notIncluded && plan.notIncluded.length > 0 && (
                                            <>
                                                <h4 className="text-sm font-semibold text-gray-600 mb-3">NOT INCLUDED</h4>
                                                <ul className="space-y-2 mb-6">
                                                    {plan.notIncluded.map((feature, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 opacity-50">
                                                            <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-600">×</span>
                                                            <span className="text-gray-500 text-sm line-through">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>

                                    {/* Outcome */}
                                    {plan.outcome && (
                                        <div className="mb-6 p-4 bg-gray-700/30 rounded-lg">
                                            <h4 className="text-sm font-semibold text-gray-400 mb-2">OUTCOME</h4>
                                            <p className="text-sm text-gray-300">{plan.outcome}</p>
                                        </div>
                                    )}

                                    {/* CTA */}
                                    {plan.ctaLink ? (
                                        <Link
                                            to={plan.ctaLink}
                                            className={`w-full py-4 px-6 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg text-center flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg`}
                                        >
                                            {plan.cta}
                                            <HiArrowRight className="w-5 h-5" />
                                        </Link>
                                    ) : (
                                        <a
                                            href="#contact"
                                            className={`w-full py-4 px-6 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg text-center flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg`}
                                        >
                                            {plan.cta}
                                            <HiArrowRight className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Wins Section */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-white text-center mb-4">Need Something Quick?</h3>
                    <p className="text-gray-400 text-center mb-12">Fast fixes for urgent problems</p>
                    
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                            <HiLightningBolt className="w-10 h-10 text-yellow-400 mb-4" />
                            <h4 className="text-lg font-bold text-white mb-2">Conversion Tracking Rescue</h4>
                            <p className="text-gray-400 text-sm mb-4">Emergency fix for broken tracking</p>
                            <div className="text-2xl font-bold text-white">$497</div>
                            <div className="text-sm text-gray-500">2-day turnaround</div>
                        </div>
                        
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                            <HiCursorClick className="w-10 h-10 text-blue-400 mb-4" />
                            <h4 className="text-lg font-bold text-white mb-2">iOS Tracking Fix</h4>
                            <p className="text-gray-400 text-sm mb-4">Recover your iOS conversions</p>
                            <div className="text-2xl font-bold text-white">$797</div>
                            <div className="text-sm text-gray-500">3-day implementation</div>
                        </div>
                        
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                            <HiChartBar className="w-10 h-10 text-green-400 mb-4" />
                            <h4 className="text-lg font-bold text-white mb-2">Data Health Check</h4>
                            <p className="text-gray-400 text-sm mb-4">Full audit + recommendations</p>
                            <div className="text-2xl font-bold text-white">$297</div>
                            <div className="text-sm text-gray-500">24-hour delivery</div>
                        </div>
                    </div>
                </div>

                {/* Retainer Plans */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-white text-center mb-4">Ongoing Support & Optimization</h3>
                    <p className="text-gray-400 text-center mb-12">Keep your data infrastructure running and improving</p>
                    
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-xl p-6">
                            <h4 className="text-xl font-bold text-white mb-2">Maintenance</h4>
                            <div className="text-3xl font-bold text-white mb-4">$1,000<span className="text-lg text-gray-400">/mo</span></div>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-center gap-2"><HiCheckCircle className="w-4 h-4 text-green-400" /> Monthly health checks</li>
                                <li className="flex items-center gap-2"><HiCheckCircle className="w-4 h-4 text-green-400" /> Basic troubleshooting</li>
                                <li className="flex items-center gap-2"><HiCheckCircle className="w-4 h-4 text-green-400" /> 8-hour response time</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-blue-800 to-indigo-700 border border-blue-600 rounded-xl p-6 relative">
                            <div className="absolute -top-3 right-4 bg-blue-500 text-white text-xs px-2 py-1 rounded">POPULAR</div>
                            <h4 className="text-xl font-bold text-white mb-2">Optimization</h4>
                            <div className="text-3xl font-bold text-white mb-4">$2,500<span className="text-lg text-gray-300">/mo</span></div>
                            <ul className="space-y-2 text-sm text-gray-200">
                                <li className="flex items-center gap-2"><HiCheckCircle className="w-4 h-4 text-green-400" /> Everything in Maintenance</li>
                                <li className="flex items-center gap-2"><HiCheckCircle className="w-4 h-4 text-green-400" /> Weekly performance reports</li>
                                <li className="flex items-center gap-2"><HiCheckCircle className="w-4 h-4 text-green-400" /> Pipeline optimization</li>
                                <li className="flex items-center gap-2"><HiCheckCircle className="w-4 h-4 text-green-400" /> New integrations (2/mo)</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-800 to-orange-700 border border-yellow-600 rounded-xl p-6">
                            <h4 className="text-xl font-bold text-white mb-2">Partnership</h4>
                            <div className="text-3xl font-bold text-white mb-4">$5,000<span className="text-lg text-gray-300">/mo</span></div>
                            <ul className="space-y-2 text-sm text-gray-200">
                                <li className="flex items-center gap-2"><HiCheckCircle className="w-4 h-4 text-green-400" /> Everything in Optimization</li>
                                <li className="flex items-center gap-2"><HiCheckCircle className="w-4 h-4 text-green-400" /> Dedicated analyst</li>
                                <li className="flex items-center gap-2"><HiCheckCircle className="w-4 h-4 text-green-400" /> Custom AI insights</li>
                                <li className="flex items-center gap-2"><HiCheckCircle className="w-4 h-4 text-green-400" /> Strategic planning</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Not sure which package fits? Let's talk.
                    </h3>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Every business is unique. I'll help you find the right solution for your data needs and budget.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105"
                    >
                        <HiClock className="w-5 h-5" />
                        Book a Free Consultation
                        <HiArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;