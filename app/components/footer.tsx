'use client';
import { Container, Drawer, IconButton, Typography } from "@mui/material"
import { useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import Link from "next/link";

export default function Footer() {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (shouldDrawerOpen: boolean) => () => {
    setDrawerOpen(shouldDrawerOpen);
  };

  return (
    <footer>
      <Container sx={{ textAlign: 'center', marginTop: '100px', marginBottom: '20px' }}>
        <IconButton onClick={toggleDrawer(true)} aria-label='toggle footer'>
          <InfoIcon fontSize='large' />
        </IconButton>
      </Container>
      <Drawer
        anchor='bottom'
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Container sx={{ padding: '25px' }}>
          <Typography component='h2'><b>Copyright</b></Typography>
          <Typography>
            <p>Owl icon by Freepik on <Link target="_blank" href='https://www.flaticon.com/'>Flatikon</Link>.</p>
            <p>
              Source code © {new Date().getFullYear()} under MIT License.
            </p>
            <p>
              All content © Jakob Jan Kamminga.
            </p>
          </Typography>
          <Typography component='h2'><b>Links</b></Typography>
          <Typography>
            <p>This site was made with <Link target="_blank" href='https://nextjs.org/'>Next.js</Link> and <Link href='https://mui.com/material-ui/'>Material UI</Link>.</p>
            <p>You can find the source code on <Link target="_blank" href='https://github.com/JJ-Kamminga/jakobjankamminga'>GitHub</Link>.</p>
          </Typography>
        </Container>
      </Drawer >
    </footer>
  )
}
