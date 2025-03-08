import { type MetadataRoute } from "next";

import { coreMetadata } from "@/shared/data/metadata";

function manifest(): MetadataRoute.Manifest {
  return {
    id: coreMetadata.url,
    name: coreMetadata.title,
    short_name: coreMetadata.title,
    description: coreMetadata.desc,
    scope: coreMetadata.url,
    start_url: "/",
    display: "standalone",
    orientation: "natural",
    background_color: "#ffffff",
    theme_color: "#ffffff",
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
