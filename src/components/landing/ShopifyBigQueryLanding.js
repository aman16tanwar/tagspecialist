import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    HiLightningBolt, HiArrowRight,
    HiCloud, HiChartBar, HiDatabase,
    HiExclamation, HiSparkles, HiClock
} from 'react-icons/hi';
import { FaShopify } from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';
import ContactForm from '../ContactForm/ContactForm';

const ShopifyBigQueryLanding = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const features = [
        {
            icon: HiDatabase,
            title: 'No Row Limits Ever',
            description: 'While others restrict you to 500K rows, we give you unlimited data from day one.'
        },
        {
            icon: HiCloud,
            title: 'Own Your Infrastructure',
            description: 'Deploy to YOUR Google Cloud. No vendor lock-in. Total control for $50/month.'
        },
        {
            icon: HiLightningBolt,
            title: '5-Minute Setup',
            description: 'Web UI onboarding. No Docker, no CLI, no technical skills required.'
        },
        {
            icon: HiChartBar,
            title: '4 Core Tables',
            description: 'Customers, Orders, Products, Order Items. Everything you need for analytics.'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 pt-20">
            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        {/* Logos */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <FaShopify className="w-12 h-12 text-green-500" />
                            <HiArrowRight className="w-8 h-8 text-gray-400" />
                            <SiGooglecloud className="w-12 h-12 text-blue-500" />
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Shopify to BigQuery Pipeline
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mt-2">
                                No Row Limits. $50/Month Total.
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Break free from "free tier" traps. Own your data pipeline with unlimited rows, 
                            5-minute setup, and zero vendor lock-in. Save $1,200+/year vs Fivetran.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            <button
                                onClick={() => setIsContactFormOpen(true)}
                                className="group px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 flex items-center gap-2"
                            >
                                <HiSparkles className="w-5 h-5" />
                                Start Free (3 Stores)
                                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            
                            <Link
                                to="/blog/shopify-bigquery-pipeline-tutorial"
                                className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg border border-gray-700 hover:border-gray-600 shadow-lg transform transition-all duration-200 hover:scale-105"
                            >
                                DIY Tutorial →
                            </Link>
                        </div>

                        <p className="text-sm text-gray-500">
                            No credit card required • Setup in 5 minutes • Cancel anytime
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Warning Section */}
            <section className="py-8 bg-orange-900/20 border-y border-orange-800/50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-start gap-4">
                        <HiExclamation className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-lg font-semibold text-orange-400 mb-2">
                                The "Free Tier" Truth Nobody Talks About
                            </h3>
                            <p className="text-gray-300">
                                Fivetran's 500K row limit? That's about 1 week of Shopify data for most stores. 
                                Then you're paying $120+/month. Stitch's 5M rows? Maybe a month if you're lucky. 
                                <span className="text-white font-semibold"> We give you unlimited rows from day one.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        Built for Real Shopify Stores
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-600 transition-all"
                            >
                                <feature.icon className="w-10 h-10 text-blue-400 mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-4">
                        The Real Cost Comparison
                    </h2>
                    <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                        Don't be fooled by "free" tiers that aren't really free
                    </p>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full bg-gray-900 rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-gray-800">
                                    <th className="text-left py-4 px-6 text-gray-400 font-medium"></th>
                                    <th className="text-center py-4 px-6 text-gray-400 font-medium">Fivetran</th>
                                    <th className="text-center py-4 px-6 text-gray-400 font-medium">Stitch Data</th>
                                    <th className="text-center py-4 px-6 text-green-400 font-medium">Our Solution</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-gray-800">
                                    <td className="py-4 px-6 text-gray-300 font-medium">Free Tier Limit</td>
                                    <td className="py-4 px-6 text-center text-red-400">500K rows/mo</td>
                                    <td className="py-4 px-6 text-center text-orange-400">5M rows/mo</td>
                                    <td className="py-4 px-6 text-center text-green-400 font-semibold">UNLIMITED</td>
                                </tr>
                                <tr className="border-t border-gray-800 bg-gray-800/30">
                                    <td className="py-4 px-6 text-gray-300 font-medium">Reality Check</td>
                                    <td className="py-4 px-6 text-center text-gray-400">≈ 1 week of data</td>
                                    <td className="py-4 px-6 text-center text-gray-400">≈ 1 month of data</td>
                                    <td className="py-4 px-6 text-center text-green-400">All your data</td>
                                </tr>
                                <tr className="border-t border-gray-800">
                                    <td className="py-4 px-6 text-gray-300 font-medium">After "Free" Tier</td>
                                    <td className="py-4 px-6 text-center text-red-400">$120-500/mo</td>
                                    <td className="py-4 px-6 text-center text-orange-400">$100-300/mo</td>
                                    <td className="py-4 px-6 text-center text-green-400">$50/mo hosting</td>
                                </tr>
                                <tr className="border-t border-gray-800 bg-gray-800/30">
                                    <td className="py-4 px-6 text-gray-300 font-medium">Annual Cost</td>
                                    <td className="py-4 px-6 text-center text-red-400">$1,440-6,000</td>
                                    <td className="py-4 px-6 text-center text-orange-400">$1,200-3,600</td>
                                    <td className="py-4 px-6 text-center text-green-400 font-semibold">$600 total</td>
                                </tr>
                                <tr className="border-t border-gray-800">
                                    <td className="py-4 px-6 text-gray-300 font-medium">Infrastructure</td>
                                    <td className="py-4 px-6 text-center text-gray-400">Their cloud</td>
                                    <td className="py-4 px-6 text-center text-gray-400">Their cloud</td>
                                    <td className="py-4 px-6 text-center text-green-400">YOUR cloud</td>
                                </tr>
                                <tr className="border-t border-gray-800 bg-gray-800/30">
                                    <td className="py-4 px-6 text-gray-300 font-medium">Vendor Lock-in</td>
                                    <td className="py-4 px-6 text-center text-red-400">High</td>
                                    <td className="py-4 px-6 text-center text-orange-400">High</td>
                                    <td className="py-4 px-6 text-center text-green-400">None</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 bg-green-900/20 border border-green-700/50 rounded-lg p-6 text-center">
                        <p className="text-green-300 text-lg">
                            💰 <strong>You save $1,200-5,400 per year</strong> while getting unlimited data
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        From Zero to Data in 5 Minutes
                    </h2>
                    
                    <div className="space-y-6">
                        {[
                            {
                                step: '01',
                                title: 'Enter Your Shopify Details',
                                description: 'Store URL, API token, and BigQuery dataset name. That\'s it.',
                                time: '30 seconds'
                            },
                            {
                                step: '02',
                                title: 'Click Start Onboarding',
                                description: 'Our system validates everything and creates your infrastructure.',
                                time: '1 minute'
                            },
                            {
                                step: '03',
                                title: 'Automatic Deployment',
                                description: 'Cloud Build deploys your pipeline to Cloud Run. No manual steps.',
                                time: '3 minutes'
                            },
                            {
                                step: '04',
                                title: 'Data Flows to BigQuery',
                                description: 'Your Shopify data appears in BigQuery. Start analyzing immediately.',
                                time: '30 seconds'
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex gap-6 items-start"
                            >
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">{item.step}</span>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center gap-4 mb-2">
                                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                        <span className="text-sm text-gray-500 flex items-center gap-1">
                                            <HiClock className="w-4 h-4" />
                                            {item.time}
                                        </span>
                                    </div>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        Common Questions
                    </h2>
                    
                    <div className="space-y-6">
                        {[
                            {
                                q: 'How is this different from the DIY tutorial?',
                                a: 'The DIY tutorial requires Python knowledge, Docker, and manual Cloud Run deployment. This automated version has a web UI, deploys automatically, and requires zero technical skills.'
                            },
                            {
                                q: 'What\'s included in the free plan?',
                                a: 'Up to 3 Shopify stores, unlimited data rows, 4 core tables (customers, orders, products, order items), daily syncs, and basic monitoring. No credit card required.'
                            },
                            {
                                q: 'What happens after 3 stores?',
                                a: 'Additional stores are $47/month each. Still way cheaper than any alternative, and you keep unlimited rows.'
                            },
                            {
                                q: 'Do I need a Google Cloud account?',
                                a: 'Yes, but we guide you through setup. The infrastructure runs on YOUR account, giving you full control and ownership. Total cost is about $50/month for compute and storage.'
                            },
                            {
                                q: 'Can I customize the pipeline?',
                                a: 'The free version syncs the 4 core tables. For custom fields, additional APIs, or transformations, we offer paid customization starting at $2,500.'
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gray-900 rounded-lg p-6 border border-gray-700"
                            >
                                <h3 className="text-lg font-semibold text-white mb-3">{item.q}</h3>
                                <p className="text-gray-300">{item.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Stop Paying for Row Limits
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Join hundreds of Shopify stores that own their data pipeline
                    </p>
                    
                    <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8">
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-4xl font-bold text-green-400 mb-2">$0</div>
                                <p className="text-gray-400">For up to 3 stores</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-blue-400 mb-2">∞</div>
                                <p className="text-gray-400">Unlimited data rows</p>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-purple-400 mb-2">5min</div>
                                <p className="text-gray-400">Setup time</p>
                            </div>
                        </div>
                    </div>
                    
                    <button
                        onClick={() => setIsContactFormOpen(true)}
                        className="group px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 flex items-center gap-2 mx-auto"
                    >
                        <HiSparkles className="w-5 h-5" />
                        Start Your Free Pipeline Now
                        <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <p className="text-sm text-gray-500 mt-4">
                        No credit card • No hidden fees • Cancel anytime
                    </p>
                </div>
            </section>

            {/* Contact Form Modal */}
            <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
        </div>
    );
};

export default ShopifyBigQueryLanding;