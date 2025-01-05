import React, { type ReactNode } from "react";

import { Metadata } from "next";

import LayoutHeader from "@/components/LayoutHeader";

import { jsonLd, metadataObject } from "@/data/metadata";
import "@/styles/globals.css";

interface LayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: "%s - Çağan Seyrek",
    default: "Çağan Seyrek",
  },
  ...metadataObject,
};

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <html>
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="any" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-background min-w-[400px] text-[16px] m-0 p-0">
        <LayoutHeader />
        <main className="w-[780px] m-auto my-[30px] flex flex-col gap-y-[30px]">{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
