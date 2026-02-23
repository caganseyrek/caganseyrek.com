import React from "react";

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { FlexBox } from "@/components/base/flexbox";

import { Header } from "@/components/header";

import { headMetadata, jsonLd } from "@/data/metadata";

import { cn } from "@/lib/utils";

import type { WrapperProps } from "@/globals";
import "@/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Çağan Seyrek",
    default: "Çağan Seyrek",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  ...headMetadata,
};

const inter = Inter({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default async function MainLayout({ children }: WrapperProps) {
  return (
    <html lang="tr" suppressHydrationWarning className={cn(inter.className, jetBrainsMono.className)}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <FlexBox className="mx-auto flex max-w-200 flex-col items-start justify-start gap-6 px-3 pt-6 pb-6 max-[800px]:pt-3">
          <Header />
          {children}
        </FlexBox>
      </body>
    </html>
  );
}
