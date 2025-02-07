import { Metadata } from "next";

import { WebSite } from "schema-dts";

export const infoTexts: { title: string; desc: string; url: string } = {
  title: "Çağan Seyrek",
  desc: "Senior computer engineering student who loves full-stack web development and the open-source.",
  url: "https://caganseyrek.com",
};

export const links: { GITHUB: string; LINKEDIN: string; LINKEDIN_SERVICE: string } = {
  GITHUB: "https://github.com/caganseyrek",
  LINKEDIN: "https://www.linkedin.com/in/caganseyrek/",
  LINKEDIN_SERVICE: "https://www.linkedin.com/services/page/4548aa324845553b6b/",
};

const generalCat: { abs_url: string; rel_path: string; alt_text: string } = {
  abs_url: "https://caganseyrek.com/assets/images/general_cat.png",
  rel_path: "/assets/images/general_cat.png",
  alt_text: "My Profile Picture",
};

export const headMetadata: Metadata = {
  description: infoTexts.desc,
  authors: [{ name: infoTexts.title }],
  keywords: ["full-stack developer", "software engineer", "software developer", "computer engineer", "portfolio"],
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
  },
  openGraph: {
    type: "website",
    title: infoTexts.title,
    description: infoTexts.desc,
    url: infoTexts.url,
    images: [
      {
        url: generalCat.abs_url,
        alt: generalCat.alt_text,
        width: 128,
        height: 128,
      },
    ],
    siteName: infoTexts.title,
  },
  twitter: {
    card: "summary_large_image",
    title: infoTexts.title,
    description: infoTexts.desc,
    images: [
      {
        url: generalCat.abs_url,
        alt: generalCat.alt_text,
        width: 128,
        height: 128,
      },
    ],
  },
};

export const jsonLd: WebSite = {
  "@type": "WebSite",
  name: infoTexts.title,
  url: infoTexts.url,
  description: infoTexts.desc,
  publisher: {
    "@type": "Organization",
    name: infoTexts.title,
    logo: {
      "@type": "ImageObject",
      url: generalCat.rel_path,
    },
  },
  sameAs: [links.GITHUB, links.LINKEDIN],
};
