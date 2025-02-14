import { MetadataRoute } from "next";

import { metadataBase } from "@/shared/data/metadataBase";
import { projectList } from "@/shared/data/projectsList";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectDocs: MetadataRoute.Sitemap = projectList
    .filter((project) => project.docs !== null)
    .map((project) => ({
      url: metadataBase.url + project.docs!.path,
      lastModified: project.docs!.last_modified,
      changeFrequency: "monthly",
    }));

  return [
    {
      url: "https://caganseyrek.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: "https://caganseyrek.com/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: "https://caganseyrek.com/collaborate",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    ...projectDocs,
  ];
}
