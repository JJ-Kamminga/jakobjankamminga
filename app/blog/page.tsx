import { getAllBlogPosts, sortBlogPosts } from "../blog.utils";
import { Box, Container, Grid, Typography } from "@mui/material";
import Header from "app/components/Header";
import path from "path";
import { formatDate } from "./utils/client";
import { blogMetadata } from "app/metadata";
import { ReactNode } from "react";
import Image from "next/image";
import { Link } from "app/components/Link";

export async function generateMetadata() {
  return blogMetadata;
}

const Post = ({ children }: { children: ReactNode }) => {
  return (
    <article style={{
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
            <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image
                  src={`/thumbnail-600x400/${blogPost.image}`}
                  alt={`Image for blogpost. ${blogPost.imagecredit && `Photo by ${blogPost.imagecredit}`}`}
                  width={300}
                  height={200}
                />
                {blogPost.imagecredit && (
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 6,
                            left: 0,
                            right: 0,
                            padding: '0px 6px',
                            background: 'black',
                            opacity: '50%'
                        }}
                    >
                        <Typography variant="caption" sx={{ color: 'white', fontSize: '0.7rem' }}>
                            Photo by {blogPost.imagecredit}.
                        </Typography>
                    </Box>
                )}
                </Box>
                <Typography variant="h3" component="h3" sx={{ fontSize: '1.5rem', fontWeight: 'bold', }}>
                  <Link href={`/blog/${blogPost.id}`}>
                    {blogPost.title}
                  </Link>
                </Typography>
                <Typography variant="body1" component="p" sx={{ marginTop: '10px', fontSize: '1.1rem', color: 'var(--main-dimgrey)' }}>
                  <span style={{ marginLeft: 'auto' }}>{formatDate(blogPost.date)}</span>
                </Typography>
              </Post>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
