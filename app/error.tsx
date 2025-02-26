"use client";

import React from "react";

import { Metadata } from "next";
import Link from "next/link";

import { Puzzle } from "lucide-react";

import { Button } from "@/components/base-ui/button";
import { PageBody, PageTitle, PageWrapper } from "@/components/PageElements";

export const metadata: Metadata = { title: "Error..." };

const ErrorPage = () => {
  return (
    <PageWrapper>
      <PageBody>
        <Puzzle className="text-foreground w-[34px] h-[38px]" />
        <PageTitle>Oops...</PageTitle>
        <span className="text-muted-foreground">Looks like some error occurred. I&apos;m really sorry...</span>
      </PageBody>
      <Link href={"/"}>
        <Button>Return to Homepage</Button>
      </Link>
    </PageWrapper>
  );
};

export default ErrorPage;
