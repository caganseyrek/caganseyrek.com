import { Metadata } from "next";

import { WebSite } from "schema-dts";

import { Data } from "@/types/globals";

export const coreMetadata: Data.CoreMetadataProps = {
  title: "Çağan Seyrek",
  desc: "I'm a computer engineer and software developer, and I create open-source projects. This is my personal website.",
  url: "https://caganseyrek.com",
  links: {
    github: "https://github.com/caganseyrek",
    linkedin: "https://www.linkedin.com/in/caganseyrek/",
    npm: "https://www.npmjs.com/~caganseyrek",
  },
  image: {
    url: "https://caganseyrek.com/images/general_cat.png",
    relative_path: "/images/general_cat.png",
    alt_text: "My Profile Picture",
  },
};

export const headMetadata: Metadata = {
  description: coreMetadata.desc,
  authors: [{ name: coreMetadata.title }],
  keywords: ["computer engineer", "software engineer", "software developer", "full-stack developer", "portfolio"],
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
  },
  openGraph: {
    type: "website",
    title: coreMetadata.title,
    description: coreMetadata.desc,
    url: coreMetadata.url,
    images: [
      {
        url: coreMetadata.image.url,
        alt: coreMetadata.image.alt_text,
        width: 128,
        height: 128,
      },
    ],
    siteName: coreMetadata.title,
  },
  twitter: {
    card: "summary_large_image",
    title: coreMetadata.title,
    description: coreMetadata.desc,
    images: [
      {
        url: coreMetadata.image.url,
        alt: coreMetadata.image.alt_text,
        width: 128,
        height: 128,
      },
    ],
  },
};

export const jsonLd: WebSite = {
  "@type": "WebSite",
  name: coreMetadata.title + "'s Personal Website",
  url: coreMetadata.url,
  description: coreMetadata.desc,
  publisher: {
    "@type": "Organization",
    name: coreMetadata.title,
    logo: {
      "@type": "ImageObject",
      url: coreMetadata.image.relative_path,
    },
  },
  sameAs: [coreMetadata.links.github, coreMetadata.links.linkedin],
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "WebPage",
        name: "Homepage",
        url: coreMetadata.url,
      },
      {
        "@type": "WebPage",
        name: "Projects",
        url: coreMetadata.url + "/projects",
      },
      {
        "@type": "WebPage",
        name: "Snippets",
        url: coreMetadata.url + "/snippets",
      },
    ],
  },
};
