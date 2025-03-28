import React from "react";

import { Metadata } from "next";

import { Loader } from "lucide-react";

import { CustomPageContainer } from "@/components/partials/CustomPagePartials";

import { headMetadata } from "@/resources/data/metadata";

export const metadata: Metadata = {
  ...headMetadata,
  title: "Loading...",
};

const LoadingPage = () => {
  return (
    <CustomPageContainer>
      <Loader className="animate-spin" />
    </CustomPageContainer>
  );
};

export default LoadingPage;
