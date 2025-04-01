"use client";

import { Grid, Typography, useMediaQuery } from "@mui/material";
import { PropsWithChildren } from "react";

export const Thought = ({ children }: PropsWithChildren) => {
  const matches = useMediaQuery('(max-width:500px)');

  return (
    <Grid size={matches ? 12 : 6} sx={{
      marginTop: 'auto',
      marginBottom: 'auto',
      borderRight: '4px dashed var(--main-teal)',
      borderTop: '4px dashed var(--main-teal)',
      borderLeft: '4px solid var(--main-teal)',
      borderBottom: '4px solid var(--main-teal)',
      boxShadow: '-8px 8px 0px 0px var(--main-darkgrey)',
      borderRadius: '25px',
      padding: '25px',
    }}>
      <Typography>
        {children}
      </Typography>
    </Grid>
  )
}