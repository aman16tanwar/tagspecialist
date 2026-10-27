import blogsData from '@/data/blogs.json';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  publishDate: string;
  author: string;
  // YouTube video ID of the post's Short, embedded at the top of the post (optional).
  youtubeId?: string;
}

export async function getBlogs(): Promise<BlogPost[]> {
  return blogsData
    .map((blog: Partial<BlogPost>) => ({
      id: blog.id || '',
      title: blog.title || 'Untitled',
      slug: blog.slug || '',
      description: blog.description || '',
      content: blog.content || '',
      category: blog.category || 'General',
      tags: blog.tags || [],
      publishDate: blog.publishDate || '',
      author: blog.author || 'Tag Specialist',
      youtubeId: blog.youtubeId,
    }))
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

export async function getBlogById(id: string): Promise<BlogPost | null> {
  const blogs = await getBlogs();
  return blogs.find((blog) => blog.id === id) || null;
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const blogs = await getBlogs();
  return blogs.find((blog) => blog.slug === slug) || null;
}
