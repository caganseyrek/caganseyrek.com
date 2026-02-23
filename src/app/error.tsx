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
} from "@/components/base/page-partials";

import { headMetadata } from "@/data/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...headMetadata,
    title: "Hata...",
  };
}

export default function ErrorPage() {
  return (
    <CustomPageContainer>
      <Puzzle className="text-foreground h-9.5 w-8.5" />
      <CustomPageBody>
        <CustomPageTitle>Hmmm...</CustomPageTitle>
        <CustomPageDescription>Bir hata olmuş gibi görünüyor. Çok üzgünüm.</CustomPageDescription>
      </CustomPageBody>
      <Button asChild>
        <Link href={"/"}>Ana sayfaya dön</Link>
      </Button>
    </CustomPageContainer>
  );
}
