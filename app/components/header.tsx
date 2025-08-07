'use client';

import { Container, Divider, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

type HeaderProps = {
  title: string,
  subtitle?: string,
}

export default function Header({ title, subtitle }: HeaderProps) {
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
          {subtitle && <Container maxWidth='sm'>
            <Typography
              variant='subtitle1'
              sx={{
                paddingBottom: '50px',
                paddingTop: '25px',
                fontSize: matches ? '1.2rem' : '1.6rem',
                textAlign: 'center',
              }}
            >
              {subtitle}
            </Typography>
          </Container>
          }
          <Divider variant='middle' sx={{
            background: 'var(--main-teal)',
            borderWidth: '2px',
            marginLeft: '250px',
            marginRight: '130px',
          }} />
        </Typography>
        <span style={{ display: 'block', marginLeft: 'auto', width: '200px' }}>
          <Image
            src="/assets/icons/watermelon.png"
            alt="watermelon icon"
            height={30}
            width={30}
            style={{ marginRight: '2px' }}
          />
          <Image
            src="/assets/icons/rainbow.png"
            alt="rainbow icon"
            height={30}
            width={30}
            style={{ marginRight: '2px' }}
          />
          <Image
            src="/assets/icons/transflag.png"
            alt="transgender flag icon"
            height={30}
            width={30}
            style={{ marginRight: '2px' }}
          />
          <Image
            src="/assets/icons/blm.png"
            alt="black lives matter icon"
            height={30}
            width={30}
            style={{ marginRight: '2px' }}
          />
          <Image
            src="/assets/icons/peace.png"
            alt="peace dove icon"
            height={30}
            width={30}
            style={{ marginRight: '2px' }}
          />
        </span>
      </Container >
    </ >
  );
}
