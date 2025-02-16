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
      tags: ["spring boot", "next.js", "fastapi"],
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
    slug: "ts-express-next",
    title: "TS-Express-Next",
    repository: {
      url: "https://github.com/caganseyrek/ts-express-next",
      description: "Monorepo with TypeScript, Express, and Next.js",
      tags: ["typescript", "express.js", "next.js"],
    },
    docs: {
      path: "/projects/ts-express-next",
      last_modified: new Date("Feb 16 2025"),
    },
    is_highlighted: false,
  },
];
