"use client";

import React from "react";

import { Metadata } from "next";

import { Puzzle } from "lucide-react";

import LinkedButton from "@/components/ui-base/linked-button";
import PageTitle from "@/components/ui-base/page-title";
import { InnerContainer, PageWrapper } from "@/components/ui-base/page-wrapper";

export const metadata: Metadata = { title: "Error..." };

const ErrorPage = () => {
  return (
    <PageWrapper className="items-center justify-center gap-md py-md">
      <Puzzle className="text-foreground w-[34px] h-[38px]" />
      <InnerContainer>
        <PageTitle title="Oops..." />
        <span className="text-muted-foreground">Looks like some error occurred. I&apos;m really sorry...</span>
      </InnerContainer>
      <LinkedButton link={{ href: "/" }}>Return to Homepage</LinkedButton>
    </PageWrapper>
  );
};

export default ErrorPage;
