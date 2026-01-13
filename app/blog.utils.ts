import fs, { PathLike } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPostMetadata } from './blog.types';
import { cache } from 'react';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkImages from 'remark-images';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';
import type { Node } from 'unist';

export async function readAllBlogPostFiles(blogPostsFolder: PathLike) {
  const dirEntries = await fs.promises.readdir(blogPostsFolder, { recursive: true, withFileTypes: true });
  return dirEntries.filter(entry => entry.isFile());
}

export async function getAllBlogPosts(blogPostsFolder: PathLike) {
  const blogPostFiles = await readAllBlogPostFiles(blogPostsFolder);
  return Promise.all(blogPostFiles.map(mapFileToBlogPost));
}

export function sortBlogPosts(a: BlogPostMetadata, b: BlogPostMetadata) {
  if (a.date > b.date) return 1;
  return -1;
}

export const getBlogPostById = cache(fetchBlogPostById);

export async function fetchBlogPostById(id: string, blogPostsFolder: PathLike): Promise<BlogPostMetadata | undefined> {
  const allBlogPostFiles = await readAllBlogPostFiles(blogPostsFolder);
  const blogPostFile = allBlogPostFiles.find(entry => parseFileId(entry) === id);
  if (!blogPostFile) return undefined;
  return mapFileToBlogPost(blogPostFile);
}

async function mapFileToBlogPost(file: fs.Dirent): Promise<BlogPostMetadata> {
  const fileContents = await fs.promises.readFile(getFilePath(file), { encoding: 'utf8' });
  const matterData = matter(fileContents);

  return {
    id: parseFileId(file),
    title: matterData.data.title,
    date: matterData.data.date.toString(),
    summary: matterData.content.slice(0, 280),
    content: matterData.content,
    image: matterData.data.image,
    imagecredit: matterData.data.imagecredit,
    type: matterData.data.type
  };
}

function getFilePath(file: fs.Dirent): string {
  return path.join(file.path, file.name);
}

export function parseFileId(file: fs.Dirent): string {
  return file.name.replace(/\.md$/, ''); // remove the '.md' file extension
}

function remarkResponsiveImages() {
  return (tree: Node) => {
    visit(tree, 'image', (node: Record<string, unknown>) => {
      // Extract filename (remove leading slash if present)
      const filename = (node.url as string).replace(/^\//, '');
      const alt = (node.alt as string) || '';

      // Delete image-specific properties before converting to HTML
      delete node.url;
      delete node.alt;
      delete node.title;

      // Transform to HTML with srcset for responsive images
      node.type = 'html';
      node.value = `<img src="/blog-1200/${filename}" srcset="/blog-600/${filename} 600w, /blog-1200/${filename} 1200w, /blog-1600/${filename} 1600w" sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1600px" alt="${alt}" loading="lazy" />`;
    });
  };
}

export async function processBlogPostContent(content: string) {
  return (
    await remark()
      .use(remarkGfm)
      .use(remarkImages)
      .use(remarkResponsiveImages)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeStringify)
      .process(content)
  ).toString();
}
