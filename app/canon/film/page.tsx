import { Container } from "@mui/material";
import FilmTimeline from "app/components/CanonFilmTimeline";
import Header from "app/components/Header";
import { canonFilmMetadata } from "app/metadata";

export async function generateMetadata() {
  return canonFilmMetadata;
}

export default async function CanonFilmPage() {
  return (
    <section>
      <Header title={canonFilmMetadata.title} subtitle={canonFilmMetadata.description} />
      <Container sx={{
        borderTop: '4px double var(--main-darkgrey)',
        paddingTop: '20px'
      }} maxWidth='md'>
        <FilmTimeline />
      </Container>
    </section>
  );
}
