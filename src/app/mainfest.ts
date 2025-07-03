import { type MetadataRoute } from "next";

import { coreMetadata } from "@/data/metadata";

function manifest(): MetadataRoute.Manifest {
  return {
    id: coreMetadata.base_site_url,
    name: coreMetadata.site_title,
    short_name: coreMetadata.site_title,
    description: coreMetadata.description,
    scope: coreMetadata.base_site_url,
    start_url: "/",
    display: "standalone",
    orientation: "natural",
    background_color: "#262626",
    theme_color: "#262626",
    icons: [
      {
        src: "/images/favicon.png",
        sizes: "27x27",
        type: "image/x-icon",
      },
      {
        src: "/images/favicon.png",
        sizes: "27x27",
        type: "image/png",
      },
    ],
  };
}

export default manifest;
