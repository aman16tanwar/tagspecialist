import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogs, getBlogBySlug, getBlogById } from '@/lib/blogs';
import BlogPostContent from '@/components/blog/BlogPostContent';
import RedirectToSlug from '@/components/blog/RedirectToSlug';
import JsonLd from '@/components/seo/JsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  // Generate static pages for both canonical slug URLs and legacy id URLs.
  // Legacy id URLs render a redirect page that consolidates ranking on the slug URL.
  return [
    ...blogs.map((blog) => ({ slug: blog.slug })),
    ...blogs.map((blog) => ({ slug: blog.id })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (post) {
    const canonical = `https://tagspecialist.ca/blog/${post.slug}`;
    return {
      title: post.title,
      description: post.description,
      keywords: post.tags.join(', '),
      openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
        url: canonical,
        publishedTime: post.publishDate,
      },
      alternates: { canonical },
    };
  }

  // Legacy id URL — point search engines at the canonical slug URL and noindex this page
  const postById = await getBlogById(slug);
  if (postById) {
    const canonical = `https://tagspecialist.ca/blog/${postById.slug}`;
    return {
      title: postById.title,
      description: postById.description,
      robots: { index: false, follow: true },
      alternates: { canonical },
    };
  }

  return { title: 'Post Not Found' };
}

export const dynamic = 'force-static';

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);

  if (post) {
    const canonical = `https://tagspecialist.ca/blog/${post.slug}`;
    const articleSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: post.title,
          description: post.description,
          author: {
            '@type': 'Organization',
            name: 'Tag Specialist',
            url: 'https://tagspecialist.ca',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Tag Specialist',
            url: 'https://tagspecialist.ca',
            logo: {
              '@type': 'ImageObject',
              url: 'https://tagspecialist.ca/logo.png',
            },
          },
          datePublished: post.publishDate,
          dateModified: post.publishDate,
          mainEntityOfPage: canonical,
          keywords: post.tags.join(', '),
          articleSection: post.category,
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tagspecialist.ca' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://tagspecialist.ca/blogs' },
            { '@type': 'ListItem', position: 3, name: post.title, item: canonical },
          ],
        },
      ],
    };

    return (
      <>
        <JsonLd data={articleSchema} />
        <BlogPostContent post={post} />
      </>
    );
  }

  // Legacy id URL — render a redirect page (canonical + noindex set in metadata above)
  const postById = await getBlogById(slug);
  if (postById) {
    const targetUrl = `/blog/${postById.slug}`;
    return (
      <>
        <RedirectToSlug targetUrl={targetUrl} />
        <div className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-xl text-center">
            <h1 className="text-2xl font-heading font-bold text-navy-900 mb-4">
              This post has moved
            </h1>
            <p className="text-gray-600 mb-6">
              Redirecting you to{' '}
              <Link href={targetUrl} className="text-blue-600 hover:underline font-medium">
                {postById.title}
              </Link>
              .
            </p>
            <p className="text-sm text-gray-500">
              If you are not redirected automatically, click the link above.
            </p>
          </div>
        </div>
      </>
    );
  }

  notFound();
}
