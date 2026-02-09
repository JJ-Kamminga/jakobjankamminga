import { Typography } from "@mui/material";
import { PortfolioGridItem } from "./PortfolioGridItem";
import { PortfolioSection } from "./PortfolioSection";

export const Portfolio = () => {
  return (
    <section>
      <Typography gutterBottom variant="h2">
        Portfolio
      </Typography>
      <PortfolioSection title="Professional">
        <PortfolioGridItem title="QA Company" imgSrc="/" />
      </PortfolioSection>
      <PortfolioSection title="Projects">
        <PortfolioGridItem title="tada" imgSrc="/" />
        <PortfolioGridItem title="MtG Commander Cube Toolkit" imgSrc="/" />
      </PortfolioSection>
      <PortfolioSection
        title="Writing"
        description="Besides on this website, I've written a lot on other platforms over the years."
      >
        <PortfolioGridItem title="QA Company Blog" imgSrc="/" />
        <PortfolioGridItem title="De Groene Amsterdammer" imgSrc="/" />
        <PortfolioGridItem title="Zware Metalen" imgSrc="/" />
        <PortfolioGridItem title="Academia" imgSrc="/" />
      </PortfolioSection>
    </section>
  );
};
