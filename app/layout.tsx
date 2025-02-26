import React, { type ReactNode } from "react";

import { Metadata } from "next";

import Providers from "@/components/Providers";

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
    <html className="scroll-smooth" suppressHydrationWarning>
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
          {/* <div className="border border-t-0 bg-accent rounded-b-md p-md">123</div> */}
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default MainLayout;
