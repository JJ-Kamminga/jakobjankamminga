import { Container } from "@mui/material";
import MediaTimeline from "app/components/canontimeline";
import Header from "app/components/header";
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
      }} maxWidth='md'>
        <MediaTimeline />
      </Container>
    </section>
  );
}
