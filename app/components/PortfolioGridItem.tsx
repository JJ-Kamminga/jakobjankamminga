import { Card, CardContent, Grid, Typography } from "@mui/material";

type PortfolioItemProps = {
  title: string;
  imgSrc: string;
};

export const PortfolioGridItem: React.FC<PortfolioItemProps> = ({ ...props }) => {
  const { title, imgSrc } = props;

  return (
    <Grid size={{ md: 6, xs: 10 }}>
      <Card variant="elevation">
        <CardContent>
          <Typography>{title}</Typography>
          Test description
        </CardContent>
      </Card>
    </Grid>
  );
};
