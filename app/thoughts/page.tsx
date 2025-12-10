import { Container, Typography } from "@mui/material";
import Header from "app/components/Header";
import { getAllBlogPosts, processBlogPostContent, sortBlogPosts } from "app/blog.utils";
import path from "path";
import { thoughtsMetadata } from "app/metadata";
import { ThoughtsMasonry } from "app/components/ThoughtsMasonry";
import { Thought } from "app/components/Thought";
import { PostContents } from "app/components/PostContents";
import { Link } from "app/components/Link";

export async function generateMetadata() {
  return thoughtsMetadata;
}

export default async function ThoughtsPage() {
  const postsPath = path.join(process.cwd(), 'app', 'thoughts', 'posts');

  const blogPosts = await getAllBlogPosts(postsPath);
  blogPosts.sort(sortBlogPosts).reverse();

  const MasonryContent = () => {
    return blogPosts.map(async (blogPost) => {
      const htmlContent = await processBlogPostContent(blogPost.content);
      return (
        <Thought key={blogPost.id}>
          <article>
            <Typography variant='h3' sx={{ fontSize: '2.2rem', fontWeight: 'bold' }}>{blogPost.title}</Typography>
            <PostContents contents={htmlContent}></PostContents>
            <Link href={`/thoughts/${blogPost.id}`}>
              Link
            </Link>
          </article>
        </Thought>
      );
    });
  };

  return (
    <section>
      <Header title={thoughtsMetadata.title} subtitle={thoughtsMetadata.description} />
      <Container maxWidth='xl' sx={{ borderTop: '4px double var(--main-darkgrey)', paddingTop: '20px' }}>
        <ThoughtsMasonry>
          <MasonryContent />
        </ ThoughtsMasonry >
      </Container>
    </section >
  );
}
