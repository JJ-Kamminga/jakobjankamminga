import { Box, Grid2, Link as MuiLink, Typography } from '@mui/material'
import NextLink from 'next/link'
import Image from 'next/image'

const navItems = {
  '/': {
    name: 'About',
  },
  '/blog': {
    name: 'Blog',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'Thoughts',
  },
  '/contact': {
    name: 'Music',
  },
  '/home': {
    name: 'owl',
  },
}

export function Navbar() {
  return (
    <nav id="nav" style={
      {
        maxWidth: '750px',
        margin: 'auto',
        position: 'sticky',
        top: '0px',
      }
    }>
      <Grid2 container spacing={0} sx={{
        transform: 'skew(20deg)',
      }}>
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Grid2
              key={path}
              size={12 / Object.keys(navItems).length}
              sx={{
                maxHeight: '95px',
                background: path === '/home' ? '#ffcb18' : '#1B1C22',
                borderBottom: path === '/home' ? `4px solid var(--main-darkgrey)` : `4px solid var(--main-yellow)`,
              }}
            >
                <Typography component='span' sx={{
                  margin: 'auto',
                  padding: '12px',
                  textAlign: 'center',
                }}>
                    <MuiLink
                      component={NextLink}
                      href={path}
                      sx={{
                        display: 'block',
                        transform: 'skew(-20deg)',
                        fontFamily: 'inherit',
                        fontSize: '1.6rem',
                        color: 'white',
                        fontWeight: '400',
                        textDecoration: 'none',
                        '&:hover': {
                          color: '#ffcb18',
                        },
                      }}
                    >
                      {path === '/home' ? (
                        <Image
                          src="/assets/icons/owl.svg"
                          alt="owl icon"
                          height={75}
                          width={75}
                        />
                      ) : (<>{name}</>)
                    }
                    </MuiLink>
                </Typography>
            </Grid2>
          )
        })}
      </Grid2>
    </nav>
  )
}
