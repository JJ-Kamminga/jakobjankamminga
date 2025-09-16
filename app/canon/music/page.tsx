import { Container, Typography } from "@mui/material";
import Header from "app/components/header";
import { canonMusicMetadata } from "app/metadata";

export async function generateMetadata() {
  return canonMusicMetadata;
}

export default async function CanonPage() {
  return (
    <section>
      <Header title={canonMusicMetadata.title} subtitle={canonMusicMetadata.description} />
      <Container sx={{
        borderTop: '4px double var(--main-darkgrey)',
        paddingTop: '20px'
      }} maxWidth='md'>
        <Typography variant="body1">Work in progress, please check back later.</Typography>
      </Container>
    </section>
  );
}
