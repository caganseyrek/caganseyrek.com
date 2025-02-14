import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/images/pixel_art/",
      },
    ],
    sitemap: "https://caganseyrek.com/sitemap.xml",
  };
}
