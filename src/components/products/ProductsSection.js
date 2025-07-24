import React from 'react';
import { motion } from 'framer-motion';
import { 
    HiDownload, HiCheckCircle,
    HiLightningBolt, HiCode, HiArrowRight
} from 'react-icons/hi';
import { FaShopify } from 'react-icons/fa';

const ProductsSection = () => {
    const products = [
        {
            id: 'shopify-pipeline',
            name: 'Shopify → BigQuery Pipeline',
            tagline: 'Save $12,000+/year on ELT tools',
            description: 'Replace expensive ELT tools with a custom Python pipeline that scales to 100+ Shopify stores without per-store fees.',
            icon: FaShopify,
            color: 'from-green-500 to-green-600',
            problem: 'Paying $100+ per Shopify store for data sync?',
            solution: 'Our Cloud Run pipeline eliminates recurring costs',
            savings: '$1,000+/month for 10 stores',
            packages: [
                {
                    name: 'DIY Script Package',
                    price: '$497',
                    description: 'Perfect for technical teams',
                    features: [
                        'Complete Python pipeline code',
                        'Cloud Run deployment scripts',
                        'Setup documentation',
                        'Email support for 30 days',
                        'Config templates'
                    ],
                    cta: 'Get Instant Access',
                    popular: false
                },
                {
                    name: 'Guided Implementation',
                    price: '$997',
                    description: 'We help you set it up',
                    features: [
                        'Everything in DIY package',
                        '2-hour setup call',
                        'GCP configuration together',
                        'Test with your stores',
                        '60 days Slack support'
                    ],
                    cta: 'Book Setup Call',
                    popular: true
                },
                {
                    name: 'Done-For-You',
                    price: '$2,497',
                    description: 'Full white-glove service',
                    features: [
                        'Complete implementation',
                        'GCP project setup',
                        'All stores migrated',
                        'Team training session',
                        '90 days priority support'
                    ],
                    cta: 'Start Today',
                    popular: false
                }
            ],
            techStack: ['Python', 'Cloud Run', 'BigQuery', 'Pub/Sub', 'Secret Manager'],
            results: [
                '90% cost reduction vs ELT tools',
                'Scales to 100+ stores',
                'Self-service store onboarding',
                'Automatic daily syncs'
            ]
        }
    ];

    return (
        <section id="products" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                        <HiDownload className="w-5 h-5 text-purple-400" />
                        <span className="text-sm text-purple-300 font-medium">Ready-to-Deploy Solutions</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Productized{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            Data Solutions
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Battle-tested pipelines from real client implementations
                    </p>
                </div>

                {products.map((product) => (
                    <div key={product.id} className="mb-20">
                        {/* Product Header */}
                        <div className="text-center mb-12">
                            <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center`}>
                                <product.icon className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">{product.name}</h3>
                            <p className="text-xl text-gray-400 mb-4">{product.tagline}</p>
                            <p className="text-gray-300 max-w-2xl mx-auto">{product.description}</p>
                        </div>

                        {/* Problem/Solution */}
                        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
                            <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-6">
                                <h4 className="text-lg font-semibold text-red-400 mb-2">The Problem</h4>
                                <p className="text-gray-300">{product.problem}</p>
                            </div>
                            <div className="bg-green-900/20 border border-green-700/50 rounded-xl p-6">
                                <h4 className="text-lg font-semibold text-green-400 mb-2">Our Solution</h4>
                                <p className="text-gray-300">{product.solution}</p>
                            </div>
                        </div>

                        {/* ROI Calculator */}
                        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-12 max-w-4xl mx-auto">
                            <h4 className="text-xl font-bold text-white mb-4 text-center">ROI Calculator</h4>
                            <div className="grid md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <p className="text-gray-400 mb-2">Traditional ELT Cost</p>
                                    <p className="text-3xl font-bold text-red-400">$1,000/mo</p>
                                    <p className="text-sm text-gray-500">For 10 stores</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 mb-2">Our Solution Cost</p>
                                    <p className="text-3xl font-bold text-green-400">$50/mo</p>
                                    <p className="text-sm text-gray-500">Cloud Run costs only</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 mb-2">Your Savings</p>
                                    <p className="text-3xl font-bold text-yellow-400">{product.savings}</p>
                                    <p className="text-sm text-gray-500">Every month</p>
                                </div>
                            </div>
                        </div>

                        {/* Packages */}
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            {product.packages.map((pkg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`relative ${pkg.popular ? 'md:-mt-4' : ''}`}
                                >
                                    {pkg.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                                                Most Popular
                                            </div>
                                        </div>
                                    )}
                                    
                                    <div className={`h-full bg-gray-800 border ${pkg.popular ? 'border-blue-500' : 'border-gray-700'} rounded-xl p-6`}>
                                        <h5 className="text-xl font-bold text-white mb-2">{pkg.name}</h5>
                                        <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
                                        <div className="text-3xl font-bold text-white mb-6">{pkg.price}</div>
                                        
                                        <ul className="space-y-3 mb-8">
                                            {pkg.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <HiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-300 text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        <button className={`w-full py-3 px-4 ${pkg.popular ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-gray-700'} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}>
                                            {pkg.cta}
                                            <HiArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                    <HiCode className="w-5 h-5 text-blue-400" />
                                    Tech Stack Included
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {product.techStack.map((tech, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                    <HiLightningBolt className="w-5 h-5 text-yellow-400" />
                                    Expected Results
                                </h4>
                                <ul className="space-y-2">
                                    {product.results.map((result, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                                            <HiCheckCircle className="w-4 h-4 text-green-400" />
                                            {result}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="bg-gray-800/30 rounded-xl p-8 max-w-4xl mx-auto">
                            <h4 className="text-xl font-bold text-white mb-6">Common Questions</h4>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-semibold text-white mb-2">What GCP services do I need?</p>
                                    <p className="text-gray-400 text-sm">Cloud Run, BigQuery, Pub/Sub, Secret Manager, and Cloud Storage. Typically costs $50-100/month for most implementations.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-white mb-2">How long does implementation take?</p>
                                    <p className="text-gray-400 text-sm">DIY: 1-2 days with technical knowledge. Guided: Same day. Done-for-you: 2-3 days including testing.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-white mb-2">Can this work with other platforms?</p>
                                    <p className="text-gray-400 text-sm">This pipeline is Shopify-specific, but we offer custom implementations for WooCommerce, BigCommerce, and others.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-4">
                        Have a different data pipeline challenge?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                    >
                        Let's discuss custom solutions
                        <HiArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;