import type { Metadata } from 'next';
import { getBlogs } from '@/lib/blogs';
import BlogList from '@/components/blog/BlogList';

export const metadata: Metadata = {
  title: 'Blog | Data Engineering & Marketing Analytics Insights',
  description: 'Practical guides and insights on GA4, GTM, BigQuery pipelines, Google Ads, and marketing automation from Tag Specialist.',
  alternates: {
    canonical: 'https://tagspecialist.ca/blogs',
  },
};

export default async function BlogsPage() {
  const posts = await getBlogs();

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Data Engineering Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Practical guides on GA4, GTM, and BigQuery pipelines.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <BlogList posts={posts} />
        </div>
      </section>
    </div>
  );
}
