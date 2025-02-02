export interface ProjectDetailsProps {
  slug: string;
  title: string;
  preview_text: string;
  tags: string[];
  links: {
    repository: string;
    package_page: string | null;
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
      package_page: null,
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
      package_page: null,
      article_page_path: null,
    },
    is_highlighted: true,
  },
  {
    slug: "caganseyrek.com",
    title: "caganseyrek.com",
    preview_text: "Source of my personal website",
    tags: ["next.js", "tailwind", "typescript"],
    links: {
      repository: "https://github.com/caganseyrek/caganseyrek.com",
      package_page: null,
      article_page_path: null,
    },
    is_highlighted: false,
  },
  {
    slug: "easyrequester",
    title: "EasyRequester",
    preview_text: "A custom and flexible HTTP requester",
    tags: ["typescript", "fetch-api", "npm"],
    links: {
      repository: "https://github.com/caganseyrek/EasyRequester",
      package_page: "https://www.npmjs.com/package/easy-requester",
      article_page_path: null,
    },
    is_highlighted: false,
  },
];
