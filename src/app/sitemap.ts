import { MetadataRoute } from "next";

import { coreMetadata } from "@/data/metadata";

import { PostLoader } from "@/lib/post-loader";

export default function sitemap(): MetadataRoute.Sitemap {
  const allPostMetadatas = PostLoader.getAllPostMetadatas();

  const postEntries: MetadataRoute.Sitemap = allPostMetadatas.map((postMetadata) => ({
    url: coreMetadata.base_site_url + "/" + postMetadata.slug,
    lastModified: new Date(postMetadata.lastUpdatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: coreMetadata.base_site_url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: coreMetadata.base_site_url + "/blog",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...postEntries,
  ];
}
