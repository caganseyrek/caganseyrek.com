"use client";

import React from "react";

import { Metadata } from "next";
import Link from "next/link";

import { Puzzle } from "lucide-react";

import { Button } from "@/components/base-ui/button";
import {
  CustomPageBody,
  CustomPageContainer,
  CustomPageDescription,
  CustomPageTitle,
} from "@/components/layout/partials/PagePartials";

import { headMetadata } from "@/shared/data/metadata";

export const metadata: Metadata = {
  ...headMetadata,
  title: "Error...",
};

const ErrorPage = () => {
  return (
    <CustomPageContainer>
      <CustomPageBody>
        <Puzzle className="text-foreground w-[34px] h-[38px]" />
        <CustomPageTitle>Uhhh...</CustomPageTitle>
        <CustomPageDescription>Looks like some error occurred. I&apos;m really sorry.</CustomPageDescription>
      </CustomPageBody>
      <Link href={"/"}>
        <Button>Return to Homepage</Button>
      </Link>
    </CustomPageContainer>
  );
};

export default ErrorPage;
