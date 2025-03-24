import { remark } from "remark";
import { getBlogPostById, parseFileId, readAllBlogPostFiles } from "../utils/blog.utils";
import remarkHtml from "remark-html";
import { PostContents } from "app/components/postcontents";

export const dynamicParams = false;

export async function generateStaticParams() {
  const entries = await readAllBlogPostFiles()

  return entries.map((entry) => ({
    id: parseFileId(entry),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const blogPost = await getBlogPostById(id)

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
  const blogPost = await getBlogPostById(id);

  if (!blogPost) return;

  const htmlContent = (await remark().use(remarkHtml).process(blogPost.content)).toString()

  return (
    <>
      <h3>{blogPost.title}</h3>
      {/**<p>{blogPost.date.toString()}</p>**/}
      <p>{new Date(blogPost.date).toLocaleDateString()}</p>
      <PostContents contents={htmlContent}></PostContents>
    </>
  )
}
