import React from "react";

import { Metadata } from "next";

import { ContentWrapper } from "@/components/layout/Content";
import Header from "@/components/layout/Header";
import Providers from "@/components/Providers";

import { headMetadata, jsonLd } from "@/shared/data/metadata";
import "@/shared/styles/globals.css";

import { Components as Layout } from "@/types/globals";

export const metadata: Metadata = {
  title: {
    template: "%s - Çağan Seyrek",
    default: "Çağan Seyrek",
  },
  ...headMetadata,
};

const MainLayout = ({ children }: Layout.BaseWrapperProps) => {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
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
        <Providers>
          <main>
            <Header />
            <ContentWrapper>{children}</ContentWrapper>
          </main>
        </Providers>
      </body>
    </html>
  );
};

export default MainLayout;
