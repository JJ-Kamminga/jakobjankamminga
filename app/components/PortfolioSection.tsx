"use client";

import { Box, Grid, styled, Typography } from "@mui/material";

type PortfolioSectionProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
};

const SectionWrapper = styled(Box)`
  border-left: 4px solid var(--main-yellow);
  padding-left: 1.5rem;
  margin-bottom: 2.5rem;
`;

const SectionDescription = styled(Typography)`
  font-family: Georgia, serif;
  font-style: italic;
  color: var(--main-dimgrey);
  margin-bottom: 1.25rem;
`;

export const PortfolioSection = ({ children, title, description }: PortfolioSectionProps) => {
  return (
    <SectionWrapper>
      <Typography gutterBottom variant="h3">
        {title}
      </Typography>
      {description && (
        <SectionDescription>{description}</SectionDescription>
      )}
      <Grid container spacing={2}>
        {children}
      </Grid>
    </SectionWrapper>
  );
};
