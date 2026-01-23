export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  links:
    | { repository: string; website?: undefined }
    | { repository?: undefined; website: string }
    | { repository: string; website: string };
}

export const projectHighlights: ProjectProps[] = [
  {
    id: "1",
    title: "Uzun Mühendislik & Proje",
    description: "Website of Civil Engineering Office based in Gelibolu",
    links: {
      website: "https://uzunmuhendislikproje.com/",
    },
  },
  {
    id: "2",
    title: "Atlas İzmir",
    description: "Interactive map of significant and historical places in İzmir",
    links: {
      repository: "https://github.com/caganseyrek/atlas-izmir",
      website: "https://atlasizmir.caganseyrek.com/",
    },
  },
  {
    id: "3",
    title: "Johnson",
    description: "Discovery and proxy service for managing server groups",
    links: {
      repository: "https://github.com/caganseyrek/Johnson",
    },
  },
];
