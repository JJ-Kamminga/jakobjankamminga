import { getBlogPostById, parseFileId, processBlogPostContent, readAllBlogPostFiles } from "../../blog.utils";
import { PostContents } from "app/components/PostContents";
import { Container, Divider, Typography } from "@mui/material";
import path from "path";
import { formatDate } from "app/blog/utils/client";

export const dynamicParams = false;

export async function generateStaticParams() {
  const postsPath = path.join(process.cwd(), 'app', 'music', 'posts');
  const entries = await readAllBlogPostFiles(postsPath);

  return entries.map((entry) => ({
    id: parseFileId(entry),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postsPath = path.join(process.cwd(), 'app', 'music', 'posts');
  const blogPost = await getBlogPostById(id, postsPath);

  if (!blogPost) return {};

  return {
    title: blogPost.title,
    description: blogPost.summary,
    openGraph: {
      title: blogPost.title,
      description: blogPost.summary,
      type: 'article',
      publishedTime: blogPost.date,
    }
  };
}

export default async function MusicPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postsPath = path.join(process.cwd(), 'app', 'music', 'posts');

  const blogPost = await getBlogPostById(id, postsPath);

  if (!blogPost) return;

  const htmlContent = await processBlogPostContent(blogPost.content);

  return (
    <section>
      <Container maxWidth='md' >
        <Typography variant="h2">{blogPost.title}</Typography>
        <Typography variant="subtitle1" sx={{ fontSize: '1.2rem' }}>{formatDate(blogPost.date)}</Typography>
        <Divider sx={{ padding: '10px' }} />
        <PostContents contents={htmlContent}></PostContents>
      </Container>
    </section>
  );
}
