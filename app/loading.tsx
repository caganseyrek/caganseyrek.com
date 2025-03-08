import React from "react";

import { Metadata } from "next";

import { Loader } from "lucide-react";

import { CustomPageFullContainer } from "@/components/layout/partials/PagePartials";

import { headMetadata } from "@/shared/data/metadata";

export const metadata: Metadata = {
  ...headMetadata,
  title: "Loading...",
};

const LoadingPage = () => {
  return (
    <CustomPageFullContainer>
      <Loader className="animate-spin" />
    </CustomPageFullContainer>
  );
};

export default LoadingPage;
