import React from "react";

import type { Metadata } from "next";
import Link from "next/link";

import { Origami } from "lucide-react";

import { Button } from "@/components/base/button";
import {
  CustomPageBody,
  CustomPageContainer,
  CustomPageDescription,
  CustomPageTitle,
} from "@/components/base/page-partials";

import { headMetadata } from "@/data/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...headMetadata,
    title: "Sayfa Bulunamadı...",
  };
}

export default async function NotFoundPage() {
  return (
    <CustomPageContainer>
      <Origami className="text-foreground h-9.5 w-8.5" />
      <CustomPageBody>
        <CustomPageTitle>404</CustomPageTitle>
        <CustomPageDescription>Sitede yer almayan bir yere ulaştık.</CustomPageDescription>
      </CustomPageBody>
      <Button asChild>
        <Link href={"/"}>Ana sayfaya dön</Link>
      </Button>
    </CustomPageContainer>
  );
}
