import { formatDate } from 'app/blog/utils/client'
import { getBlogPosts } from 'app/blog/utils/server'
import Link from 'next/link'

export async function BlogPosts() {
  const allBlogs = await getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
          >
            <div>
              <p>
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p>
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
