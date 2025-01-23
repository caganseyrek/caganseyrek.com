"use client";

import React from "react";

import { Metadata } from "next";

import { Puzzle } from "lucide-react";

import LinkedButton from "@/components/LinkedButton";

export const metadata: Metadata = { title: "Error..." };

const ErrorPage = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="p-lg w-fit text-muted-foreground flex flex-col items-center justify-center gap-md">
        <Puzzle className="text-foreground w-[34px] h-[38px]" />
        <div className="flex flex-col items-center justify-center gap-xs">
          <h3 className="text-xl font-semibold text-foreground">Oops...</h3>
          Looks like some error occurred. I&apos;m really sorry...
        </div>
        <LinkedButton href="/">Return to Homepage</LinkedButton>
      </div>
    </div>
  );
};

export default ErrorPage;
