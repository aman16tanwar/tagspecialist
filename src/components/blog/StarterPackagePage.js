import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    HiChartBar, HiCurrencyDollar, HiCode, 
    HiShieldCheck, HiCheckCircle, HiXCircle,
    HiArrowRight, HiExternalLink, HiArrowLeft
} from 'react-icons/hi';
import { FaShopify, FaPython } from 'react-icons/fa';
import { SiGooglecloud, SiGooglebigquery } from 'react-icons/si';

const StarterPackagePage = () => {
    const [activeTab, setActiveTab] = useState('problem');
    
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const problemPoints = [
        {
            title: "Expensive ELT Tools",
            description: "Paying $100-500 per Shopify store monthly for tools like Fivetran or Stitch",
            cost: "$1,200-6,000/year per store",
            icon: HiCurrencyDollar
        },
        {
            title: "Scaling Costs Explode",
            description: "Adding new stores multiplies your costs linearly",
            cost: "10 stores = $12,000-60,000/year",
            icon: HiChartBar
        },
        {
            title: "Vendor Lock-in",
            description: "Stuck with proprietary tools and their pricing models",
            cost: "Price increases without alternatives",
            icon: HiShieldCheck
        },
        {
            title: "Limited Customization",
            description: "Can't modify sync frequency, data transformations, or specific fields",
            cost: "Paying for features you don't need",
            icon: HiCode
        }
    ];

    const solutionFeatures = [
        {
            title: "One-Time Investment",
            description: "Pay once, own forever. No recurring fees.",
            value: "$497 total (not per month!)"
        },
        {
            title: "Unlimited Stores",
            description: "Add 1 or 100 stores - same infrastructure cost",
            value: "~$50/month Cloud Run costs"
        },
        {
            title: "Full Control",
            description: "Modify sync schedules, add custom fields, transform data your way",
            value: "100% customizable Python code"
        },
        {
            title: "Production Ready",
            description: "Battle-tested with real clients processing millions of records",
            value: "99.9% uptime achievable"
        }
    ];

    const comparisonData = [
        {
            feature: "Monthly Cost (10 stores)",
            traditional: "$1,000-5,000",
            ourSolution: "~$50 Cloud Run",
            savings: "95-99% reduction"
        },
        {
            feature: "Setup Time",
            traditional: "2-3 hours per store",
            ourSolution: "2 hours total",
            savings: "One-time setup"
        },
        {
            feature: "Customization",
            traditional: "Limited or none",
            ourSolution: "Full source code",
            savings: "Complete flexibility"
        },
        {
            feature: "Scaling",
            traditional: "Linear cost increase",
            ourSolution: "Same infrastructure",
            savings: "Infinite scaling"
        }
    ];

    const includedItems = [
        "Complete Python pipeline code (1,000+ lines)",
        "Cloud Run deployment scripts",
        "BigQuery schema definitions",
        "Shopify API integration module",
        "Error handling & retry logic",
        "Monitoring & alerting setup",
        "Step-by-step documentation (50+ pages)",
        "Configuration templates",
        "30 days email support",
        "Future updates included"
    ];

    const techStack = [
        { name: "Python 3.11+", icon: FaPython, description: "Modern, maintainable code" },
        { name: "Google Cloud Run", icon: SiGooglecloud, description: "Serverless, auto-scaling" },
        { name: "BigQuery", icon: SiGooglebigquery, description: "Petabyte-scale analytics" },
        { name: "Shopify API", icon: FaShopify, description: "Official API integration" }
    ];

    const faqs = [
        {
            question: "Do I need to be a developer?",
            answer: "Basic Python knowledge helpful but not required. Our documentation walks through every step with screenshots."
        },
        {
            question: "What are the ongoing costs?",
            answer: "Only Google Cloud costs (~$50/month for most setups). No fees to us, no per-store charges."
        },
        {
            question: "How long does setup take?",
            answer: "Most customers are running in 2-4 hours. Complex setups might take a day."
        },
        {
            question: "Can I modify the code?",
            answer: "Yes! You get full source code with unlimited rights to modify, extend, or resell."
        },
        {
            question: "What if I need help after 30 days?",
            answer: "Extended support available at $150/hour, or upgrade to Professional Package."
        },
        {
            question: "Will it work with my Shopify Plus store?",
            answer: "Yes, supports all Shopify plans including Plus, with bulk operations for large catalogs."
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <Link 
                    to="/blogs" 
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-8"
                >
                    <HiArrowLeft className="w-4 h-4" />
                    Back to Blogs
                </Link>
            </div>

            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-900">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
                            <HiCurrencyDollar className="w-5 h-5 text-green-400" />
                            <span className="text-sm text-green-300 font-medium">Save 95% on ELT Costs</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Stop Paying $1,000+/Month for
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 block mt-2">
                                Shopify → BigQuery Sync
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                            Own your data pipeline forever with our production-ready Python solution. 
                            One-time purchase, unlimited stores, full customization.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a
                                href="/products#starter"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 uppercase text-sm tracking-wide"
                            >
                                Get Starter Package - $497
                                <HiArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href="#demo"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-sm border border-white/20 hover:bg-white/20 transition-all duration-300 uppercase text-sm tracking-wide"
                            >
                                See How It Works
                                <HiExternalLink className="w-5 h-5" />
                            </a>
                        </div>

                        <p className="text-sm text-gray-400">
                            ⚡ Instant download • 📧 30-day support • 💰 30-day money back guarantee
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Problem/Solution Tabs */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex rounded-sm bg-gray-100 p-1">
                            <button
                                onClick={() => setActiveTab('problem')}
                                className={`px-6 py-3 rounded-sm font-medium transition-all ${
                                    activeTab === 'problem' 
                                    ? 'bg-red-600 text-white shadow-sm' 
                                    : 'text-gray-600 hover:text-navy-900'
                                }`}
                            >
                                The Problem
                            </button>
                            <button
                                onClick={() => setActiveTab('solution')}
                                className={`px-6 py-3 rounded-sm font-medium transition-all ${
                                    activeTab === 'solution' 
                                    ? 'bg-green-600 text-white shadow-sm' 
                                    : 'text-gray-600 hover:text-navy-900'
                                }`}
                            >
                                Our Solution
                            </button>
                        </div>
                    </div>

                    {activeTab === 'problem' ? (
                        <div className="grid md:grid-cols-2 gap-6">
                            {problemPoints.map((problem, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-lg p-6 border border-red-100 shadow-sm hover:shadow-md transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <problem.icon className="w-6 h-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-navy-900 mb-2">{problem.title}</h3>
                                            <p className="text-gray-600 mb-2">{problem.description}</p>
                                            <p className="text-red-600 font-semibold">{problem.cost}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-6">
                            {solutionFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-lg p-6 border border-green-100 shadow-sm hover:shadow-md transition-all"
                                >
                                    <h3 className="text-lg font-semibold text-navy-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 mb-2">{feature.description}</p>
                                    <p className="text-green-600 font-semibold">{feature.value}</p>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Cost Comparison Table */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
                        Side-by-Side Comparison
                    </h2>
                    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                        <table className="w-full bg-white">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-6 py-4 text-left text-navy-900 font-semibold">Feature</th>
                                    <th className="px-6 py-4 text-left text-red-600 font-semibold">Traditional ELT</th>
                                    <th className="px-6 py-4 text-left text-green-600 font-semibold">Starter Package</th>
                                    <th className="px-6 py-4 text-left text-blue-600 font-semibold">Your Benefit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, index) => (
                                    <tr key={index} className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-navy-900 font-medium">{row.feature}</td>
                                        <td className="px-6 py-4 text-gray-600">{row.traditional}</td>
                                        <td className="px-6 py-4 text-gray-600">{row.ourSolution}</td>
                                        <td className="px-6 py-4 text-blue-600 font-medium">{row.savings}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
                        What's Included in Your Package
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                        {includedItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-3"
                            >
                                <HiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-semibold text-navy-900 text-center mb-8">
                            Built with Modern Technology
                        </h3>
                        <div className="grid md:grid-cols-4 gap-6">
                            {techStack.map((tech, index) => (
                                <div key={index} className="text-center group">
                                    <div className="w-16 h-16 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:border-blue-400 transition-colors">
                                        <tech.icon className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h4 className="text-navy-900 font-medium mb-1">{tech.name}</h4>
                                    <p className="text-sm text-gray-500">{tech.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI Calculator */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md">
                        <h2 className="text-3xl font-bold text-navy-900 text-center mb-8">
                            Your ROI in 30 Seconds
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div className="p-6 bg-red-50 rounded-lg">
                                <p className="text-gray-600 mb-2">Current ELT Cost</p>
                                <p className="text-4xl font-bold text-red-600">$1,000/mo</p>
                                <p className="text-sm text-gray-500">$12,000/year</p>
                            </div>
                            <div className="p-6 bg-green-50 rounded-lg">
                                <p className="text-gray-600 mb-2">With Starter Package</p>
                                <p className="text-4xl font-bold text-green-600">$50/mo</p>
                                <p className="text-sm text-gray-500">$600/year + $497 once</p>
                            </div>
                            <div className="p-6 bg-blue-50 rounded-lg">
                                <p className="text-gray-600 mb-2">You Save</p>
                                <p className="text-4xl font-bold text-blue-600">$10,903</p>
                                <p className="text-sm text-gray-500">First year alone!</p>
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <p className="text-lg text-navy-900 font-medium">
                                Pays for itself in <span className="text-green-600 font-bold">15 days</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                            >
                                <h3 className="text-lg font-semibold text-navy-900 mb-2">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Timeline */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
                        From Purchase to Production in Hours
                    </h2>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>
                        <div className="space-y-12">
                            {[
                                { time: "0 min", title: "Purchase & Download", description: "Get instant access to all files" },
                                { time: "30 min", title: "Setup GCP Project", description: "Create project, enable APIs" },
                                { time: "1 hour", title: "Deploy Pipeline", description: "Run deployment scripts" },
                                { time: "2 hours", title: "Configure & Test", description: "Add stores, verify data flow" },
                                { time: "Same day", title: "Production Ready", description: "Automated daily syncs running" }
                            ].map((step, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <div className="w-1/2"></div>
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-sm">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                                        <p className="text-blue-600 font-semibold mb-1 text-sm uppercase tracking-wide">{step.time}</p>
                                        <h3 className="text-xl font-semibold text-navy-900 mb-1">{step.title}</h3>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
                        Real Results from Real Customers
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                stores: "15 Shopify stores",
                                before: "$1,500/month on Fivetran",
                                after: "$75/month on Cloud Run",
                                saved: "$17,100/year saved"
                            },
                            {
                                stores: "42 Shopify Plus stores",
                                before: "$4,200/month on Stitch",
                                after: "$150/month infrastructure",
                                saved: "$48,600/year saved"
                            },
                            {
                                stores: "3 stores + custom fields",
                                before: "No ELT tool supported needs",
                                after: "Custom solution deployed",
                                saved: "Impossible → Possible"
                            }
                        ].map((story, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
                                <p className="text-lg font-semibold text-navy-900 mb-4 border-b border-gray-100 pb-2">{story.stores}</p>
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2">
                                        <HiXCircle className="w-5 h-5 text-red-500" />
                                        <span className="text-gray-500 text-sm">Before: {story.before}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <HiCheckCircle className="w-5 h-5 text-green-500" />
                                        <span className="text-gray-700 font-medium">After: {story.after}</span>
                                    </div>
                                </div>
                                <p className="text-xl font-bold text-green-600">{story.saved}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Own Your Data Pipeline?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Join hundreds of companies saving thousands on data infrastructure
                    </p>
                    <div className="bg-white/5 rounded-lg p-8 mb-8 border border-white/10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-left">
                                <h3 className="text-2xl font-semibold text-white mb-2">
                                    Starter Package - Shopify Data Pipeline
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    Complete source code, documentation, and 30-day support
                                </p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold text-white">$497</span>
                                    <span className="text-gray-400 text-sm">one-time</span>
                                </div>
                            </div>
                            <a
                                href="https://buy.stripe.com/fZu14o0xZ9EU0hkbaW83C01"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-sm shadow-lg transition-all duration-300 whitespace-nowrap uppercase text-sm tracking-wide"
                            >
                                Get Instant Access
                                <HiArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-400">
                        <span>✅ Instant download</span>
                        <span>✅ Full source code</span>
                        <span>✅ 30-day money back</span>
                        <span>✅ Lifetime updates</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StarterPackagePage;