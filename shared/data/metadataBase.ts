import { Metadata } from "next";

import { WebSite } from "schema-dts";

interface MetadataBaseProps {
  title: string;
  desc: string;
  url: string;
  links: {
    github: string;
    linkedin: string;
    npm: string;
  };
  image: {
    url: string;
    relative_path: string;
    alt_text: string;
  };
}

export const metadataBase: MetadataBaseProps = {
  title: "Çağan Seyrek",
  desc: "Senior computer engineering student who loves full-stack web development and the open-source.",
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
  description: metadataBase.desc,
  authors: [{ name: metadataBase.title }],
  keywords: ["full-stack developer", "software engineer", "software developer", "computer engineer", "portfolio"],
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
  },
  openGraph: {
    type: "website",
    title: metadataBase.title,
    description: metadataBase.desc,
    url: metadataBase.url,
    images: [
      {
        url: metadataBase.image.url,
        alt: metadataBase.image.alt_text,
        width: 128,
        height: 128,
      },
    ],
    siteName: metadataBase.title,
  },
  twitter: {
    card: "summary_large_image",
    title: metadataBase.title,
    description: metadataBase.desc,
    images: [
      {
        url: metadataBase.image.url,
        alt: metadataBase.image.alt_text,
        width: 128,
        height: 128,
      },
    ],
  },
};

export const jsonLd: WebSite = {
  "@type": "WebSite",
  name: metadataBase.title,
  url: metadataBase.url,
  description: metadataBase.desc,
  publisher: {
    "@type": "Organization",
    name: metadataBase.title,
    logo: {
      "@type": "ImageObject",
      url: metadataBase.image.relative_path,
    },
  },
  sameAs: [metadataBase.links.github, metadataBase.links.linkedin],
};
