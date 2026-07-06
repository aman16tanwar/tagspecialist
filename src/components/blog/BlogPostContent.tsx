'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiCalendar, HiClock, HiTag } from 'react-icons/hi';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import type { BlogPost } from '@/lib/blogs';

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  // Remove first H1 from content to avoid duplicate title
  let displayContent = post.content;
  const firstH1Regex = /^#\s.*(?:\r?\n|$)/;
  if (displayContent.match(firstH1Regex)) {
    displayContent = displayContent.replace(firstH1Regex, '').trim();
  }

  const displayDate = post.publishDate ? new Date(post.publishDate) : new Date();

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <Link href="/blogs" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
            <HiArrowLeft className="mr-2 w-4 h-4" /> Back to Insights
          </Link>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
              <HiTag className="w-4 h-4" /> {post.category || 'General'}
            </span>
            <span className="flex items-center gap-1">
              <HiCalendar className="w-4 h-4" /> {displayDate.toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <HiClock className="w-4 h-4" /> 5 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
            {post.title}
          </h1>
        </motion.div>

        <div className="prose prose-lg prose-blue max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {displayContent}
          </ReactMarkdown>
        </div>

        {/* Debug Session CTA — for practitioners stuck mid-implementation */}
        <div className="mt-16 p-8 bg-navy-900 rounded-xl text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-2">For Hands-On Implementers</p>
              <h3 className="text-lg font-bold mb-1">Stuck on this? Get it fixed live on a call.</h3>
              <p className="text-sm text-blue-100/80">
                1-hour screen-share debug session with a senior tracking engineer — bring your broken GTM, sGTM, or GA4 setup and leave with it working. $150 USD. If we can&apos;t help in the first 10 minutes, full refund.
              </p>
            </div>
            <a
              href="https://cal.com/tagspecialist/tracking-debug-session"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md whitespace-nowrap"
            >
              Book Debug Session — $150
            </a>
          </div>
        </div>

        {/* Service CTA */}
        <div className="mt-8 p-8 bg-[#eff6ff] border border-[#bfdbfe] rounded-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {post.tags?.some(t => ['Server-Side Tracking', 'GTM Server Container'].includes(t))
                  ? 'Need Help Implementing Server-Side Tracking?'
                  : post.tags?.some(t => ['BigQuery', 'Data Engineering', 'Data Warehouse'].includes(t))
                    ? 'Need Help Building Your Data Infrastructure?'
                    : 'Need Expert Help With Your Tracking Setup?'
                }
              </h3>
              <p className="text-sm text-gray-600">
                {post.tags?.some(t => ['Server-Side Tracking', 'GTM Server Container'].includes(t))
                  ? 'Our server-side tagging specialists can implement everything in this guide for you. Recover 30-40% lost conversion data.'
                  : post.tags?.some(t => ['BigQuery', 'Data Engineering', 'Data Warehouse'].includes(t))
                    ? 'Our data engineers build production-ready BigQuery warehouses and ETL pipelines. Own your data infrastructure.'
                    : 'Our specialists handle complex tracking implementations so you can focus on growing your business.'
                }
              </p>
            </div>
            <Link
              href={post.tags?.some(t => ['BigQuery', 'Data Engineering', 'Data Warehouse'].includes(t))
                ? '/book-audit?service=data-engineering'
                : '/book-audit?service=tracking'
              }
              className="flex-shrink-0 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-md"
            >
              Book Free Audit
            </Link>
          </div>
        </div>

        {/* Related Resources */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold text-navy-900 mb-6">Related Resources</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/server-side-tagging-specialist" className="block p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group">
              <p className="font-bold text-navy-900 text-sm group-hover:text-blue-600 transition-colors">Server-Side Tracking Specialist</p>
              <p className="text-gray-500 text-xs mt-1">Expert implementation & managed tracking</p>
            </Link>
            <Link href="/google-tag-manager-specialist" className="block p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group">
              <p className="font-bold text-navy-900 text-sm group-hover:text-blue-600 transition-colors">Google Tag Manager Specialist</p>
              <p className="text-gray-500 text-xs mt-1">GTM audits, server-side & GA4 setup</p>
            </Link>
            {post.tags?.some(t => ['BigQuery', 'Data Engineering', 'Data Warehouse', 'Data Lake'].includes(t)) ? (
              <Link href="/unified-data-platform-guide" className="block p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group">
                <p className="font-bold text-navy-900 text-sm group-hover:text-blue-600 transition-colors">Unified Data Platform Guide</p>
                <p className="text-gray-500 text-xs mt-1">BigQuery, attribution & ML activation</p>
              </Link>
            ) : post.tags?.some(t => ['Server-Side Tracking', 'GTM Server Container'].includes(t)) ? (
              <Link href="/managed-tracking" className="block p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group">
                <p className="font-bold text-navy-900 text-sm group-hover:text-blue-600 transition-colors">Managed Tracking Plans</p>
                <p className="text-gray-500 text-xs mt-1">From $150/mo — we handle the infrastructure</p>
              </Link>
            ) : (
              <Link href="/case-studies" className="block p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group">
                <p className="font-bold text-navy-900 text-sm group-hover:text-blue-600 transition-colors">Case Studies</p>
                <p className="text-gray-500 text-xs mt-1">Real results from 10 years of implementations</p>
              </Link>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
