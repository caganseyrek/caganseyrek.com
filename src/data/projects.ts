export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  repository: string;
}

export const projects: ProjectProps[] = [
  {
    id: "atlas-izmir",
    title: "Atlas İzmir",
    description: "Interactive map of significant and historical places in İzmir ",
    repository: "https://github.com/caganseyrek/atlas-izmir",
  },
  {
    id: "johnson",
    title: "Johnson",
    description: "Discovery and proxy service for managing server groups",
    repository: "https://github.com/caganseyrek/Johnson",
  },
  {
    id: "FlightCoordinator",
    title: "FlightCoordinator",
    description: "Automated flight manager app",
    repository: "https://github.com/FlightCoordinator/FlightCoordinator",
  },
];
