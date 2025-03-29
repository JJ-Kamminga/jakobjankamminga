import Link from "next/link"
import { Container, Typography } from "@mui/material"
import Header from "app/components/header"
import { getAllBlogPosts, sortBlogPosts } from "app/blog.utils"
import path from "path"

export const musicMetadata = {
  title: 'Music',
  description: 'About music.',
}

export default async function ThoughtsPage() {
  const postsPath = path.join(process.cwd(), 'app', 'music', 'posts');

  const blogPosts = await getAllBlogPosts(postsPath)
  blogPosts.sort(sortBlogPosts).reverse()

  return (
    <section>
      <Header title={musicMetadata.title} />
      <Container maxWidth='md'>
        <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
          <ul>
            {blogPosts.map((blogPost) => (
              <li key={blogPost.id}>
                <Link href={`/music/${blogPost.id}`}>
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
