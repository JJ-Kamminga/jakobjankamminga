import Link from "next/link"
import { Container, Typography } from "@mui/material"
import Header from "app/components/header"
import { getAllBlogPosts, sortBlogPosts } from "app/blog.utils"
import path from "path"
import { remark } from "remark"
import remarkHtml from "remark-html"
import { PostContents } from "app/components/postcontents"

export const thoughtsMetadata = {
  title: 'Thoughts',
  description: 'Read my thoughts.',
}

export default async function ThoughtsPage() {
  const postsPath = path.join(process.cwd(), 'app', 'thoughts', 'posts');

  const blogPosts = await getAllBlogPosts(postsPath)
  blogPosts.sort(sortBlogPosts).reverse()

  return (
    <section>
      <Header title={thoughtsMetadata.title} />
      <Container maxWidth='md'>
        <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
          <ul>
            {blogPosts.map(async (blogPost) => {
              const htmlContent = (await remark().use(remarkHtml).process(blogPost.content)).toString()

              return (
                <article>
                  <h3>{blogPost.title}</h3>
                  <PostContents contents={htmlContent}></PostContents>
                  <Link href={`/thoughts/${blogPost.id}`}>
                    Link
                  </Link>
                </article>
              )
            })}
          </ul>
        </Typography>
      </Container>

    </section>
  )
}
