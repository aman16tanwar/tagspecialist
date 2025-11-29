import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    HiCheckCircle, HiXCircle, HiArrowRight, HiExclamation,
    HiSparkles
} from 'react-icons/hi';
import ContactForm from '../ContactForm/ContactForm';

const ShopifyPipelineComparison = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const [selectedTool, setSelectedTool] = useState('fivetran');
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tools = {
        fivetran: {
            name: 'Fivetran',
            logo: '🔥',
            color: 'orange',
            tagline: 'The "premium" trap',
            verdict: 'Good if you love paying $500+/month for basic data'
        },
        stitch: {
            name: 'Stitch Data',
            logo: '🧵',
            color: 'purple',
            tagline: 'The "budget" trap',
            verdict: 'Slightly cheaper, same limitations'
        },
        airbyte: {
            name: 'Airbyte',
            logo: '🌊',
            color: 'blue',
            tagline: 'The "open source" trap',
            verdict: 'Free to start, expensive to scale'
        }
    };

    const detailedComparison = {
        fivetran: {
            pricing: {
                free: '500K rows/month',
                reality: '~1 week of Shopify data',
                paid: '$120-500/month after free tier',
                hidden: 'Per-connector pricing adds up fast'
            },
            pros: [
                'Well-established platform',
                'Many connectors available',
                'Decent documentation',
                'Automated schema changes'
            ],
            cons: [
                'Extremely limited free tier',
                'Expensive for Shopify volumes',
                'No control over infrastructure',
                'Vendor lock-in is real',
                'Can\'t customize transformations'
            ]
        },
        stitch: {
            pricing: {
                free: '5M rows/month',
                reality: '~1 month for small stores',
                paid: '$100-300/month after free tier',
                hidden: 'Row counting is aggressive'
            },
            pros: [
                'Slightly better free tier',
                'Simpler pricing model',
                'Easy to set up',
                'Acquired by Talend (stability)'
            ],
            cons: [
                'Still hits limits quickly',
                'Less features than Fivetran',
                'Limited customization',
                'Support is slow',
                'No infrastructure control'
            ]
        },
        airbyte: {
            pricing: {
                free: '1M rows/month (cloud)',
                reality: '~2 weeks of data',
                paid: '$100+/month or self-host',
                hidden: 'Self-hosting is complex'
            },
            pros: [
                'Open source option',
                'Can self-host',
                'Active community',
                'More transparent'
            ],
            cons: [
                'Cloud version has limits',
                'Self-hosting is technical',
                'Less mature platform',
                'Connectors can be buggy',
                'Still expensive at scale'
            ]
        }
    };

    const comparisonMatrix = [
        {
            feature: 'Row Limits',
            fivetran: '500K/month',
            stitch: '5M/month',
            airbyte: '1M/month',
            ours: 'UNLIMITED',
            winner: 'ours'
        },
        {
            feature: 'Real Cost (10 stores)',
            fivetran: '$300-1000/mo',
            stitch: '$200-500/mo',
            airbyte: '$150-400/mo',
            ours: '$50/mo hosting',
            winner: 'ours'
        },
        {
            feature: 'Setup Time',
            fivetran: '30 minutes',
            stitch: '45 minutes',
            airbyte: '1-2 hours',
            ours: '5 minutes',
            winner: 'ours'
        },
        {
            feature: 'Infrastructure',
            fivetran: 'Their cloud',
            stitch: 'Their cloud',
            airbyte: 'Their cloud/yours',
            ours: 'YOUR cloud',
            winner: 'ours'
        },
        {
            feature: 'Vendor Lock-in',
            fivetran: 'Very High',
            stitch: 'High',
            airbyte: 'Medium',
            ours: 'None',
            winner: 'ours'
        },
        {
            feature: 'Customization',
            fivetran: 'Limited',
            stitch: 'Very Limited',
            airbyte: 'Moderate',
            ours: 'Full Control',
            winner: 'ours'
        },
        {
            feature: 'Support',
            fivetran: 'Email/Chat',
            stitch: 'Email only',
            airbyte: 'Community',
            ours: 'Community + Paid',
            winner: 'tie'
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-900">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Shopify → BigQuery:
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mt-2">
                                The Truth About "Free" Tiers
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Fivetran, Stitch, and Airbyte want you to think their free tiers are generous. 
                            Let's look at the math they hope you won't do.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Reality Check */}
            <section className="py-8 bg-red-50 border-y border-red-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-start gap-4">
                        <HiExclamation className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-lg font-semibold text-red-700 mb-2">
                                Reality Check: Your Shopify Store Has Millions of Rows
                            </h3>
                            <p className="text-gray-700">
                                Average Shopify store: 100 orders/day × 4 rows/order × 365 days = 
                                <span className="text-navy-900 font-semibold"> 146,000 rows/year just for orders</span>. 
                                Add customers, products, and variants? You'll hit Fivetran's "free" limit in a week.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Tool Selector */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-navy-900 text-center mb-8">
                        Choose Your Disappointment
                    </h2>
                    
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {Object.entries(tools).map(([key, tool]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedTool(key)}
                                className={`px-6 py-3 rounded-lg font-medium transition-all ${selectedTool === key 
                                        ? 'bg-blue-600 text-white shadow-lg scale-105' 
                                        : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                            >
                                <span className="mr-2">{tool.logo}</span>
                                {tool.name}
                            </button>
                        ))}
                    </div>

                    {/* Detailed Comparison for Selected Tool */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                            <h3 className="text-2xl font-bold text-navy-900 mb-2">
                                {tools[selectedTool].logo} {tools[selectedTool].name}
                            </h3>
                            <p className="text-gray-500 mb-6">{tools[selectedTool].tagline}</p>
                            
                            <div className="space-y-4 mb-6">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 mb-2">PRICING REALITY</h4>
                                    <div className="bg-gray-50 rounded-lg p-4 space-y-2 border border-gray-100">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Free tier:</span>
                                            <span className="text-orange-600">{detailedComparison[selectedTool].pricing.free}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Reality:</span>
                                            <span className="text-red-600">{detailedComparison[selectedTool].pricing.reality}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Then you pay:</span>
                                            <span className="text-red-600 font-semibold">{detailedComparison[selectedTool].pricing.paid}</span>
                                        </div>
                                        <div className="text-sm text-yellow-600 mt-2">
                                            ⚠️ {detailedComparison[selectedTool].pricing.hidden}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 mb-2">PROS</h4>
                                    <ul className="space-y-2">
                                        {detailedComparison[selectedTool].pros.map((pro, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <HiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-600 text-sm">{pro}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 mb-2">CONS</h4>
                                    <ul className="space-y-2">
                                        {detailedComparison[selectedTool].cons.map((con, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <HiXCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-600 text-sm">{con}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                                <p className="text-red-700 text-sm font-medium">
                                    Verdict: {tools[selectedTool].verdict}
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-8 border-2 border-green-500 shadow-lg">
                            <h3 className="text-2xl font-bold text-navy-900 mb-2">
                                ✨ Our Solution
                            </h3>
                            <p className="text-gray-500 mb-6">The honest alternative</p>
                            
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 mb-2">PRICING TRUTH</h4>
                                    <div className="bg-green-50 rounded-lg p-4 space-y-2 border border-green-100">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Free tier:</span>
                                            <span className="text-green-700 font-semibold">3 stores, UNLIMITED rows</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Infrastructure:</span>
                                            <span className="text-green-700">YOUR Google Cloud</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Total cost:</span>
                                            <span className="text-green-700 font-semibold">~$50/mo hosting</span>
                                        </div>
                                        <div className="text-sm text-green-600 mt-2">
                                            ✅ No hidden fees, no row counting, no surprises
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 mb-2">WHY IT'S BETTER</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start gap-2">
                                            <HiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-600 text-sm">No row limits from day one</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <HiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-600 text-sm">You own the infrastructure</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <HiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-600 text-sm">5-minute web UI setup</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <HiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-600 text-sm">No vendor lock-in</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <HiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-600 text-sm">Full customization possible</span>
                                        </li>
                                    </ul>
                                </div>

                                <Link
                                    to="/shopify-bigquery"
                                    className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-sm hover:bg-blue-700 transition-all uppercase text-sm tracking-wide"
                                >
                                    See Full Details
                                    <HiArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Comparison Matrix */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
                        The Complete Comparison
                    </h2>
                    
                    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                        <table className="w-full bg-white">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="text-left py-4 px-6 text-navy-900 font-semibold">Feature</th>
                                    <th className="text-center py-4 px-6 text-orange-600 font-semibold">Fivetran</th>
                                    <th className="text-center py-4 px-6 text-purple-600 font-semibold">Stitch</th>
                                    <th className="text-center py-4 px-6 text-blue-600 font-semibold">Airbyte</th>
                                    <th className="text-center py-4 px-6 text-green-600 font-semibold">Our Solution</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonMatrix.map((row, idx) => (
                                    <tr key={idx} className={`border-t border-gray-200 ${idx % 2 === 0 ? 'bg-gray-50' : ''}`}>
                                        <td className="py-4 px-6 text-gray-700 font-medium">{row.feature}</td>
                                        <td className={`py-4 px-6 text-center ${row.winner === 'fivetran' ? 'text-green-600 font-semibold' : 'text-gray-600'}`}>
                                            {row.fivetran}
                                        </td>
                                        <td className={`py-4 px-6 text-center ${row.winner === 'stitch' ? 'text-green-600 font-semibold' : 'text-gray-600'}`}>
                                            {row.stitch}
                                        </td>
                                        <td className={`py-4 px-6 text-center ${row.winner === 'airbyte' ? 'text-green-600 font-semibold' : 'text-gray-600'}`}>
                                            {row.airbyte}
                                        </td>
                                        <td className={`py-4 px-6 text-center ${row.winner === 'ours' ? 'text-green-600 font-semibold' : row.winner === 'tie' ? 'text-yellow-600' : 'text-gray-600'}`}>
                                            {row.ours}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Cost Calculator */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-navy-900 text-center mb-8">
                        Calculate Your Real Costs
                    </h2>
                    
                    <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-navy-900 mb-4">Typical Shopify Store (1 year)</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Orders (100/day):</span>
                                        <span className="text-navy-900 font-medium">36,500 rows</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Order Items (4/order):</span>
                                        <span className="text-navy-900 font-medium">146,000 rows</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Customers:</span>
                                        <span className="text-navy-900 font-medium">10,000 rows</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Products & Variants:</span>
                                        <span className="text-navy-900 font-medium">5,000 rows</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-3 mt-3">
                                        <div className="flex justify-between font-semibold">
                                            <span className="text-gray-700">Total per year:</span>
                                            <span className="text-blue-600">197,500 rows</span>
                                        </div>
                                        <div className="flex justify-between text-sm mt-1">
                                            <span className="text-gray-500">Per month:</span>
                                            <span className="text-orange-600">~16,500 rows</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-navy-900 mb-4">Your Annual Costs</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-orange-600">Fivetran:</span>
                                        <span className="text-2xl font-bold text-red-600">$1,440+</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-purple-600">Stitch:</span>
                                        <span className="text-2xl font-bold text-orange-600">$1,200+</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-blue-600">Airbyte:</span>
                                        <span className="text-2xl font-bold text-yellow-600">$1,200+</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-3 mt-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-green-600 font-semibold">Our Solution:</span>
                                            <span className="text-2xl font-bold text-green-600">$600</span>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-2">
                                            Infrastructure only, no per-row charges
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                            <p className="text-green-800 text-lg">
                                💰 <strong>You save $600-840 per year</strong> on a single store
                            </p>
                            <p className="text-gray-600 text-sm mt-1">
                                Have 10 stores? Save $6,000-8,400 annually
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Line Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        The Bottom Line
                    </h2>
                    
                    <div className="space-y-6 text-lg text-gray-300 mb-12">
                        <p>
                            <span className="text-orange-400 font-semibold">Fivetran</span>, 
                            <span className="text-purple-400 font-semibold"> Stitch</span>, and 
                            <span className="text-blue-400 font-semibold"> Airbyte</span> built their businesses on the fact that 
                            most people don't do the math until it's too late.
                        </p>
                        
                        <p className="text-xl">
                            Their "free" tiers are designed to hook you, then charge you 
                            <span className="text-red-400 font-semibold"> $100-500/month</span> once you're locked in.
                        </p>
                        
                        <p className="text-2xl font-semibold text-white">
                            We built a better way.
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => setIsContactFormOpen(true)}
                            className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-sm shadow-lg hover:bg-blue-700 transition-all uppercase text-sm tracking-wide flex items-center gap-2"
                        >
                            <HiSparkles className="w-5 h-5" />
                            Start Free (No Row Limits)
                            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <Link
                            to="/shopify-bigquery"
                            className="px-8 py-4 bg-white/10 text-white font-semibold rounded-sm border border-white/20 hover:bg-white/20 shadow-lg transition-all uppercase text-sm tracking-wide"
                        >
                            Learn More →
                        </Link>
                    </div>
                    
                    <p className="text-sm text-gray-400 mt-6">
                        No credit card • No row limits • Own your infrastructure
                    </p>
                </div>
            </section>

            {/* Contact Form Modal */}
            <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
        </div>
    );
};

export default ShopifyPipelineComparison;
