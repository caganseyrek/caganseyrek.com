import React from "react";

import { Metadata } from "next";

import { Origami } from "lucide-react";

import LinkedButton from "@/components/ui-base/linked-button";
import PageTitle from "@/components/ui-base/page-title";
import { InnerContainer, PageWrapper } from "@/components/ui-base/page-wrapper";

export const metadata: Metadata = { title: "Not Found" };

const NotFoundPage = () => {
  return (
    <PageWrapper className="items-center justify-center gap-md py-md">
      <Origami className="text-foreground w-[34px] h-[38px]" />
      <InnerContainer>
        <PageTitle title="Oops..." />
        <span className="text-muted-foreground">Looks like you&apos;ve reached an empty space.</span>
      </InnerContainer>
      <LinkedButton link={{ href: "/" }}>Return to Homepage</LinkedButton>
    </PageWrapper>
  );
};

export default NotFoundPage;
