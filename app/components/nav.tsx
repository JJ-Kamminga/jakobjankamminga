import { Grid2 } from '@mui/material'
import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'deploy',
  },
}

export function Navbar() {
  return (
    <>
      <nav id="nav">
        <Grid2 container spacing={2}>
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Grid2 size={3}>
                <Link
                  key={path}
                  href={path}
                >
                  {name}
                </Link>
              </Grid2>
            )
          })}
        </Grid2>
      </nav >
    </>
  )
}
