"use client";

import { Typography } from "@mui/material";

export const PostContents = ({ contents }: { contents: String }) => {
  return (
    <Typography variant='body1' sx={{ fontSize: '1.2rem' }} dangerouslySetInnerHTML={{ __html: contents }}>
    </Typography>
  )
}