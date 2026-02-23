import { type MetadataRoute } from "next";

import { coreMetadata } from "@/data/metadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: coreMetadata.siteBaseUrl,
    name: coreMetadata.name,
    short_name: coreMetadata.name,
    description: coreMetadata.description,
    scope: coreMetadata.siteBaseUrl,
    start_url: "/",
    display: "standalone",
    orientation: "natural",
    background_color: "#1A1A1A",
    theme_color: "#1A1A1A",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-192x192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-maskable-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
