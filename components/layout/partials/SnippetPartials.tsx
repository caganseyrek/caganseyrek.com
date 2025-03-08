import React from "react";

import { cn } from "@/shared/utils/twUtils";

import { Components } from "@/types/globals";

const SnippetDetails = ({ children, className }: Components.BaseWrapperProps) => {
  return (
    <div
      className={cn(
        "w-full flex flex-row items-center justify-between gap-md pr-md max-2xs:flex-col max-2xs:items-start",
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
  return <span className={cn("font-medium tracking-tight text-base", className)}>{children}</span>;
};

const SnippetDescription = ({ children, className }: Components.BaseWrapperProps) => {
  return <span className={cn("text-muted-foreground text-sm", className)}>{children}</span>;
};

const SnippetLanguage = ({ children, className }: Components.BaseWrapperProps) => {
  return (
    <span
      className={cn(
        "rounded-sm border dark:border-border/50 bg-background dark:bg-accent text-muted-foreground text-sm px-sm py-xs",
        className,
      )}>
      {children}
    </span>
  );
};

export { SnippetDetails, SnippetHeader, SnippetTitle, SnippetDescription, SnippetLanguage };
