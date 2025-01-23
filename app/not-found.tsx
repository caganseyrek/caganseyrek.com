import React from "react";

import { Metadata } from "next";

import { Origami } from "lucide-react";

import HeaderElement from "@/components/HeaderElement";
import LinkedButton from "@/components/LinkedButton";

export const metadata: Metadata = { title: "Not Found" };

const NotFoundPage = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="p-lg w-fit flex flex-col items-center justify-center gap-md">
        <Origami className="text-foreground w-[34px] h-[38px]" />
        <div className="flex flex-col items-center justify-center gap-xs">
          <HeaderElement type="page-header">Oops...</HeaderElement>
          <span className="text-muted-foreground">Looks like you&apos;ve reached an empty space.</span>
        </div>
        <LinkedButton href="/">Return to Homepage</LinkedButton>
      </div>
    </div>
  );
};

export default NotFoundPage;
