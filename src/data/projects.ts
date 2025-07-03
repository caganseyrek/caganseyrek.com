export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  repository: string;
}

export const projects: ProjectProps[] = [
  {
    id: "FlightCoordinator",
    title: "FlightCoordinator",
    description: "Automated flight manager app",
    repository: "https://github.com/FlightCoordinator/FlightCoordinator",
  },
  {
    id: "johnson",
    title: "Johnson",
    description: "Discovery and proxy service for managing server groups",
    repository: "https://github.com/caganseyrek/Johnson",
  },
  {
    id: "EasyRequester",
    title: "EasyRequester",
    description: "TypeScript-based HTTP client wrapper",
    repository: "https://github.com/caganseyrek/EasyRequester",
  },
];
