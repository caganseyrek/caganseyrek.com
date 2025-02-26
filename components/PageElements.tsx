import React from "react";

import { cn } from "@/shared/twUtils";

import { BaseWrapperProps } from "@/types/globals";

const PageWrapper = ({ children, className }: BaseWrapperProps) => {
  return (
    <div
      className={cn(
        "w-[780px] max-[780px]:w-full h-full box-border flex flex-col items-center justify-center flex-1 gap-md m-auto p-lg",
        className,
      )}>
      {children}
    </div>
  );
};

const PageTitle = ({ children, className }: BaseWrapperProps) => {
  return <h3 className={cn("text-xl font-semibold text-foreground", className)}>{children}</h3>;
};

const PageBody = ({ children, className }: BaseWrapperProps) => {
  return <h3 className={cn("flex flex-col items-center justify-center gap-xs", className)}>{children}</h3>;
};

export { PageWrapper, PageTitle, PageBody };
