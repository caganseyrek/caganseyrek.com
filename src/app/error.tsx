"use client";

import React from "react";

import type { Metadata } from "next";
import Link from "next/link";

import { Puzzle } from "lucide-react";

import { Button } from "@/components/base/button";

import {
  CustomPageBody,
  CustomPageContainer,
  CustomPageDescription,
  CustomPageTitle,
} from "@/components/page-partials";

import { headMetadata } from "@/data/metadata";

export const metadata: Metadata = {
  ...headMetadata,
  title: "Error...",
};

export default function ErrorPage() {
  return (
    <CustomPageContainer>
      <Puzzle className="text-foreground h-9.5 w-8.5" />
      <CustomPageBody>
        <CustomPageTitle>Uhhh...</CustomPageTitle>
        <CustomPageDescription>Looks like some error occurred. I&apos;m really sorry.</CustomPageDescription>
      </CustomPageBody>
      <Button asChild>
        <Link href={"/"}>Return to Homepage</Link>
      </Button>
    </CustomPageContainer>
  );
}
