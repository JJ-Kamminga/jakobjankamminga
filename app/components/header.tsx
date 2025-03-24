'use client'

import { Container, Divider, Typography, useMediaQuery } from '@mui/material'

export default function Header({ title }: { title: String }) {
  const matches = useMediaQuery('(max-width:500px)');

  return (
    <>
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
          {title}
          <Divider variant='middle' sx={{
            background: 'var(--main-teal)',
            borderWidth: '2px',
            marginLeft: '250px',
            marginRight: '130px',
          }} />
        </Typography>
      </Container>
    </ >
  )
}
