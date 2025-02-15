export interface ProjectRepositoryProps {
  url: string;
  description: string;
  tags: string[];
}

export interface ProjectDocsProps {
  path: string;
  last_modified: Date;
}

export interface ProjectDetailProps {
  slug: string;
  title: string;
  repository: ProjectRepositoryProps;
  docs: ProjectDocsProps | null;
  is_highlighted: boolean;
}

export const projectList: ProjectDetailProps[] = [
  {
    slug: "FlightCoordinator",
    title: "FlightCoordinator",
    repository: {
      url: "https://github.com/FlightCoordinator/FlightCoordinator",
      description: "Automated flight manager app",
      tags: ["spring boot", "next.js", "python"],
    },
    docs: null,
    is_highlighted: true,
  },
  {
    slug: "WalletTuner",
    title: "WalletTuner",
    repository: {
      url: "https://github.com/caganseyrek/WalletTuner",
      description: "Flexible personal finance tracking app",
      tags: ["next.js", "express.js", "typescript"],
    },
    docs: null,
    is_highlighted: true,
  },
  {
    slug: "EasyRequester",
    title: "EasyRequester",
    repository: {
      url: "https://github.com/caganseyrek/EasyRequester",
      description: "TypeScript-based HTTP client wrapper",
      tags: ["typescript", "fetch-api"],
    },
    docs: {
      path: "/projects/EasyRequester",
      last_modified: new Date("Feb 15 2025"),
    },
    is_highlighted: false,
  },
  {
    slug: "express-ts-template",
    title: "Express-TS Template",
    repository: {
      url: "https://github.com/caganseyrek/express-ts-template",
      description: "A boilerplate for an Express app with TypeScript",
      tags: ["typescript", "expressjs", "oop"],
    },
    docs: null,
    is_highlighted: false,
  },
];
