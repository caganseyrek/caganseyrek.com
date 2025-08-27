import React from "react";

import type { Metadata } from "next";

import { Loader } from "lucide-react";

import { CustomPageContainer } from "@/components/page-partials";

import { headMetadata } from "@/data/metadata";

export const metadata: Metadata = {
  ...headMetadata,
  title: "Loading...",
};

export default function LoadingPage() {
  return (
    <CustomPageContainer>
      <Loader className="animate-spin" />
    </CustomPageContainer>
  );
}
