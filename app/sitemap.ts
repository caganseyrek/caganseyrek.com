import { MetadataRoute } from "next";

import { coreMetadata } from "@/shared/data/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: coreMetadata.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: coreMetadata.url + "/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: coreMetadata.url + "/snippets",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
  ];
}
