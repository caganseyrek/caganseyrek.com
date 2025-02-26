import { ProjectDetailProps } from "@/types/globals";

export const projects: ProjectDetailProps[] = [
  {
    slug: "FlightCoordinator",
    title: "FlightCoordinator",
    repository: {
      url: "https://github.com/FlightCoordinator/FlightCoordinator",
      description: "Automated flight manager app",
      tags: ["spring boot", "next.js", "fastapi"],
    },
  },
  {
    slug: "EasyRequester",
    title: "EasyRequester",
    repository: {
      url: "https://github.com/caganseyrek/EasyRequester",
      description: "TypeScript-based HTTP client wrapper",
      tags: ["typescript", "fetch-api"],
    },
  },
];
