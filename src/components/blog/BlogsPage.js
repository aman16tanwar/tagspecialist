import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiClock } from 'react-icons/hi';
import SEOHead from '../seo/SEOHead';

const BlogsPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchPosts = async () => {
            try {
                // Fetch with cache-busting to ensure fresh data
                const response = await fetch(`/data/blogs.json?_=${Date.now()}`);
                if (!response.ok) throw new Error('Failed to fetch');
                
                const data = await response.json();
                
                // Minimal, safe mapping
                const safePosts = Array.isArray(data) ? data.map(p => ({
                    id: p.id || Math.random().toString(36).substr(2, 9),
                    title: p.title || 'Untitled Post',
                    description: p.description || (p.content ? p.content.substring(0, 150) + '...' : 'No description'),
                    category: p.category || 'General',
                    readTime: p.readTime || '5 min read',
                    date: p.publishDate || p.date || new Date().toISOString()
                })) : [];

                setPosts(safePosts);
            } catch (error) {
                console.error("Error loading blogs:", error);
                setPosts([]); // Fail gracefully to empty list
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="min-h-screen bg-white pt-20">
            <SEOHead
                title="Blog | Data Engineering & Marketing Analytics Insights"
                description="Practical guides and insights on GA4, GTM, BigQuery pipelines, Google Ads, and marketing automation from Tag Specialist."
                canonicalUrl="https://tagspecialist.ca/blogs"
            />
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-900">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Data Engineering Insights
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Practical guides on GA4, GTM, and BigQuery pipelines.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {loading ? (
                        <div className="text-center text-gray-500">Loading insights...</div>
                    ) : posts.length === 0 ? (
                        <div className="text-center text-gray-500">No posts found. Check back soon!</div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <Link key={post.id} to={`/blog/${post.id}`} className="block group">
                                    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                                                {post.category}
                                            </span>
                                            <span className="flex items-center gap-1 text-gray-500 text-sm">
                                                <HiClock className="w-4 h-4" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-blue-600 transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-600 mb-6 flex-grow">
                                            {post.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-blue-600 font-semibold uppercase text-sm tracking-wide mt-auto">
                                            Read Article
                                            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default BlogsPage;