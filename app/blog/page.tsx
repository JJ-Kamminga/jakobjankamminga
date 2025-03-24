import Link from "next/link"
import { getAllBlogPosts, sortBlogPosts } from "./utils/blog.utils"
import { Container } from "@mui/material"
import Header from "app/components/header"

export const blogMetadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts()
  blogPosts.sort(sortBlogPosts).reverse()

  return (
    <section>
      <Header title={blogMetadata.title} />
      <Container maxWidth='md'>
        <ul>
          {blogPosts.map((blogPost) => (
            <li key={blogPost.id}>
              <Link href={`/blog/${blogPost.id}`}>
                {blogPost.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>

    </section>
  )
}
