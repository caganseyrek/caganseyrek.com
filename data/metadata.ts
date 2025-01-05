import { Metadata } from "next";

import { WebSite } from "schema-dts";

interface MetadataTextsParams {
  title: string;
  desc: string;
  url: string;
}

export const metadataTexts: MetadataTextsParams = {
  title: "Çağan Seyrek",
  desc: "Senior computer engineering student who loves full-stack web development and the open-source.",
  url: "https://caganseyrek.com",
};

export const metadataObject: Metadata = {
  openGraph: {
    type: "website",
    title: metadataTexts.title,
    description: metadataTexts.desc,
    url: metadataTexts.url,
    images: [
      {
        url: "https://caganseyrek.com/assets/images/general_cat.png",
        alt: "My Profile Picture",
        width: 128,
        height: 128,
      },
    ],
    siteName: "Çağan Seyrek",
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTexts.title,
    description: metadataTexts.desc,
    images: [
      {
        url: "https://caganseyrek.com/assets/images/general_cat.png",
        alt: "My Profile Picture",
        width: 128,
        height: 128,
      },
    ],
  },
};

export const jsonLd: WebSite = {
  "@type": "WebSite",
  name: metadataTexts.title,
  url: metadataTexts.url,
  description: metadataTexts.desc,
  publisher: {
    "@type": "Organization",
    name: metadataTexts.title,
    logo: {
      "@type": "ImageObject",
      url: "/assets/images/general_cat.png",
    },
  },
  sameAs: [
    "https://github.com/caganseyrek",
    "https://www.npmjs.com/~caganseyrek",
    "https://www.linkedin.com/in/caganseyrek/",
  ],
};
