import React from "react";

import type { Metadata } from "next";

import { Loader } from "lucide-react";

import { CustomPageContainer } from "@/components/base/page-partials";

import { headMetadata } from "@/data/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...headMetadata,
    title: "Yükleniyor...",
  };
}

export default async function LoadingPage() {
  return (
    <CustomPageContainer>
      <Loader className="animate-spin" />
    </CustomPageContainer>
  );
}
