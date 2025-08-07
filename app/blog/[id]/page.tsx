import { getBlogPostById, parseFileId, processBlogPostContent, readAllBlogPostFiles } from "../../blog.utils";
import { PostContents } from "app/components/postcontents";
import { Container, Typography } from "@mui/material";
import path from "path";
import { blogMetadata } from "app/metadata";

export const dynamicParams = false;

export async function generateStaticParams() {
  const postsPath = path.join(process.cwd(), 'app', 'blog', 'posts');
  const entries = await readAllBlogPostFiles(postsPath);

  return entries.map((entry) => ({
    id: parseFileId(entry),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postsPath = path.join(process.cwd(), 'app', 'blog', 'posts');
  const blogPost = await getBlogPostById(id, postsPath);

  if (!blogPost) return {};

  return {
    title: blogPost.title,
    description: blogPost.summary,
    openGraph: {
      title: blogPost.title,
      description: blogPost.summary,
      type: 'article',
      publishedTime: blogPost.date
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postsPath = path.join(process.cwd(), 'app', 'blog', 'posts');

  const blogPost = await getBlogPostById(id, postsPath);

  if (!blogPost) return;

  const htmlContent = await processBlogPostContent(blogPost.content);

  return (
    <section>
      <Typography variant="h1" sx={{ fontSize: '2rem', textAlign: 'center' }}>
        {blogMetadata.title}
      </Typography>
      <Container maxWidth='md'>
        <Typography variant="h2">{blogPost.title}</Typography>
        {/**<p>{blogPost.date.toString()}</p>**/}
        <Typography variant="subtitle1">{new Date(blogPost.date).toLocaleDateString()}</Typography>
        <PostContents contents={htmlContent}></PostContents>
      </Container>
    </section>
  );
}
