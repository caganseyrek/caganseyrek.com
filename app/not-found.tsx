import React from "react";

import { Metadata } from "next";
import Link from "next/link";

import { Origami } from "lucide-react";

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
  title: "Not Found",
};

const NotFoundPage = () => {
  return (
    <CustomPageContainer>
      <CustomPageBody>
        <Origami className="text-foreground w-[34px] h-[38px]" />
        <CustomPageTitle>Oops...</CustomPageTitle>
        <CustomPageDescription>Looks like you&apos;ve reached an empty space.</CustomPageDescription>
      </CustomPageBody>
      <Link href={"/"}>
        <Button>Return to Homepage</Button>
      </Link>
    </CustomPageContainer>
  );
};

export default NotFoundPage;
