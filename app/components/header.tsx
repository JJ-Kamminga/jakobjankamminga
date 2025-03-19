'use client'

import { Container, Divider, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
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
            textAlign: 'left',
          }}
        >
          Jakob Jan Kamminga
        </Typography>
      </Container>
    </section>
  )
}
