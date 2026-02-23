import { MetadataRoute } from "next";

import { coreMetadata } from "@/data/metadata";

import { PostLoader } from "@/lib/post-loader";

export default function sitemap(): MetadataRoute.Sitemap {
  const allPostMetadatas = PostLoader.getAllPostMetadatas();

  const postEntries: MetadataRoute.Sitemap = allPostMetadatas.map((postMetadata) => ({
    url: coreMetadata.siteBaseUrl + "/" + postMetadata.slug,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: coreMetadata.siteBaseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: coreMetadata.siteBaseUrl + "/hizmetler",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: coreMetadata.siteBaseUrl + "/blog",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...postEntries,
  ];
}
