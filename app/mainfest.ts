import { MetadataRoute } from "next";

function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cagan Seyrek's Portfolio",
    short_name: "Cagan's Portfolio",
    description: "Senior year computer engineering student who loves full-stack web development and the open-source.",
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
