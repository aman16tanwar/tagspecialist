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
      </article>
    </div>
  );
}
