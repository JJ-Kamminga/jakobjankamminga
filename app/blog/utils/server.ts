// 'use server'

// import fs from 'fs'
// import path from 'path'
// import { BlogPostMetadata } from './blog.types'

// function parseFrontmatter(fileContent: string) {
//   const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
//   const match = frontmatterRegex.exec(fileContent)
//   const frontMatterBlock = match![1]
//   const content = fileContent.replace(frontmatterRegex, '').trim()
//   const frontMatterLines = frontMatterBlock.trim().split('\n')
//   const metadata: Partial<BlogPostMetadata> = {}

//   frontMatterLines.forEach((line) => {
//     const [key, ...valueArr] = line.split(': ')
//     let value = valueArr.join(': ').trim()
//     value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
//     metadata[key.trim() as keyof BlogPostMetadata] = value
//   })

//   return { metadata: metadata as BlogPostMetadata, content }
// }

// function getMDXFiles(dir) {
//   return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
// }

// function readMDXFile(filePath) {
//   const rawContent = fs.readFileSync(filePath, 'utf-8')
//   return parseFrontmatter(rawContent)
// }

// function getMDXData(dir) {
//   const mdxFiles = getMDXFiles(dir)
//   return mdxFiles.map((file) => {
//     const { metadata, content } = readMDXFile(path.join(dir, file))
//     const slug = path.basename(file, path.extname(file))

//     return {
//       metadata,
//       slug,
//       content,
//     }
//   })
// }

// export async function getBlogPosts() {
//   return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))
// }
