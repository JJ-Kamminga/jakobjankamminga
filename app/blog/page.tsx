import Link from "next/link";
import { getAllBlogPosts, sortBlogPosts } from "../blog.utils";
import { Container, Grid, Typography } from "@mui/material";
import Header from "app/components/Header";
import path from "path";
import { formatDate } from "./utils/client";
import { blogMetadata } from "app/metadata";
import { ReactNode } from "react";
import Image from "next/image";

export async function generateMetadata() {
  return blogMetadata;
}

export const Post = ({ children }: { children: ReactNode }) => {
  return (
    <article style={{
      height: '600px',
      width: '275px',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '15px',
    }}>
      {children}
    </article>
  );
};

export default async function BlogPage() {
  const postsPath = path.join(process.cwd(), 'app', 'blog', 'posts');
  const blogPosts = await getAllBlogPosts(postsPath);

  blogPosts.sort(sortBlogPosts).reverse();

  return (
    <section>
      <Header title={blogMetadata.title} subtitle={blogMetadata.description} />
      <Container maxWidth='md'>
        <Grid container spacing={2} size={12}>
          {blogPosts.map((blogPost) => (
            <Grid size={{ xs: 10, md: 6, lg: 4 }} key={blogPost.id}>
              <Post>
                <Image
                  src={"/blog/test.jpg"}
                  alt={'TODO'}
                  width={273}
                  height={400}
                />
                {/** <Typography variant="h3" component="h3" sx={{ fontSize: '1.5rem', fontWeight: 'bold', }}>**/}
                <Link href={`/blog/${blogPost.id}`}>
                  {blogPost.title}
                </Link>
                {/**</Typography>**/}
                <Typography variant="body1" component="p" sx={{ marginTop: '10px', fontSize: '1.1rem', color: 'var(--main-dimgrey)' }}>
                  <span style={{ marginLeft: 'auto' }}>{formatDate(blogPost.date)}</span>
                </Typography>
              </Post>
            </Grid>
          ))}
          {/* </Typography> */}
        </Grid>
      </Container>
    </section >
  );
}
