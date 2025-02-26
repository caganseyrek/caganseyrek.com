import { type MetadataRoute } from "next";

import { metadataBase } from "@/shared/data/metadataBase";

function manifest(): MetadataRoute.Manifest {
  return {
    id: metadataBase.url,
    name: metadataBase.title,
    short_name: metadataBase.title,
    description: metadataBase.desc,
    scope: metadataBase.url,
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
