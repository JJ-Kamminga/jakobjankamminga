"use client";

import { Box, Grid, styled, Typography } from "@mui/material";

type PortfolioItemProps = {
  title: string;
  imgSrc: string;
  description?: string;
};

const Card = styled(Box)`
  background-color: var(--main-lightgrey);
  border-radius: 2px;
  border-left: 2px solid var(--main-teal);
  padding: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-left-color: var(--main-yellow);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const CardTitle = styled(Typography)`
  font-weight: 600;
  color: var(--main-darkgrey);
`;

const CardDescription = styled(Typography)`
  color: var(--main-dimgrey);
  font-size: 0.9rem;
`;

export const PortfolioGridItem: React.FC<PortfolioItemProps> = ({
  title,
  description,
}) => {
  return (
    <Grid size={{ md: 6, xs: 12 }}>
      <Card>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </Card>
    </Grid>
  );
};
