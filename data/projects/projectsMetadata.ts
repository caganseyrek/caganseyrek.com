export interface ProjectDetailsProps {
  slug: string;
  title: string;
  preview_text: string;
  tags: string[];
  links: {
    repository: string;
    // package_page: string | null;
    article_page_path: string | null;
  };
  is_highlighted: boolean;
}

export const projectMetadata: ProjectDetailsProps[] = [
  {
    slug: "flightcoordinator",
    title: "FlightCoordinator",
    preview_text: "Automated flight manager app",
    tags: ["spring_boot", "next.js", "python"],
    links: {
      repository: "https://github.com/FlightCoordinator/FlightCoordinator",
      article_page_path: null,
    },
    is_highlighted: true,
  },
  {
    slug: "wallettuner",
    title: "WalletTuner",
    preview_text: "Flexible personal finance tracking app",
    tags: ["next.js", "express.js", "typescript"],
    links: {
      repository: "https://github.com/caganseyrek/WalletTuner",
      article_page_path: null,
    },
    is_highlighted: true,
  },
  {
    slug: "express-ts-template",
    title: "Express-TS Template",
    preview_text: "A boilerplate for Express app with TypeScript",
    tags: ["typescript", "expressjs", "layered-architecture"],
    links: {
      repository: "https://github.com/caganseyrek/express-ts-template",
      article_page_path: null,
    },
    is_highlighted: false,
  },
  {
    slug: "caganseyrek.com",
    title: "caganseyrek.com",
    preview_text: "Source of my personal website",
    tags: ["next.js", "tailwind", "typescript"],
    links: {
      repository: "https://github.com/caganseyrek/caganseyrek.com",
      article_page_path: null,
    },
    is_highlighted: false,
  },
];
