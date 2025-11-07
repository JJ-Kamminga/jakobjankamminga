import { getAllBlogPosts, sortBlogPosts } from "../blog.utils";
import { Container, List, ListItem, Typography } from "@mui/material";
import Header from "app/components/header";
import path from "path";
import { NotesOutlined } from "@mui/icons-material";
import { formatDate } from "./utils/client";
import { blogMetadata } from "app/metadata";
import { Link } from "app/components/link";

export async function generateMetadata() {
  return blogMetadata;
}

export default async function BlogPage() {
  const postsPath = path.join(process.cwd(), 'app', 'blog', 'posts');
  const blogPosts = await getAllBlogPosts(postsPath);
  blogPosts.sort(sortBlogPosts).reverse();

  return (
    <section>
      <Header title={blogMetadata.title} subtitle={blogMetadata.description} />
      <Container maxWidth='md'>
        <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
          <List>
            {blogPosts.map((blogPost) => (
              <ListItem key={blogPost.id}>
                <NotesOutlined sx={{ marginRight: '15px', color: 'var(--main-dimgrey)' }} />
                <Link href={`/blog/${blogPost.id}`}>
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
