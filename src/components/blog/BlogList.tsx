'use client';

import Link from 'next/link';
import { HiArrowRight, HiClock } from 'react-icons/hi';
import type { BlogPost } from '@/lib/blogs';

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center text-gray-500">No posts found. Check back soon!</div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
          <div className="bg-white rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-gray-500 text-sm">
                <HiClock className="w-4 h-4" />
                5 min read
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
  );
}
