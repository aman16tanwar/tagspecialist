import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogs, getBlogById } from '@/lib/blogs';
import BlogPostContent from '@/components/blog/BlogPostContent';
import JsonLd from '@/components/seo/JsonLd';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({ id: blog.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getBlogById(id);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `https://tagspecialist.ca/blog/${post.id}`,
      publishedTime: post.publishDate,
    },
    alternates: {
      canonical: `https://tagspecialist.ca/blog/${post.id}`,
    },
  };
}

export const dynamic = 'force-static';

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = await getBlogById(id);

  if (!post) {
    notFound();
  }

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
        mainEntityOfPage: `https://tagspecialist.ca/blog/${post.id}`,
        keywords: post.tags.join(', '),
        articleSection: post.category,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tagspecialist.ca' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://tagspecialist.ca/blogs' },
          { '@type': 'ListItem', position: 3, name: post.title, item: `https://tagspecialist.ca/blog/${post.id}` },
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
