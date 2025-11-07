import { Container, List, ListItem, Typography } from "@mui/material";
import Header from "app/components/header";
import { Link } from "app/components/link";
import { canonMetadata } from "app/metadata";

export async function generateMetadata() {
  return canonMetadata;
}

export default async function CanonPage() {
  return (
    <section>
      <Header title={canonMetadata.title} subtitle={canonMetadata.description} />
      <Container sx={{
        borderTop: '4px double var(--main-darkgrey)',
        paddingTop: '20px'
      }} maxWidth='lg'>
        <Typography variant="body1">
          <Link href="/">Back to home</Link>
          <List>
            <ListItem></ListItem>
            <ListItem><Link href="/canon/music" style={{ marginLeft: '20px' }}>Music</Link></ListItem>
            <ListItem><Link href="/canon/film" style={{ marginLeft: '20px' }}>Film</Link></ListItem>
            <ListItem><Link href="/canon/books" style={{ marginLeft: '20px' }}>Books</Link></ListItem>
          </List>
        </Typography>
      </Container>
    </section>
  );
}
