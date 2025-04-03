import React from "react";

import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { cn } from "@/shared/utils";

import { Components } from "@/types/globals";

const ProjectContainer = ({ className, children }: Components.BaseWrapperProps) => {
  return (
    <div
      className={cn(
        "min-w-[calc((100%-7px)/2)] max-w-[calc((100%-7px)/2)]",
        "flex flex-col items-start justify-start gap-md",
        "border border-container-border bg-container-background text-foreground-muted",
        "p-md rounded-lg",
        "max-sm:min-w-full max-sm:max-w-full",
        className,
      )}>
      {children}
    </div>
  );
};

const ProjectHeader = ({ className, children }: Components.BaseWrapperProps) => {
  return <div className={cn("flex flex-1 flex-col items-start justify-start", className)}>{children}</div>;
};

const ProjectTitle = ({ children, className, link }: Components.Partials.ProjectTitleProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      className={cn(
        "text-lg font-medium tracking-tight text-foreground hover:text-foreground-hover transition-colors",
        "flex flex-row items-center justify-start gap-sm",
        className,
      )}>
      {children} <ArrowUpRight className="w-4 h-4 min-w-4 min-h-4" />
    </Link>
  );
};

const ProjectDescription = ({ children, className }: Components.BaseWrapperProps) => {
  return <span className={cn("text-sm text-foreground-muted flex-1", className)}>{children}</span>;
};

const ProjectTechs = ({ list }: Components.Partials.ProjectTechsProps) => {
  return (
    <div className="flex flex-row flex-wrap items-start justify-start gap-xs">
      {list.map((item) => (
        <span
          key={item}
          className="flex flex-row items-center justify-center gap-sm px-sm py-xs text-sm font-medium tracking-tight rounded-sm bg-container-label-background text-foreground-muted">
          {item}
        </span>
      ))}
    </div>
  );
};

export { ProjectContainer, ProjectHeader, ProjectTitle, ProjectDescription, ProjectTechs };
