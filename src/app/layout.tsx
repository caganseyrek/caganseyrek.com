import React from "react";

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { headMetadata, jsonLd } from "@/data/metadata";

import { cn } from "@/lib/utils";

import type { WrapperProps } from "@/globals";
import "@/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Çağan Seyrek",
    default: "Çağan Seyrek",
  },
  ...headMetadata,
};

const inter = Inter({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function MainLayout({ children }: WrapperProps) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(inter.className, jetBrainsMono.className)}>
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
