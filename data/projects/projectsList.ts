export interface ProjectDetailProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  links: {
    repository: string;
    article_page: string | null;
  };
  is_highlighted: boolean;
}

export const projectList: ProjectDetailProps[] = [
  {
    slug: "flightcoordinator",
    title: "FlightCoordinator",
    description: "Automated flight manager app",
    tags: ["spring boot", "next.js", "python"],
    links: {
      repository: "https://github.com/FlightCoordinator/FlightCoordinator",
      article_page: null,
    },
    is_highlighted: true,
  },
  {
    slug: "wallettuner",
    title: "WalletTuner",
    description: "Flexible personal finance tracking app",
    tags: ["next.js", "express.js", "typescript"],
    links: {
      repository: "https://github.com/caganseyrek/WalletTuner",
      article_page: null,
    },
    is_highlighted: true,
  },
  {
    slug: "express-ts-template",
    title: "Express-TS Template",
    description: "A boilerplate for Express app with TypeScript",
    tags: ["typescript", "expressjs", "oop"],
    links: {
      repository: "https://github.com/caganseyrek/express-ts-template",
      article_page: null,
    },
    is_highlighted: false,
  },
  {
    slug: "caganseyrek.com",
    title: "caganseyrek.com",
    description: "Source of my personal website",
    tags: ["next.js", "tailwind", "typescript"],
    links: {
      repository: "https://github.com/caganseyrek/caganseyrek.com",
      article_page: null,
    },
    is_highlighted: false,
  },
];
