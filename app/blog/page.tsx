import Link from "next/link"
import { getAllBlogPosts, sortBlogPosts } from "../blog.utils"
import { Container, Typography } from "@mui/material"
import Header from "app/components/header"
import path from "path"

export const blogMetadata = {
  title: 'Blog',
  description: 'I think about technology, philosophy and history. This blog may or may not contain structured thoughts.',
}

export default async function BlogPage() {
  const postsPath = path.join(process.cwd(), 'app', 'blog', 'posts');
  const blogPosts = await getAllBlogPosts(postsPath)
  blogPosts.sort(sortBlogPosts).reverse()

  return (
    <section>
      <Header title={blogMetadata.title} subtitle={blogMetadata.description} />
      <Container maxWidth='md'>
        <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
          <ul>
            {blogPosts.map((blogPost) => (
              <li key={blogPost.id}>
                <Link href={`/blog/${blogPost.id}`}>
                  {blogPost.title}
                </Link>
              </li>
            ))}
          </ul>
        </Typography>
      </Container>
    </section>
  )
}
