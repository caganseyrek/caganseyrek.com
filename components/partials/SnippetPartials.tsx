import React from "react";

import { cn } from "@/shared/utils";

import { Components } from "@/types/globals";

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
  return <span className={cn("font-medium tracking-tight text-neutral-200", className)}>{children}</span>;
};

const SnippetDescription = ({ children, className }: Components.BaseWrapperProps) => {
  return <span className={cn("text-sm text-neutral-400", className)}>{children}</span>;
};

const SnippetLanguage = ({ children, className }: Components.BaseWrapperProps) => {
  return (
    <span className={cn("rounded-sm bg-neutral-700/40 text-neutral-400 text-sm px-sm py-xs", className)}>
      {children}
    </span>
  );
};

export { SnippetContainer, SnippetHeader, SnippetTitle, SnippetDescription, SnippetLanguage };
