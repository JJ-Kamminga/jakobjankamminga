'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    // fontFamily: 'var(--font-playfair-display)',
    fontFamily: [
      'EB Garamond Variable',
      '"Helvetica Neue"',
      'serif',
      'Arial',
    ].join(','),
  },
});

export default theme;