import React, { type ReactNode } from "react";

import { Metadata } from "next";

import Footer from "@/components/partial/Footer";
import Header from "@/components/partial/Header";

import { headMetadata, jsonLd } from "@/shared/data/metadataBase";
import "@/shared/styles/globals.css";

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
    <html className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="any" />
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
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
