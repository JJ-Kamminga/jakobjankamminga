export type BlogPostMetadata = {
  id: string,
  title: string
  date: string
  summary: string
  content: string
  image?: string
  type?: 'list' | 'playlist'
}