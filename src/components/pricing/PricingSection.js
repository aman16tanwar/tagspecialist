import React, { useState } from 'react';
import { 
    HiCheckCircle, HiLightningBolt, HiChartBar, HiClock,
    HiSupport, HiCursorClick, HiArrowRight, HiSparkles
} from 'react-icons/hi';
import { FaRocket, FaChartLine, FaCrown } from 'react-icons/fa';

const PricingSection = () => {
    const [hoveredPlan, setHoveredPlan] = useState(null);

    const pricingPlans = [
        {
            id: 'starter',
            name: 'Fix Your Tracking',
            tagline: 'Recover lost conversions and trust your data again',
            price: 'From $750',
            priceNote: 'One-time implementation',
            icon: FaRocket,
            color: 'from-blue-500 to-cyan-500',
            features: [
                'GA4 + GTM audit & fixes',
                'iOS tracking recovery',
                'Conversion tracking setup',
                'Server-side tracking basics',
                'Enhanced ecommerce tracking',
                'Cross-domain tracking',
                '30-day support included',
                'Implementation documentation'
            ],
            notIncluded: [
                'Data warehouse setup',
                'Custom dashboards',
                'AI analytics'
            ],
            cta: 'Fix My Tracking',
            popular: false,
            highlight: 'Most choose $1,500 package'
        },
        {
            id: 'growth',
            name: 'Scale Your Data',
            tagline: 'Transform raw data into competitive advantage',
            price: 'From $2,500',
            priceNote: 'Complete data pipeline',
            icon: FaChartLine,
            color: 'from-indigo-500 to-blue-600',
            features: [
                'Everything in Starter',
                'Shopify → BigQuery pipeline',
                'Meta & Google Ads integration',
                'Custom Looker Studio dashboards',
                'Automated reporting',
                'Cost & profit analysis',
                'Real-time data sync',
                '90-day optimization support',
                'Monthly performance reviews'
            ],
            notIncluded: [
                'AI-powered insights',
                'Predictive analytics'
            ],
            cta: 'Build My Pipeline',
            popular: true,
            highlight: 'ROI in 30 days guaranteed'
        },
        {
            id: 'enterprise',
            name: 'AI-Powered Intelligence',
            tagline: 'Ask questions, get answers, predict the future',
            price: 'From $5,000',
            priceNote: 'Full AI implementation',
            icon: FaCrown,
            color: 'from-yellow-500 to-orange-500',
            features: [
                'Everything in Growth',
                'Custom AI analytics assistant',
                'Natural language queries',
                'Predictive revenue models',
                'Automated insights in Slack',
                'Anomaly detection alerts',
                'Custom ML models',
                'Weekly strategy calls',
                'White-glove support',
                'Quarterly business reviews'
            ],
            notIncluded: [],
            cta: 'Get AI Superpowers',
            popular: false,
            highlight: 'Save 10+ hours/week'
        }
    ];

    return (
        <section id="pricing" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
                        <HiSparkles className="w-5 h-5 text-green-400" />
                        <span className="text-sm text-green-300 font-medium">Transparent Pricing</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Investment Options for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                            Serious Businesses
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Choose the solution that matches your growth stage and ambitions
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}
                            onMouseEnter={() => setHoveredPlan(plan.id)}
                            onMouseLeave={() => setHoveredPlan(null)}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Card */}
                            <div className={`relative h-full ${plan.popular ? 'shadow-2xl' : 'shadow-xl'}`}>
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${plan.color} rounded-2xl blur opacity-30 ${hoveredPlan === plan.id ? 'opacity-60' : ''} transition duration-300`} />
                                
                                <div className="relative h-full bg-gray-800 border border-gray-700 rounded-2xl p-8 flex flex-col">
                                    {/* Header */}
                                    <div className="text-center mb-8">
                                        <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center`}>
                                            <plan.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                        <p className="text-gray-400 text-sm">{plan.tagline}</p>
                                    </div>

                                    {/* Price */}
                                    <div className="text-center mb-8">
                                        <div className="text-4xl font-bold text-white mb-1">{plan.price}</div>
                                        <div className="text-gray-400 text-sm">{plan.priceNote}</div>
                                        {plan.highlight && (
                                            <div className="mt-2 text-sm font-medium text-yellow-400">{plan.highlight}</div>
                                        )}
                                    </div>

                                    {/* Features */}
                                    <div className="flex-grow">
                                        <h4 className="text-sm font-semibold text-gray-400 mb-4">WHAT'S INCLUDED</h4>
                                        <ul className="space-y-3 mb-6">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <HiCheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.id === 'starter' ? 'text-blue-400' : plan.id === 'growth' ? 'text-indigo-400' : 'text-yellow-400'}`} />
                                                    <span className="text-gray-300 text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Not Included */}
                                        {plan.notIncluded.length > 0 && (
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

                                    {/* CTA */}
                                    <a
                                        href="#contact"
                                        className={`w-full py-4 px-6 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg text-center flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg`}
                                    >
                                        {plan.cta}
                                        <HiArrowRight className="w-5 h-5" />
                                    </a>
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
                    <h3 className="text-3xl font-bold text-white text-center mb-4">Ongoing Support Plans</h3>
                    <p className="text-gray-400 text-center mb-12">Keep your data infrastructure running smoothly</p>
                    
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-xl p-6">
                            <h4 className="text-xl font-bold text-white mb-2">Essential</h4>
                            <div className="text-3xl font-bold text-white mb-4">$500<span className="text-lg text-gray-400">/mo</span></div>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <HiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                    Monthly tracking QA
                                </li>
                                <li className="flex items-start gap-2">
                                    <HiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                    Bug fixes & updates
                                </li>
                                <li className="flex items-start gap-2">
                                    <HiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                    2 hours support
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-indigo-800/20 to-indigo-700/20 border border-indigo-600 rounded-xl p-6">
                            <h4 className="text-xl font-bold text-white mb-2">Growth</h4>
                            <div className="text-3xl font-bold text-white mb-4">$1,500<span className="text-lg text-gray-400">/mo</span></div>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <HiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                    Pipeline monitoring
                                </li>
                                <li className="flex items-start gap-2">
                                    <HiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                    Dashboard updates
                                </li>
                                <li className="flex items-start gap-2">
                                    <HiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                    5 hours support
                                </li>
                                <li className="flex items-start gap-2">
                                    <HiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                    Weekly check-ins
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-yellow-800/20 to-orange-700/20 border border-yellow-600 rounded-xl p-6">
                            <h4 className="text-xl font-bold text-white mb-2">Enterprise</h4>
                            <div className="text-3xl font-bold text-white mb-4">$3,000<span className="text-lg text-gray-400">/mo</span></div>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <HiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                    Full data ops management
                                </li>
                                <li className="flex items-start gap-2">
                                    <HiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                    AI insights & alerts
                                </li>
                                <li className="flex items-start gap-2">
                                    <HiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                    10 hours support
                                </li>
                                <li className="flex items-start gap-2">
                                    <HiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                                    Priority response
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-16">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-white text-center mb-8">All Plans Include</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <HiLightningBolt className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                                <h4 className="font-semibold text-white mb-2">Fast Implementation</h4>
                                <p className="text-sm text-gray-400">Most projects completed in 1-4 weeks</p>
                            </div>
                            <div className="text-center">
                                <HiSupport className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                                <h4 className="font-semibold text-white mb-2">Dedicated Support</h4>
                                <p className="text-sm text-gray-400">Direct access via Slack or email</p>
                            </div>
                            <div className="text-center">
                                <HiChartBar className="w-8 h-8 text-green-400 mx-auto mb-3" />
                                <h4 className="font-semibold text-white mb-2">ROI Guarantee</h4>
                                <p className="text-sm text-gray-400">See measurable results or money back</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Custom Solutions */}
                <div className="mt-12 text-center">
                    <p className="text-gray-400 mb-4">
                        Need something custom? Have a unique challenge?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                    >
                        Let's create a custom solution
                        <HiArrowRight className="w-5 h-5" />
                    </a>
                </div>

                {/* Availability Notice */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
                        <HiClock className="w-5 h-5 text-yellow-400" />
                        <span className="text-sm text-yellow-300">
                            I take on 2-3 new implementations per month. Current availability: January 2025
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;