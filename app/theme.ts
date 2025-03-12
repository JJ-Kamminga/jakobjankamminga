'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    // fontFamily: 'var(--font-playfair-display)',
    fontFamily: [
      'EB Garamond Variable',
      '"Helvetica Neue"',
      'serif',
      'Roboto',
      'Arial',
    ].join(','),
  },
});

export default theme;