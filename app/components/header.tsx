'use client';

import { Container, Divider, Typography, useMediaQuery } from '@mui/material';

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
      </Container>
    </ >
  );
}
