import React from "react";

import { cn } from "@/shared/utils";

import type { Components } from "@/types/globals";

const ContentWrapper = ({ children, className }: Components.BaseWrapperProps) => {
  return (
    <div
      className={cn(
        "w-[800px] min-h-[calc(100dvh-67px)]",
        "flex flex-col items-start justify-start gap-lg",
        "mx-auto py-lg",
        "max-base:w-full max-base:px-md",
        className,
      )}>
      {children}
    </div>
  );
};

const ContentTitle = ({ title, subtitle }: Components.Partials.PageHeaderProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-xs">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      {subtitle && <span className="text-foreground-muted">{subtitle}</span>}
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

export { ContentWrapper, ContentTitle, ContentSection };
