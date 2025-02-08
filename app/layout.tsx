import React, { type ReactNode } from "react";

import { Metadata } from "next";

import Header from "@/components/header/Header";

import { headMetadata, jsonLd } from "@/data/metadata";
import "@/styles/globals.css";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: "%s - Çağan Seyrek",
    default: "Çağan Seyrek",
  },
  ...headMetadata,
};

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <html>
      <head>
        <link rel="icon" href="/images/logo_favicon.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default MainLayout;
