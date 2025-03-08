import React from "react";

import { cn } from "@/shared/utils/twUtils";

import { Components } from "@/types/globals";

const ContentWrapper = ({ children, className }: Components.BaseWrapperProps) => {
  return (
    <div
      className={cn(
        "w-[800px] min-h-[calc(100dvh-66px)] flex flex-col items-start justify-start gap-lg mx-auto px-md py-lg max-base:w-full",
        className,
      )}>
      {children}
    </div>
  );
};

const ContentSection = ({ children, className }: Components.BaseWrapperProps) => {
  return (
    <section className={cn("w-full flex flex-col items-start justify-start gap-y-md gap-x-lg", className)}>
      {children}
    </section>
  );
};

export { ContentWrapper, ContentSection };
