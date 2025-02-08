"use client";

import React from "react";

import { Metadata } from "next";

import { Puzzle } from "lucide-react";

import ExtraPageContainer from "@/components/shared/ExtraPageContainer";
import LinkedButton from "@/components/shared/LinkedButton";
import MainPageWrapper from "@/components/shared/MainPageWrapper";
import PageTitle from "@/components/shared/PageTitle";

export const metadata: Metadata = { title: "Error..." };

const ErrorPage = () => {
  return (
    <MainPageWrapper className="items-center justify-center gap-md py-md">
      <Puzzle className="text-foreground w-[34px] h-[38px]" />
      <ExtraPageContainer>
        <PageTitle title="Oops..." />
        <span className="text-muted-foreground">Looks like some error occurred. I&apos;m really sorry...</span>
      </ExtraPageContainer>
      <LinkedButton href="/">Return to Homepage</LinkedButton>
    </MainPageWrapper>
  );
};

export default ErrorPage;
