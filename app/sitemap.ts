import { MetadataRoute } from "next";

import { coreMetadata } from "@/content/data/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: coreMetadata.base_site_url,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: coreMetadata.base_site_url + "/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: coreMetadata.base_site_url + "/snippets",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
  ];
}
