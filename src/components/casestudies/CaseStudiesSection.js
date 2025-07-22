import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    HiTrendingUp,
    HiArrowRight, HiCheckCircle, HiLightningBolt,
    HiShoppingCart, HiDatabase, HiCode
} from 'react-icons/hi';
import { FaShopify, FaFacebook, FaGoogle } from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';

const CaseStudiesSection = () => {
    const [selectedCase, setSelectedCase] = useState(0);

    const caseStudies = [
        {
            id: 1,
            title: "From Data Chaos to $2M Revenue Insights",
            client: "Fast-Growing DTC Brand",
            industry: "Ecommerce",
            challenge: "A fast-growing DTC brand couldn't trust their numbers. Meta reported 3x ROAS, GA4 showed 1.5x, and they had no idea which products actually drove profit.",
            solution: "Built an end-to-end data pipeline connecting Shopify, Meta Ads, Google Ads, and shipping costs into BigQuery. Created an AI assistant that answers questions like 'What's our true profit margin on Facebook campaigns for product X?'",
            results: [
                { metric: "$340K", description: "Wasted ad spend identified in 30 days" },
                { metric: "47%", description: "Improvement in true ROAS" },
                { metric: "10hrs/week", description: "CEO time saved with automated reports" }
            ],
            technologies: [FaShopify, FaFacebook, FaGoogle, SiGooglecloud],
            color: "from-blue-500 to-cyan-500",
            icon: HiShoppingCart,
            features: [
                "Real-time data pipeline from all marketing channels",
                "Custom profit margin calculations per product",
                "AI-powered insights assistant",
                "Automated anomaly detection"
            ]
        },
        {
            id: 2,
            title: "Server-Side Tracking Saves the Day",
            client: "B2B SaaS Company",
            industry: "Software",
            challenge: "iOS 14.5 killed their conversion tracking. They were flying blind on 60% of their traffic.",
            solution: "Implemented server-side GTM with Firestore integration, custom Attribution API, and enhanced conversion tracking across all platforms.",
            results: [
                { metric: "73%", description: "Lost conversions recovered" },
                { metric: "31%", description: "Reduction in CAC" },
                { metric: "2.5x", description: "Ad spend scaled with confidence" }
            ],
            technologies: [SiGooglecloud, FaGoogle, FaFacebook],
            color: "from-indigo-500 to-blue-600",
            icon: HiDatabase,
            features: [
                "Server-side GTM on Google Cloud",
                "Custom attribution modeling",
                "Cross-platform conversion tracking",
                "Privacy-compliant implementation"
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.645, 0.045, 0.355, 1],
            },
        },
    };

    const MetricCard = ({ metric, description }) => (
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4">
            <div className="text-3xl font-bold text-white mb-1">{metric}</div>
            <div className="text-sm text-gray-400">{description}</div>
        </div>
    );

    return (
        <section id="case-studies" className="relative py-20 bg-gray-900">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Real Results for{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                                Real Businesses
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            See how I've helped businesses transform their data operations and drive measurable growth
                        </p>
                    </motion.div>

                    {/* Case Study Selector */}
                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
                        {caseStudies.map((study, index) => (
                            <button
                                key={study.id}
                                onClick={() => setSelectedCase(index)}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                    selectedCase === index
                                        ? 'bg-gradient-to-r ' + study.color + ' text-white shadow-lg'
                                        : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                                }`}
                            >
                                {study.title}
                            </button>
                        ))}
                    </motion.div>

                    {/* Case Study Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCase}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="grid lg:grid-cols-2 gap-12 items-start"
                        >
                            {/* Left Column - Story */}
                            <div className="space-y-8">
                                {/* Header */}
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-12 h-12 bg-gradient-to-br ${caseStudies[selectedCase].color} rounded-xl flex items-center justify-center`}>
                                            {React.createElement(caseStudies[selectedCase].icon, { className: "w-6 h-6 text-white" })}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">{caseStudies[selectedCase].client}</h3>
                                            <p className="text-gray-400">{caseStudies[selectedCase].industry}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Challenge */}
                                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                        <HiLightningBolt className="w-5 h-5 text-red-400" />
                                        The Challenge
                                    </h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        {caseStudies[selectedCase].challenge}
                                    </p>
                                </div>

                                {/* Solution */}
                                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                        <HiCode className="w-5 h-5 text-green-400" />
                                        The Solution
                                    </h4>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        {caseStudies[selectedCase].solution}
                                    </p>
                                    
                                    {/* Features */}
                                    <div className="space-y-2">
                                        {caseStudies[selectedCase].features.map((feature, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                                <HiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-400">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h4>
                                    <div className="flex gap-3">
                                        {caseStudies[selectedCase].technologies.map((Tech, index) => (
                                            <div key={index} className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                                                <Tech className="w-5 h-5 text-gray-400" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Results */}
                            <div className="space-y-8">
                                {/* Results Header */}
                                <div className="text-center lg:text-left">
                                    <h4 className="text-3xl font-bold text-white mb-2 flex items-center gap-2 justify-center lg:justify-start">
                                        <HiTrendingUp className="w-8 h-8 text-green-400" />
                                        The Results
                                    </h4>
                                    <p className="text-gray-400">Measurable impact within weeks</p>
                                </div>

                                {/* Metrics Grid */}
                                <div className="grid gap-4">
                                    {caseStudies[selectedCase].results.map((result, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <MetricCard metric={result.metric} description={result.description} />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Visual Chart */}
                                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-400">Before</span>
                                            <span className="text-sm text-gray-400">After</span>
                                        </div>
                                        <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: '85%' }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className={`absolute inset-y-0 left-0 bg-gradient-to-r ${caseStudies[selectedCase].color} rounded-full`}
                                            />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-2xl font-bold text-white">Performance Improvement</p>
                                            <p className="text-gray-400">Across all key metrics</p>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-6 text-center">
                                    <p className="text-white font-semibold mb-4">
                                        Ready to achieve similar results?
                                    </p>
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105"
                                    >
                                        Let's Talk About Your Project
                                        <HiArrowRight className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default CaseStudiesSection;