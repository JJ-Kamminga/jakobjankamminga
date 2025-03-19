'use client'

import { Container, Divider, Typography, useMediaQuery } from '@mui/material'
import { Navbar } from './nav';

export default function Header() {
  const matches = useMediaQuery('(max-width:500px)');

  return (
    <section>
      <Navbar />
      <Container maxWidth='lg'>
        <Typography
          variant='h1'
          sx={{
            paddingBottom: '50px',
            paddingTop: '25px',
            fontSize: matches ? '3rem' : '6rem',
            textAlign: 'center',
          }}
        >
          Jakob Jan Kamminga
          <Divider variant='middle' sx={{
            background: 'var(--main-teal)',
            borderWidth: '2px',
            marginLeft: '250px',
            marginRight: '130px',
          }} />
        </Typography>
      </Container>
    </section >
  )
}
