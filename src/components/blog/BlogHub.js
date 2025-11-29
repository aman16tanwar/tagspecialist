import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiPlay, HiLockClosed, HiClock, HiCheckCircle } from 'react-icons/hi';
import { FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Content', count: 24 },
    { id: 'ga4-gtm', name: 'GA4 & GTM', count: 8 },
    { id: 'data-pipeline', name: 'Data Pipelines', count: 6 },
    { id: 'bigquery', name: 'BigQuery', count: 5 },
    { id: 'automation', name: 'Automation', count: 5 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Complete GA4 Server-Side Tracking Setup",
      category: 'ga4-gtm',
      type: 'video',
      duration: '15:42',
      difficulty: 'intermediate',
      isPremium: false,
      thumbnail: '/api/placeholder/400/225',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual
      excerpt: "Learn how to implement server-side tracking with GA4 and GTM for better data accuracy and privacy compliance.",
      topics: ['Server-side GTM', 'GA4 Setup', 'Cookie Consent', 'Privacy'],
      freePortion: 5, // First 5 minutes free
      series: 'GA4 Mastery',
      partNumber: 1
    },
    {
      id: 2,
      title: "Building Production-Ready BigQuery ETL Pipeline",
      category: 'data-pipeline',
      type: 'video',
      duration: '28:15',
      difficulty: 'advanced',
      isPremium: true,
      thumbnail: '/api/placeholder/400/225',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual
      excerpt: "Build a scalable ETL pipeline from Google Ads to BigQuery using Cloud Functions and Airflow.",
      topics: ['Cloud Functions', 'Airflow', 'BigQuery', 'Python'],
      series: 'Data Engineering Pro',
      partNumber: 1
    },
    {
      id: 3,
      title: "Fix iOS 14+ Tracking Issues with Meta CAPI",
      category: 'ga4-gtm',
      type: 'tutorial',
      readTime: '12 min',
      difficulty: 'intermediate',
      isPremium: false,
      thumbnail: '/api/placeholder/400/225',
      excerpt: "Step-by-step guide to implement Meta Conversions API and recover lost iOS tracking data.",
      topics: ['Meta CAPI', 'iOS Tracking', 'Server-side', 'Privacy'],
      codeSnippets: true
    },
    {
      id: 4,
      title: "Real-Time Marketing Dashboard with Looker Studio",
      category: 'bigquery',
      type: 'video',
      duration: '22:30',
      difficulty: 'intermediate',
      isPremium: true,
      thumbnail: '/api/placeholder/400/225',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual
      excerpt: "Create automated dashboards that combine data from Google Ads, Meta, and GA4 in real-time.",
      topics: ['Looker Studio', 'BigQuery', 'Data Blending', 'Automation'],
      series: 'Dashboard Mastery',
      partNumber: 2
    },
    {
      id: 5,
      title: "Automate Google Ads Reporting with Python",
      category: 'automation',
      type: 'video',
      duration: '18:45',
      difficulty: 'advanced',
      isPremium: true,
      thumbnail: '/api/placeholder/400/225',
      youtubeId: 'dQw4w9WgXcQ', // Replace with actual
      excerpt: "Use Python and Google Ads API to automate reporting and bid management at scale.",
      topics: ['Python', 'Google Ads API', 'Automation', 'Pandas'],
      downloadableCode: true
    },
    {
      id: 6,
      title: "Debug GTM Like a Pro: Advanced Techniques",
      category: 'ga4-gtm',
      type: 'tutorial',
      readTime: '8 min',
      difficulty: 'beginner',
      isPremium: false,
      thumbnail: '/api/placeholder/400/225',
      excerpt: "Master GTM debugging with Preview mode, dataLayer inspection, and common fixes.",
      topics: ['GTM Debug', 'dataLayer', 'Troubleshooting'],
      freeSample: true
    }
  ];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="bg-navy-900 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <FaYoutube className="w-5 h-5 text-red-500" />
              <span className="text-sm text-white font-medium">New videos every week</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Learn Data Engineering & Marketing Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Practical tutorials solving real problems. Free samples, then $60/month for full access.
            </p>

            {/* Subscription CTA */}
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Premium Access</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <HiCheckCircle className="w-5 h-5 text-green-600" />
                      <span>All video tutorials & code</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <HiCheckCircle className="w-5 h-5 text-green-600" />
                      <span>Downloadable templates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <HiCheckCircle className="w-5 h-5 text-green-600" />
                      <span>Private Discord community</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy-900 mb-2">$60/month</div>
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-sm shadow-md hover:shadow-lg transform transition-all duration-200 hover:scale-105 uppercase text-sm tracking-wide">
                    Start Learning
                  </button>
                  <p className="text-sm text-gray-500 mt-2">Cancel anytime</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8 bg-gray-50 border-b border-gray-200">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-sm font-medium transition-all text-sm uppercase tracking-wide ${selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto px-4 py-12 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-blue-400 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gray-100">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {post.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <HiPlay className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                )}
                {post.isPremium && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-yellow-500 text-navy-900 rounded-sm text-xs font-bold flex items-center gap-1 uppercase">
                    <HiLockClosed className="w-3 h-3" />
                    Premium
                  </div>
                )}
                {!post.isPremium && post.freePortion && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-green-600 text-white rounded-sm text-xs font-bold uppercase">
                    {post.freePortion} Min Free
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Series Badge */}
                {post.series && (
                  <div className="text-xs text-blue-600 font-bold mb-2 uppercase tracking-wider">
                    {post.series} • Part {post.partNumber}
                  </div>
                )}

                <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  {post.type === 'video' ? (
                    <span className="flex items-center gap-1">
                      <HiClock className="w-4 h-4" />
                      {post.duration}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <HiClock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  )}
                  <span className={`px-2 py-0.5 rounded-sm text-xs font-bold uppercase ${post.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                      post.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                    }`}>
                    {post.difficulty}
                  </span>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.topics.slice(0, 3).map((topic, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-sm border border-gray-200">
                      {topic}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to={`/blog/${post.id}`}
                  className={`block w-full text-center px-4 py-2 rounded-sm font-semibold text-sm uppercase tracking-wide transition-all ${post.isPremium
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:shadow-md'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                >
                  {post.isPremium ? 'Watch with Premium' : 'Watch Free Sample'}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Ready to Level Up Your Skills?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of data engineers and marketers learning practical skills that get results.
          </p>
          <button className="px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-sm shadow-lg transform transition-all duration-200 hover:scale-105 text-lg uppercase tracking-wide">
            Get Premium Access - $60/month
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogHub;