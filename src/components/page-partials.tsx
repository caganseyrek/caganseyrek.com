import React from "react";

import { FlexBox } from "@/components/flexbox";

import { cn } from "@/shared/utils";

import type { WrapperProps } from "@/types/globals";

const CustomPageContainer = ({ children, className }: WrapperProps) => {
  return (
    <FlexBox className={cn("w-[800px] flex-col justify-center gap-md p-lg pb-[240px]", className)}>{children}</FlexBox>
  );
};

const CustomPageTitle = ({ children, className }: WrapperProps) => {
  return <h3 className={cn("text-xl font-semibold text-foreground", className)}>{children}</h3>;
};

const CustomPageDescription = ({ children, className }: WrapperProps) => {
  return <span className={cn("text-foreground-muted", className)}>{children}</span>;
};

const CustomPageBody = ({ children, className }: WrapperProps) => {
  return <div className={cn("flex flex-col items-center justify-center gap-xs", className)}>{children}</div>;
};

export { CustomPageContainer, CustomPageTitle, CustomPageDescription, CustomPageBody };
