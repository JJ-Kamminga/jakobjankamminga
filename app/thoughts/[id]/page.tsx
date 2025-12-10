import { getBlogPostById, parseFileId, processBlogPostContent, readAllBlogPostFiles } from "../../blog.utils";
import { PostContents } from "app/components/PostContents";
import { Container, Typography } from "@mui/material";
import Header from "app/components/Header";
import path from "path";
import { thoughtsMetadata } from "app/metadata";

export const dynamicParams = false;

export async function generateStaticParams() {
  const postsPath = path.join(process.cwd(), 'app', 'thoughts', 'posts');
  const entries = await readAllBlogPostFiles(postsPath);

  return entries.map((entry) => ({
    id: parseFileId(entry),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postsPath = path.join(process.cwd(), 'app', 'thoughts', 'posts');
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
};

export default async function ThoughtsPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postsPath = path.join(process.cwd(), 'app', 'thoughts', 'posts');

  const blogPost = await getBlogPostById(id, postsPath);

  if (!blogPost) return;

  const htmlContent = await processBlogPostContent(blogPost.content);

  return (
    <section>
      <Header title={thoughtsMetadata.title} subtitle={thoughtsMetadata.description} />
      <Container maxWidth='md'>
        <Typography variant="h2">{blogPost.title}</Typography>
        {/* <Typography variant="subtitle1">{new Date(blogPost.date).toLocaleDateString()}</Typography> */}
        <PostContents contents={htmlContent}></PostContents>
      </Container>
    </section>
  );
};
