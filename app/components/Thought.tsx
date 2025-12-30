"use client";

import { Grid, Typography, useMediaQuery } from "@mui/material";
import { PropsWithChildren } from "react";

export const Thought = ({ children }: PropsWithChildren) => {
  const matches = useMediaQuery('(max-width:500px)');

  return (
    <Grid size={matches ? 12 : 6} sx={{
      margin: '25px',
      borderRight: '4px dashed var(--main-darkgrey)',
      borderTop: '4px dashed var(--main-darkgrey)',
      borderLeft: '4px solid var(--main-darkgrey)',
      borderBottom: '4px solid var(--main-darkgrey)',
      borderRadius: '25px',
      padding: '25px',
    }}>
      <Typography>
        {children}
      </Typography>
    </Grid>
  );
};