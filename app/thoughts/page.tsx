import Link from "next/link"
import { Container, Divider, Grid, Typography } from "@mui/material"
import Header from "app/components/header"
import { getAllBlogPosts, processBlogPostContent, sortBlogPosts } from "app/blog.utils"
import path from "path"
import { remark } from "remark"
import remarkHtml from "remark-html"
import { PostContents } from "app/components/postcontents"
import { Thought } from "app/components/thought"

export const thoughtsMetadata = {
  title: 'Thoughts',
  description: 'My condensed thoughts on specific topics. Always well-considered but never final.',
}

export default async function ThoughtsPage() {
  const postsPath = path.join(process.cwd(), 'app', 'thoughts', 'posts');

  const blogPosts = await getAllBlogPosts(postsPath)
  blogPosts.sort(sortBlogPosts).reverse()

  return (
    <section>
      <Header title={thoughtsMetadata.title} subtitle={thoughtsMetadata.description} />
      <Container maxWidth='xl'>
        <Grid container maxWidth='xl' spacing={4}>
          {blogPosts.map(async (blogPost) => {
            const htmlContent = await processBlogPostContent(blogPost.content)
            {/* <Typography variant="body1" sx={{ fontSize: '1.2rem' }}> */ }

            return (
              <Thought>
                <article>
                  <Typography variant='h3'>{blogPost.title}</Typography>
                  <PostContents contents={htmlContent}></PostContents>
                  <Link href={`/thoughts/${blogPost.id}`}>
                    Link
                  </Link>
                </article>
              </Thought>
            )
          })}
          {/* </Typography> */}
        </Grid>
      </Container>
    </section >
  )
}
