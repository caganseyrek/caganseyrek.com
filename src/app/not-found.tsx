import React from "react";

import type { Metadata } from "next";
import Link from "next/link";

import { Origami } from "lucide-react";

import { Button } from "@/components/base-ui/button";
import {
  CustomPageBody,
  CustomPageContainer,
  CustomPageDescription,
  CustomPageTitle,
} from "@/components/page-partials";

import { headMetadata } from "@/data/metadata";

export const metadata: Metadata = {
  ...headMetadata,
  title: "Not Found",
};

export default function NotFoundPage() {
  return (
    <CustomPageContainer>
      <CustomPageBody>
        <Origami className="text-foreground h-[38px] w-[34px]" />
        <CustomPageTitle>Oops...</CustomPageTitle>
        <CustomPageDescription>Looks like you&apos;ve reached an empty space.</CustomPageDescription>
      </CustomPageBody>
      <Button asChild>
        <Link href={"/"}>Return to Homepage</Link>
      </Button>
    </CustomPageContainer>
  );
}
