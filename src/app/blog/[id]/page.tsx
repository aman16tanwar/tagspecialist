import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogs, getBlogById } from '@/lib/blogs';
import BlogPostContent from '@/components/blog/BlogPostContent';

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
  };
}

export const dynamic = 'force-static';

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = await getBlogById(id);

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}
