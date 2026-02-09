import { Typography } from "@mui/material";
import { PortfolioGridItem } from "./PortfolioGridItem";
import { PortfolioSection } from "./PortfolioSection";

type PortfolioItem = {
  title: string;
  subtitle?: string;
  description?: string;
  logoSrc?: string;
  startYear?: number;
  endYear?: number;
  link: string;
};

const professionalItems: PortfolioItem[] = [
  {
    title: "QA Company",
    description: "I work for QA Company, a full service testing consultancy company based in The Netherlands.",
    startYear: 2025,
    link: "https://qacompany.nl/",
  },
  {
    title: "Previous",
    description: "For my previous professional projects, please see my LinkedIn profile.",
    link: "https://www.linkedin.com/in/jakobjankamminga/",
  },

];

const projectItems: PortfolioItem[] = [
  {
    title: "MtG Commander Cube Toolkit",
    description: "Various tools to help fellow extreme niche hobbyists",
    link: "https://github.com/JJ-Kamminga/commander-cube-analysis",
  },
  {
    title: "tada",
    description: "CLI todo.txt manager with vim-like keybinds",
    link: "https://github.com/JJ-Kamminga/tada",
  },
];

const writingItems: PortfolioItem[] = [
  {
    title: "QA Company Blog",
    description: "I regularly write blog posts on testing, mostly related to automation, observability and AI.",
    link: "https://qacompany.nl/blog/",
    startYear: 2025,
  },
  {
    title: "De Groene Amsterdammer",
    description: "I had the privilege to do an internship at this institution of Dutch journalism in 2014, and published a number of smaller articles on their website during this time.",
    link: "https://www.groene.nl/",
    startYear: 2014,
    endYear: 2014,
  },
  {
    title: "Zware Metalen",
    description: "Between 2008 and 2013, I published over 500 reviews, interviews and concert reviews on this metal, rock & punk webzine.",
    link: "https://zwaremetalen.com/",
    startYear: 2008,
    endYear: 2013,
  },
  {
    title: "Academia",
    description: "The online edition of my Bachelor and Master's theses.",
    link: "https://uu.academia.edu/JakobJanKamminga",
    startYear: 2010,
    endYear: 2015,
  },
];

const sortByStartYear = (items: PortfolioItem[]) =>
  [...items].sort((a, b) => (b.startYear ?? 0) - (a.startYear ?? 0));

export const Portfolio = () => {
  return (
    <section>
      <Typography gutterBottom variant="h2">
        Portfolio
      </Typography>
      <PortfolioSection title="Professional">
        {sortByStartYear(professionalItems).map((item) => (
          <PortfolioGridItem key={item.title} {...item} />
        ))}
      </PortfolioSection>
      <PortfolioSection title="Projects">
        {sortByStartYear(projectItems).map((item) => (
          <PortfolioGridItem key={item.title} {...item} />
        ))}
      </PortfolioSection>
      <PortfolioSection
        title="Writing"
        description="Besides on this website, I've written a lot on other platforms over the years."
      >
        {sortByStartYear(writingItems).map((item) => (
          <PortfolioGridItem key={item.title} {...item} />
        ))}
      </PortfolioSection>
    </section>
  );
};
