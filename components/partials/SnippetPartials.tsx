import React from "react";

import { cn } from "@/shared/utils";

import type { Components } from "@/types/globals";

const SnippetContainer = ({ children, className }: Components.BaseWrapperProps) => {
  return (
    <div
      className={cn(
        "w-full flex flex-row items-center justify-between gap-md pr-md",
        "max-[430px]:flex-col max-[430px]:items-start",
        className,
      )}>
      {children}
    </div>
  );
};

const SnippetHeader = ({ children, className }: Components.BaseWrapperProps) => {
  return <div className={cn("flex flex-col items-start justify-start", className)}>{children}</div>;
};

const SnippetTitle = ({ children, className }: Components.BaseWrapperProps) => {
  return <span className={cn("font-medium tracking-tight text-foreground", className)}>{children}</span>;
};

const SnippetDescription = ({ children, className }: Components.BaseWrapperProps) => {
  return <span className={cn("text-sm text-foreground-muted", className)}>{children}</span>;
};

const SnippetLanguage = ({ children, className }: Components.BaseWrapperProps) => {
  return (
    <span
      className={cn("rounded-sm bg-container-label-background text-foreground-muted text-sm px-sm py-xs", className)}>
      {children}
    </span>
  );
};

export { SnippetContainer, SnippetHeader, SnippetTitle, SnippetDescription, SnippetLanguage };
