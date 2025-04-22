import React from "react";

import { Metadata } from "next";

import Header from "@/components/Header";

import "@/shared/styles/globals.css";

import { Components as Layout } from "@/types/globals";

import { headMetadata, jsonLd } from "@/content/data/metadata";

export const metadata: Metadata = {
  title: {
    template: "%s - Çağan Seyrek",
    default: "Çağan Seyrek",
  },
  ...headMetadata,
};

const MainLayout = ({ children }: Layout.BaseWrapperProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
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
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
};

export default MainLayout;
