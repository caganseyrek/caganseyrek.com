import { type MetadataRoute } from "next";

import { metadataTexts } from "@/data/metadata";

function manifest(): MetadataRoute.Manifest {
  return {
    name: metadataTexts.title,
    short_name: metadataTexts.title,
    description: metadataTexts.desc,
    start_url: "/",
    display: "standalone",
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
