import { getAllBlogPosts } from "./blog/utils/blog.utils";

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  const blogs = await getAllBlogPosts();
  blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: post.date,
  }))

  const routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
