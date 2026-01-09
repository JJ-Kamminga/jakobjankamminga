'use client';

import { Grid, useMediaQuery } from '@mui/material';

import { NavLink } from './NavLink';

const navItems = {
  '/': {
    name: 'About',
  },
  '/blog': {
    name: 'Blog',
  },
  '/canon': {
    name: 'Canon',
  },
  '/music': {
    name: 'Music',
  },
  '/?target=home': {
    name: 'owl',
  },
};

export function Navbar() {
  const matchesMedium = useMediaQuery('(max-width:800px)');
  return (
    <nav id="nav" style={
      {
        width: matchesMedium ? '500px' : '650px',
        margin: 'auto',
        position: 'sticky',
        top: '0px',
        zIndex: '1',
        maxWidth: '100vw',
      }
    }>
      <Grid container spacing={0} sx={{
        transform: 'skew(20deg)',
      }}>
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Grid
              key={path}
              size={12 / Object.keys(navItems).length}
              sx={{
                maxHeight: '95px',
                minWidth: '95px',
                background: name === 'owl' ? '#ffcb18' : '#1B1C22',
                borderBottom: name === 'owl' ? `4px solid var(--main-darkgrey)` : `4px solid var(--main-yellow)`,
              }}
            >
              <NavLink linkPath={path} linkName={name} />
            </Grid>
          );
        })}
      </Grid>
    </nav>
  );
}
