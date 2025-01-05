interface ProjectsHighlightsListProps {
  key: string | number;
  title: string;
  description: string;
  urls: {
    repository_path: string;
    project_page_path?: string;
  };
  tags: string[];
  isHighlighted: boolean;
}

const allProjectsArray: ProjectsHighlightsListProps[] = [
  {
    key: "flightcoordinator",
    title: "FlightCoordinator",
    description: "Automated flight manager app",
    urls: {
      repository_path: "https://github.com/FlightCoordinator/FlightCoordinator",
      project_page_path: "/projects/FlightCoordinator",
    },
    tags: ["spring", "react", "python"],
    isHighlighted: true,
  },
  {
    key: "wallettuner",
    title: "WalletTuner",
    description: "Flexible personal finance tracking app",
    urls: {
      repository_path: "https://github.com/caganseyrek/WalletTuner",
      project_page_path: "/projects/WalletTuner",
    },
    tags: ["react", "express", "typescript"],
    isHighlighted: true,
  },
  {
    key: "easyrequester",
    title: "EasyRequester",
    description: "A custom and flexible HTTP requester",
    urls: {
      repository_path: "https://github.com/caganseyrek/EasyRequester",
    },
    tags: ["typescript", "fetch-api", "npm"],
    isHighlighted: true,
  },
  {
    key: "quicktoc",
    title: "QuickTOC",
    description: "Automatic table of contents generator",
    urls: {
      repository_path: "https://github.com/caganseyrek/QuickTOC",
    },
    tags: ["typescript", "npm"],
    isHighlighted: true,
  },
];

export default allProjectsArray;
