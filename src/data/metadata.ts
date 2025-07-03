import type { Metadata } from "next";

import type { WebSite } from "schema-dts";

interface CoreMetadataProps {
  site_title: string;
  description: string;
  base_site_url: string;
  social_links: {
    github_profile: string;
    linkedin_profile: string;
  };
  preview_image: {
    absolute_url: string;
    relative_path: string;
    alt_text: string;
  };
}

export const coreMetadata: CoreMetadataProps = {
  site_title: "Çağan Seyrek",
  description:
    "I'm a computer engineer and software developer, and I create open-source projects. This is my personal website.",
  base_site_url: "https://caganseyrek.com",
  social_links: {
    github_profile: "https://github.com/caganseyrek",
    linkedin_profile: "https://www.linkedin.com/in/caganseyrek/",
  },
  preview_image: {
    absolute_url: "https://caganseyrek.com/images/general_cat.png",
    relative_path: "/images/general_cat.png",
    alt_text: "My Profile Picture",
  },
};

export const headMetadata: Metadata = {
  description: coreMetadata.description,
  authors: [{ name: coreMetadata.site_title }],
  keywords: ["computer engineer", "software engineer", "software developer", "full-stack developer"],
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
  },
  openGraph: {
    type: "website",
    title: coreMetadata.site_title,
    description: coreMetadata.description,
    url: coreMetadata.base_site_url,
    images: [
      {
        url: coreMetadata.preview_image.absolute_url,
        alt: coreMetadata.preview_image.alt_text,
        width: 128,
        height: 128,
      },
    ],
    siteName: coreMetadata.site_title,
  },
  twitter: {
    card: "summary_large_image",
    title: coreMetadata.site_title,
    description: coreMetadata.description,
    images: [
      {
        url: coreMetadata.preview_image.absolute_url,
        alt: coreMetadata.preview_image.alt_text,
        width: 128,
        height: 128,
      },
    ],
  },
};

export const jsonLd: WebSite = {
  "@type": "WebSite",
  name: coreMetadata.site_title + "'s Personal Website",
  url: coreMetadata.base_site_url,
  description: coreMetadata.description,
  publisher: {
    "@type": "Organization",
    name: coreMetadata.site_title,
    logo: {
      "@type": "ImageObject",
      url: coreMetadata.preview_image.relative_path,
    },
  },
  sameAs: [coreMetadata.social_links.github_profile, coreMetadata.social_links.linkedin_profile],
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "WebPage",
        name: "Homepage",
        url: coreMetadata.base_site_url,
      },
      {
        "@type": "WebPage",
        name: "Projects",
        url: coreMetadata.base_site_url + "/projects",
      },
      {
        "@type": "WebPage",
        name: "Snippets",
        url: coreMetadata.base_site_url + "/snippets",
      },
    ],
  },
};
