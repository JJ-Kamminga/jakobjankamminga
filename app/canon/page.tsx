import { Container } from "@mui/material";
import Header from "app/components/header";
import { canonMetadata } from "app/metadata";
import Link from "next/link";

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
        <ul>
          <li><Link href="/">← Back to home</Link></li>
          <li><Link href="/canon/music" style={{ marginLeft: '20px' }}>Music</Link></li>
          <li><Link href="/canon/film" style={{ marginLeft: '20px' }}>Film</Link></li>
          <li><Link href="/canon/books" style={{ marginLeft: '20px' }}>Books</Link></li>
        </ul>
      </Container>
    </section>
  );
}
