import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/images/",
      },
    ],
    sitemap: "https://caganseyrek.com/sitemap.xml",
  };
}
