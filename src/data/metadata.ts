import type { Metadata } from "next";

import type { Person } from "schema-dts";

interface CoreMetadataProps {
  name: string;
  siteTitle: string;
  description: string;
  siteBaseUrl: string;
  socialLinks: {
    githubProfile: string;
    linkedinProfile: string;
  };
}

export const coreMetadata: CoreMetadataProps = {
  name: "Çağan Seyrek",
  siteTitle: "Çağan Seyrek - Bilgisayar Mühendisi",
  description:
    "Bilgisayar mühendisiyim. Full-stack yazılım geliştirici olarak ölçeklenebilir backend ve modern frontend sistemleri tasarlıyor ve geliştiriyorum.",
  siteBaseUrl: "https://caganseyrek.com",
  socialLinks: {
    githubProfile: "https://github.com/caganseyrek",
    linkedinProfile: "https://www.linkedin.com/in/caganseyrek/",
  },
};

export const headMetadata: Metadata = {
  metadataBase: new URL(coreMetadata.siteBaseUrl),
  description: coreMetadata.description,
  authors: [{ name: coreMetadata.name }],
  keywords: [
    "bilgisayar mühendisi",
    "yazılım mühendisi",
    "yazılım geliştirici",
    "full-stack geliştirici",
    "frontend geliştirici",
    "backend geliştirici",
  ],
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
  },
  openGraph: {
    type: "website",
    url: coreMetadata.siteBaseUrl,
    siteName: coreMetadata.siteTitle,
    title: coreMetadata.siteTitle,
    description: coreMetadata.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: coreMetadata.siteTitle,
    description: coreMetadata.description,
    images: ["/twitter-image.jpg"],
  },
};

export const jsonLd: Person = {
  "@type": "Person",
  name: coreMetadata.name,
  url: coreMetadata.siteBaseUrl,
  description: coreMetadata.description,
  image: coreMetadata.siteBaseUrl + "/images/logo.png",
  sameAs: [coreMetadata.socialLinks.githubProfile, coreMetadata.socialLinks.linkedinProfile],
};
