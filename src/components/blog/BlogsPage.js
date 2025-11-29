import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiClock } from 'react-icons/hi';

const BlogsPage = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const blogPosts = [
        {
            id: 'automated-pipeline',
            title: 'NEW: From DIY to Done-For-You: Automated Shopify Pipelines',
            description: 'Introducing our fully automated solution with web UI. No coding required, 5-minute setup, and it\'s FREE for up to 3 stores. Say goodbye to Docker and CLI commands.',
            category: 'Product Update',
            readTime: '15 min read',
            featured: true,
            link: '/blog/automated-shopify-pipeline',
            highlights: [
                'Web-based onboarding interface',
                'Automatic Cloud Run deployment',
                'FREE for up to 3 stores',
                'No technical skills required'
            ],
            isNew: true,
            date: 'January 2025'
        },
        {
            id: 'tutorial',
            title: 'Complete Guide: Build Your Own Shopify \u2192 BigQuery Pipeline',
            description: 'Step-by-step tutorial to replace expensive ELT tools with a custom Python solution. Includes code snippets, architecture diagrams, and deployment guide.',
            category: 'Technical Tutorial',
            readTime: '20 min read',
            featured: false,
            link: '/blog/shopify-bigquery-pipeline-tutorial',
            highlights: [
                'Full implementation walkthrough',
                'Docker & Cloud Run deployment',
                'Multi-store configuration',
                'Production-ready architecture'
            ]
        },
        {
            id: 'starter-package',
            title: 'Stop Paying $1,000+/Month for Shopify \u2192 BigQuery Sync',
            description: 'Learn how to save 95% on ELT costs with our production-ready Python solution. One-time purchase, unlimited stores, full customization.',
            category: 'Product Guide',
            readTime: '10 min read',
            featured: false,
            link: '/starter-package',
            highlights: [
                'Save $10,903 in the first year',
                'Setup in 2 hours',
                'Unlimited Shopify stores',
                'Full source code ownership'
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-900">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Data Engineering
                            <span className="text-blue-400 block mt-2">
                                Insights & Guides
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Learn how to build cost-effective data pipelines, optimize your infrastructure, 
                            and save thousands on data tools.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`${post.featured ? 'md:col-span-2 lg:col-span-3' : ''}`}
                            >
                                <Link to={post.link} className="block group">
                                    <div className={`bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${post.featured ? 'border-2 border-blue-500 shadow-md' : 'border border-gray-200 shadow-sm'}`}>
                                        {post.featured && (
                                            <div className="bg-blue-600 text-white px-4 py-2 text-sm font-medium uppercase tracking-wide">
                                                Featured Guide
                                            </div>
                                        )}
                                        
                                        <div className="p-8">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                                                    {post.category}
                                                </span>
                                                <span className="flex items-center gap-1 text-gray-500 text-sm">
                                                    <HiClock className="w-4 h-4" />
                                                    {post.readTime}
                                                </span>
                                                {post.isNew && (
                                                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100 animate-pulse">
                                                        NEW
                                                    </span>
                                                )}
                                            </div>

                                            <h2 className={`font-bold text-navy-900 mb-3 group-hover:text-blue-600 transition-colors ${post.featured ? 'text-3xl' : 'text-2xl'}`}>
                                                {post.title}
                                            </h2>

                                            <p className={`text-gray-600 mb-6 leading-relaxed ${post.featured ? 'text-lg' : ''}`}>
                                                {post.description}
                                            </p>

                                            {post.featured && post.highlights && (
                                                <div className="grid md:grid-cols-2 gap-3 mb-6">
                                                    {post.highlights.map((highlight, idx) => (
                                                        <div key={idx} className="flex items-center gap-2">
                                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                            <span className="text-gray-700">{highlight}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all uppercase text-sm tracking-wide">
                                                Read More
                                                <HiArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Coming Soon Section */}
                    <div className="mt-16 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full mb-4">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-gray-600 font-medium">More Guides Coming Soon</span>
                        </div>
                        <p className="text-gray-500">
                            Subscribe to get notified about new data engineering insights and cost-saving strategies
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogsPage;
