import React from "react";

import { FlexBox } from "@/components/flexbox";

import { cn } from "@/lib/utils";

import type { WrapperProps } from "@/globals";

function CustomPageContainer({ children, className }: WrapperProps) {
  return (
    <FlexBox className={cn("p-lg h-120 w-200 flex-col justify-center gap-3 pb-60", className)}>{children}</FlexBox>
  );
}

function CustomPageTitle({ children, className }: WrapperProps) {
  return <h3 className={cn("text-foreground text-xl font-semibold", className)}>{children}</h3>;
}

function CustomPageDescription({ children, className }: WrapperProps) {
  return <span className={cn("text-foreground-muted", className)}>{children}</span>;
}

function CustomPageBody({ children, className }: WrapperProps) {
  return (
    <FlexBox asColumn className={cn("justify-center gap-0", className)}>
      {children}
    </FlexBox>
  );
}

export { CustomPageContainer, CustomPageTitle, CustomPageDescription, CustomPageBody };
