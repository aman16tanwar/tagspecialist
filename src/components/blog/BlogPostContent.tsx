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

        {/* Related Resources */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold text-navy-900 mb-6">Related Resources</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/benefits-of-server-side-tagging" className="block p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group">
              <p className="font-bold text-navy-900 text-sm group-hover:text-blue-600 transition-colors">Benefits of Server-Side Tagging</p>
              <p className="text-gray-500 text-xs mt-1">Why leading brands are making the switch</p>
            </Link>
            <Link href="/google-tag-manager-specialist" className="block p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group">
              <p className="font-bold text-navy-900 text-sm group-hover:text-blue-600 transition-colors">GTM Specialist Services</p>
              <p className="text-gray-500 text-xs mt-1">Expert implementation & audit</p>
            </Link>
            <Link href="/unified-data-platform-guide" className="block p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group">
              <p className="font-bold text-navy-900 text-sm group-hover:text-blue-600 transition-colors">Unified Data Platform Guide</p>
              <p className="text-gray-500 text-xs mt-1">BigQuery, attribution & ML activation</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
