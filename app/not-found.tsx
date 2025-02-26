import React from "react";

import { Metadata } from "next";
import Link from "next/link";

import { Origami } from "lucide-react";

import { Button } from "@/components/base-ui/button";
import { PageBody, PageTitle, PageWrapper } from "@/components/PageElements";

export const metadata: Metadata = { title: "Not Found" };

const NotFoundPage = () => {
  return (
    <PageWrapper>
      <PageBody>
        <Origami className="text-foreground w-[34px] h-[38px]" />
        <PageTitle>Oops...</PageTitle>
        <span className="text-muted-foreground">Looks like you&apos;ve reached an empty space.</span>
      </PageBody>
      <Link href={"/"}>
        <Button>Return to Homepage</Button>
      </Link>
    </PageWrapper>
  );
};

export default NotFoundPage;
