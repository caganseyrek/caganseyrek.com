interface ProjectsHighlightProps {
  key: string | number;
  title: string;
  description: string;
  source_url: string;
  tags: string[];
}

export const HIGHLIGTED_PROJECTS: ProjectsHighlightProps[] = [
  {
    key: "wallettuner",
    title: "WalletTuner",
    description: "Flexible personal finance tracking app",
    source_url: "https://github.com/caganseyrek/WalletTuner",
    tags: ["react", "express", "typescript"],
  },
  {
    key: "jumpstart",
    title: "Jumpstart",
    description: "Starter projects to kickstart development",
    source_url: "https://github.com/caganseyrek/Jumpstart",
    tags: ["react", "express", "fastapi"],
  },
  {
    key: "easyrequester",
    title: "EasyRequester",
    description: "A custom and flexible HTTP requester",
    source_url: "https://github.com/caganseyrek/EasyRequester",
    tags: ["typescript", "axios"],
  },
  {
    key: "quicktoc",
    title: "QuickTOC",
    description: "Automatic table of contents generator",
    source_url: "https://github.com/caganseyrek/QuickTOC",
    tags: ["typescript"],
  },
];
