import React from "react";

import { cn } from "@/shared/utils";

import { Components } from "@/types/globals";

import { ContentWrapper } from "./ContentPartials";

const CustomPageContainer = ({ children, className }: Components.BaseWrapperProps) => {
  return (
    <ContentWrapper
      className={cn("w-[800px] flex flex-col items-center justify-center gap-md p-lg pb-[240px]", className)}>
      {children}
    </ContentWrapper>
  );
};

const CustomPageTitle = ({ children, className }: Components.BaseWrapperProps) => {
  return <h3 className={cn("text-xl font-semibold text-foreground", className)}>{children}</h3>;
};

const CustomPageDescription = ({ children, className }: Components.BaseWrapperProps) => {
  return <span className={cn("text-muted-foreground", className)}>{children}</span>;
};

const CustomPageBody = ({ children, className }: Components.BaseWrapperProps) => {
  return <div className={cn("flex flex-col items-center justify-center gap-xs", className)}>{children}</div>;
};

export { CustomPageContainer, CustomPageTitle, CustomPageDescription, CustomPageBody };
