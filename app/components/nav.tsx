import { Box, Grid2, Link as MuiLink, Typography } from '@mui/material'
import NextLink from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
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
}

export function Navbar() {
  return (
    <nav id="nav" style={{ position: 'sticky', top: '0' }}>
      <Grid2 container spacing={0}>
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Grid2 key={path} size={12 / Object.keys(navItems).length}>
              <Box sx={{
                background: 'white',
                borderBottom: `8px solid #565254`
              }}>
                <Typography component='span' sx={{ margin: 'auto', padding: '12px' }}>
                  <MuiLink
                    component={NextLink}
                    href={path}
                    underline='always'
                    color='textPrimary'
                    sx={{
                      fontFamily: 'inherit',
                      fontSize: '1.5rem'
                    }}
                  >
                    {name}
                  </MuiLink>
                </Typography>
              </Box>
            </Grid2>
          )
        })}
      </Grid2>
    </nav >
  )
}
