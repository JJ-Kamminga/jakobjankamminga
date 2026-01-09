import { Box, Container, Grid, Typography } from "@mui/material";
import Header from "app/components/Header";
import { canonMetadata, canonMusicMetadata, canonFilmMetadata, canonBooksMetadata } from "app/metadata";
import { Link } from "app/components/Link";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TheatersIcon from '@mui/icons-material/Theaters';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export async function generateMetadata() {
  return canonMetadata;
}

const CanonCard = ({
  href,
  title,
  description,
  icon: Icon
}: {
  href: string;
  title: string;
  description: string;
  icon: React.ElementType;
}) => {
  return (
    <Box
      sx={{
        padding: '20px',
        borderRight: '4px dashed var(--main-lightgrey)',
        borderTop: '4px dashed var(--main-lightgrey)',
        borderLeft: '4px solid var(--main-lightgrey)',
        borderBottom: '4px solid var(--main-lightgrey)',
        borderRadius: '25px',
        height: '100%',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <Icon sx={{ fontSize: '2.5rem', marginRight: '10px', color: 'var(--main-darkblue)' }} />
        <Typography variant="h3" component="h3" sx={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
          <Link href={href}>{title}</Link>
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'var(--main-dimgrey)' }}>
        {description}
      </Typography>
    </Box>
  );
};

export default async function CanonPage() {
  const categories = [
    {
      href: "/canon/music",
      title: canonMusicMetadata.title,
      description: canonMusicMetadata.description,
      icon: MusicNoteIcon
    },
    {
      href: "/canon/film",
      title: canonFilmMetadata.title,
      description: canonFilmMetadata.description,
      icon: TheatersIcon
    },
    {
      href: "/canon/books",
      title: canonBooksMetadata.title,
      description: canonBooksMetadata.description,
      icon: MenuBookIcon
    }
  ];

  return (
    <section>
      <Header title={canonMetadata.title} subtitle={canonMetadata.description} />
      <Container sx={{
        borderTop: '4px double var(--main-darkgrey)',
        paddingTop: '20px'
      }} maxWidth='md'>
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={category.href}>
              <CanonCard {...category} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
