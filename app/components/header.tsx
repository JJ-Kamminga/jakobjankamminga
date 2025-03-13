'use client'

import { Container, Divider, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import { Navbar } from './nav';

export default function Header() {
  const matches = useMediaQuery('(max-width:500px)');

  return (
    <section>
      <Container maxWidth='sm'>
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
        </Typography>
      </Container>
      <div style={{
        position: "absolute",
        background: "#ffcb18",
        height: "150px",
        width: "150px",
        top: "0px",
        clipPath: "polygon(0 0, 100% 100%, 100% 0)",
        right: "0px",
      }
      }>
        <Image
          src="/assets/icons/owl.svg"
          alt="owl icon"
          height={85.5}
          width={85.5}
          style={{
            position: "relative",
            right: "-65px",
            top: "5px"
          }}
        />

      </div>
      <Navbar />
    </section>
  )
}
