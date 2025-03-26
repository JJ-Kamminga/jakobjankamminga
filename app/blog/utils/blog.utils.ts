import fs, { PathLike } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPostMetadata } from './blog.types'
import { cache } from 'react'

export async function readAllBlogPostFiles(blogPostsFolder: PathLike) {
  const dirEntries = await fs.promises.readdir(blogPostsFolder, { recursive: true, withFileTypes: true })
  return dirEntries.filter(entry => entry.isFile())
}

export async function getAllBlogPosts(blogPostsFolder: PathLike) {
  const blogPostFiles = await readAllBlogPostFiles(blogPostsFolder)
  return Promise.all(blogPostFiles.map(mapFileToBlogPost))
}

export function sortBlogPosts(a: BlogPostMetadata, b: BlogPostMetadata) {
  if (a.date > b.date) return 1
  return -1
}

export const getBlogPostById = cache(fetchBlogPostById)

export async function fetchBlogPostById(id: string, blogPostsFolder: PathLike): Promise<BlogPostMetadata | undefined> {
  const allBlogPostFiles = await readAllBlogPostFiles(blogPostsFolder)
  const blogPostFile = allBlogPostFiles.find(entry => parseFileId(entry) === id)
  if (!blogPostFile) return undefined
  return mapFileToBlogPost(blogPostFile)
}

async function mapFileToBlogPost(file: fs.Dirent): Promise<BlogPostMetadata> {
  const fileContents = await fs.promises.readFile(getFilePath(file), { encoding: 'utf8' })
  const matterData = matter(fileContents)

  return {
    id: parseFileId(file),
    title: matterData.data.title,
    date: matterData.data.date/**.toISOstring(),**/,
    summary: matterData.content.slice(0, 280),
    content: matterData.content,
  }
}

function getFilePath(file: fs.Dirent): string {
  return path.join(file.path, file.name)
}

export function parseFileId(file: fs.Dirent): string {
  return file.name.replace(/\.md$/, '') // remove the '.md' file extension
}
