import { MetadataRoute } from "next";

import { coreMetadata } from "@/data/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: coreMetadata.siteBaseUrl + "/sitemap.xml",
    host: coreMetadata.siteBaseUrl,
  };
}
