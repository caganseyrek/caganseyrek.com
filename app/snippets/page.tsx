import React from "react";

import { Metadata } from "next";

import { ContentTitle, ContentWrapper } from "@/components/partials/ContentPartials";

import { SnippetsContent } from "@/components/page-contents/SnippetsContent";

import { headMetadata } from "@/content/data/metadata";

export const metadata: Metadata = {
  ...headMetadata,
  title: "Snippets",
  description: "Collection of handy code snippets",
};

const SnippetsPage = () => {
  return (
    <ContentWrapper>
      <ContentTitle title="Snippets" subtitle="Collection of handy code snippets" />
      <SnippetsContent />
    </ContentWrapper>
  );
};

export default SnippetsPage;
