import { remark } from "remark";
import { getBlogPostById, parseFileId, readAllBlogPostFiles } from "../utils/blog.utils";
import remarkHtml from "remark-html";
import { PostContents } from "app/components/postcontents";
import { Container, Typography } from "@mui/material";
import Header from "app/components/header";
import { blogMetadata } from "../page";
import path from "path";

export const dynamicParams = false;

export async function generateStaticParams() {
  const postsPath = path.join(process.cwd(), 'app', 'blog', 'posts');
  const entries = await readAllBlogPostFiles(postsPath);

  return entries.map((entry) => ({
    id: parseFileId(entry),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const postsPath = path.join(process.cwd(), 'app', 'blog', 'posts');
  const blogPost = await getBlogPostById(id, postsPath)

  if (!blogPost) return {}

  return {
    title: blogPost.title,
    description: blogPost.summary,
    openGraph: {
      title: blogPost.title,
      description: blogPost.summary,
      type: 'article',
      publishedTime: blogPost.date/**?.toISOString()**/,
    }
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postsPath = path.join(process.cwd(), 'app', 'blog', 'posts');

  const blogPost = await getBlogPostById(id, postsPath);

  if (!blogPost) return;

  const htmlContent = (await remark().use(remarkHtml).process(blogPost.content)).toString()

  return (
    <section>
      <Header title={blogMetadata.title} />
      <Container maxWidth='md'>
        <Typography variant="h2">{blogPost.title}</Typography>
        {/**<p>{blogPost.date.toString()}</p>**/}
        <Typography variant="subtitle1">{new Date(blogPost.date).toLocaleDateString()}</Typography>
        <PostContents contents={htmlContent}></PostContents>
      </Container>
    </section>
  )
}
