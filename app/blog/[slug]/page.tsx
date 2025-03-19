import { notFound } from 'next/navigation'
// import { CustomMDX } from 'app/components/mdx'
import { baseUrl } from 'app/sitemap'
import { getBlogPosts } from '../utils/server'
// import { formatDate } from '../utils/client'

export async function generateStaticParams() {
  const posts = await getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const posts = await getBlogPosts();
  const post = posts.find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({ params }) {
  const posts = await getBlogPosts();
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
      /**tf is this doing */
      // suppressHydrationWarning
      // dangerouslySetInnerHTML={{
      //   __html: JSON.stringify({
      //     '@context': 'https://schema.org',
      //     '@type': 'BlogPosting',
      //     headline: post.metadata.title,
      //     datePublished: post.metadata.publishedAt,
      //     dateModified: post.metadata.publishedAt,
      //     description: post.metadata.summary,
      //     image: post.metadata.image
      //       ? `${baseUrl}${post.metadata.image}`
      //       : `/og?title=${encodeURIComponent(post.metadata.title)}`,
      //     url: `${baseUrl}/blog/${post.slug}`,
      //     author: {
      //       '@type': 'Person',
      //       name: 'My Portfolio',
      //     },
      //   }),
      // }}
      />
      {/* <h1>
        {post.metadata.title}
      </h1>
      <div>
        <p>
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article>
        <CustomMDX source={post.content} />
      </article> */}
    </section>
  )
}
