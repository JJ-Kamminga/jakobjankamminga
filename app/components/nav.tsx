import { Box, Grid2 } from '@mui/material'
import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
    borderColor: '#FFCB18'
  },
  '/blog': {
    name: 'Blog',
    borderColor: '#544FBF'
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'Music',
    borderColor: '#F45B69'
  },
}

export function Navbar() {
  return (
    <>
      <nav id="nav">
        <Grid2 container spacing={2}>
          {Object.entries(navItems).map(([path, { name, borderColor }]) => {
            return (
              <Grid2 key={path} size={4}>
                <Box sx={{ borderLeft: `12px solid ${borderColor}`, borderBottom: `12px solid #565254` }}>
                  <Link href={path}>
                    {name}
                  </Link>
                </Box>
              </Grid2>
            )
          })}
        </Grid2>
      </nav >
    </>
  )
}
