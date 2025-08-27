import React from "react";

import { FlexBox } from "@/components/flexbox";

import { cn } from "@/lib/utils";

import type { WrapperProps } from "@/globals";

function CustomPageContainer({ children, className }: WrapperProps) {
  return (
    <FlexBox className={cn("gap-md p-lg w-[800px] flex-col justify-center pb-[240px]", className)}>{children}</FlexBox>
  );
}

function CustomPageTitle({ children, className }: WrapperProps) {
  return <h3 className={cn("text-foreground text-xl font-semibold", className)}>{children}</h3>;
}

function CustomPageDescription({ children, className }: WrapperProps) {
  return <span className={cn("text-foreground-muted", className)}>{children}</span>;
}

function CustomPageBody({ children, className }: WrapperProps) {
  return <div className={cn("gap-xs flex flex-col items-center justify-center", className)}>{children}</div>;
}

export { CustomPageContainer, CustomPageTitle, CustomPageDescription, CustomPageBody };
