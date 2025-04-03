import { Content } from "@/types/globals";

export const projects: Content.ProjectProps[] = [
  {
    slug: "FlightCoordinator",
    title: "FlightCoordinator",
    description: "Automated flight manager app",
    repository: "https://github.com/FlightCoordinator/FlightCoordinator",
    tech: ["spring boot", "next.js", "fastapi", "postgresql"],
  },
  {
    slug: "tarihsever.com",
    title: "tarihsever.com",
    description: "A history website mainly about colonialism",
    repository: "https://github.com/caganseyrek/tarihsever.com",
    tech: ["next.js", "typescript", "mdx"],
  },
  {
    slug: "EasyRequester",
    title: "EasyRequester",
    description: "TypeScript-based HTTP client wrapper",
    repository: "https://github.com/caganseyrek/EasyRequester",
    tech: ["fetch-api", "typescript"],
  },
  {
    slug: "WalletTuner",
    title: "WalletTuner",
    description: "Flexible personal finance tracking app ",
    repository: "https://github.com/caganseyrek/WalletTuner",
    tech: ["express.js", "next.js", "mongodb"],
  },
];
