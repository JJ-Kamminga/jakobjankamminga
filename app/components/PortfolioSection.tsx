import { Grid, Typography } from "@mui/material";

type PortfolioSectionProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
};

export const PortfolioSection = ({ children, title, description }: PortfolioSectionProps) => {
  return (
    <>
      <Typography gutterBottom variant="h3">
        {title}
      </Typography>
      {description && <>{description}</>}
      <Typography gutterBottom variant="body1">
        <Grid container spacing={2}>
          {children}
        </Grid>
      </Typography>
    </>
  );
};
