"use client";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Grid, styled, Typography } from "@mui/material";

type PortfolioItemProps = {
  title: string;
  subtitle?: string;
  description?: string;
  logoSrc?: string;
  startYear?: number;
  endYear?: number;
  link: string;
};

const Card = styled(Box)`
  background-color: var(--main-lightgrey);
  border-radius: 2px;
  border-left: 2px solid var(--main-teal);
  padding: 1rem;
`;

const CardTitle = styled(Typography)`
  font-weight: 600;
  color: var(--main-darkgrey);
`;

const CardDescription = styled(Typography)`
  color: var(--main-dimgrey);
  font-size: 0.9rem;
`;

const CardSubtitle = styled(Typography)`
  color: var(--main-dimgrey);
  font-size: 0.85rem;
  margin-top: -0.25rem;
`;

const CardLink = styled("a")`
  color: var(--main-teal);
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.85rem;
  margin-top: 0.5rem;

  &:hover {
    color: var(--main-darkblue);
  }
`;

const CardYears = styled(Typography)`
  color: var(--main-dimgrey);
  font-size: 0.8rem;
  font-style: italic;
`;

const formatYears = (startYear?: number, endYear?: number): string | null => {
  if (!startYear) return null;
  if (!endYear) return `${startYear} - present`;
  if (startYear === endYear) return `${startYear}`;
  return `${startYear} - ${endYear}`;
};

export const PortfolioGridItem: React.FC<PortfolioItemProps> = ({
  title,
  subtitle,
  description,
  logoSrc,
  startYear,
  endYear,
  link,
}) => {
  const years = formatYears(startYear, endYear);

  return (
    <Grid size={{ md: 6, xs: 12 }}>
      <Card>
        {logoSrc && (
          <Box
            component="img"
            src={logoSrc}
            alt={`${title} logo`}
            sx={{ maxHeight: 40, marginBottom: 1 }}
          />
        )}
        <CardTitle>{title}</CardTitle>
        {years && <CardYears>{years}</CardYears>}
        {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
        {description && <CardDescription>{description}</CardDescription>}
        <CardLink href={link} target="_blank" rel="noopener noreferrer">
          Link <OpenInNewIcon sx={{ fontSize: "0.9rem" }} />
        </CardLink>
      </Card>
    </Grid>
  );
};
