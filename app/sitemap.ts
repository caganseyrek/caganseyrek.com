import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://caganseyrek.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
  ];
}
