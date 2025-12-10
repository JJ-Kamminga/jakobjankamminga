import Link from "next/link";
import { Container, List, ListItem, Typography } from "@mui/material";
import Header from "app/components/Header";
import { getAllBlogPosts, sortBlogPosts } from "app/blog.utils";
import path from "path";
import { formatDate } from "app/blog/utils/client";
import { MusicPostIcon } from "./components/posticon";
import { musicMetadata } from "app/metadata";

export async function generateMetadata() {
  return musicMetadata;
}

export default async function MusicPage() {
  const postsPath = path.join(process.cwd(), 'app', 'music', 'posts');

  const blogPosts = await getAllBlogPosts(postsPath);
  blogPosts.sort(sortBlogPosts).reverse();

  return (
    <section>
      <Header title={musicMetadata.title} subtitle={musicMetadata.description} />
      <Container sx={{
        borderTop: '4px double var(--main-darkgrey)',
        paddingTop: '20px'
      }} maxWidth='md'>
        <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
          <List>
            {blogPosts.map((blogPost) => (
              <ListItem key={blogPost.id}>
                <MusicPostIcon type={blogPost.type} />
                <Link href={`/music/${blogPost.id}`} style={{ marginLeft: '5px' }}>
                  {blogPost.title}
                </Link>
                <span style={{ marginLeft: 'auto' }}>{formatDate(blogPost.date)}</span>
              </ListItem>
            ))}
          </List>
        </Typography>
      </Container>

    </section>
  );
}
