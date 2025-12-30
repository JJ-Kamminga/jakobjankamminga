export type BlogPostMetadata = {
  id: string,
  title: string
  date: string
  summary: string
  content: string
  image?: string
  imagecredit?: string
  type?: 'list' | 'playlist'
}
