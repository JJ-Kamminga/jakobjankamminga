import Link from "next/link"
import { getAllBlogPosts, sortBlogPosts } from "./utils/blog.utils"

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts()
  blogPosts.sort(sortBlogPosts).reverse()

  return (
    <section>
      <h2>My Blog</h2>
      <ul>
        {blogPosts.map((blogPost) => (
          <li key={blogPost.id}>
            <Link href={`/blog/${blogPost.id}`}>
              blogPost.title
            </Link>
          </li>
        ))}
      </ul>

    </section>
  )
}
