import React from "react";

import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { cn } from "@/shared/utils/twUtils";

import { Components } from "@/types/globals";

const ProjectContainer = ({ className, children }: Components.BaseWrapperProps) => {
  return (
    <div
      className={cn(
        "min-w-[calc((100%-7px)/2)] max-w-[calc((100%-7px)/2)] flex flex-col items-start justify-start gap-md border dark:border-border/50 bg-accent/80 dark:bg-accent/40 p-md rounded-lg max-xs:min-w-full max-xs:max-w-full",
        className,
      )}>
      {children}
    </div>
  );
};

const ProjectHeader = ({ className, children }: Components.BaseWrapperProps) => {
  return <div className={cn("flex flex-1 flex-col items-start justify-start", className)}>{children}</div>;
};

const ProjectTitle = ({ children, className, link }: Components.ProjectTitleProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      className={cn("text-lg font-medium tracking-tight flex flex-row items-center justify-start gap-sm", className)}>
      {children} <ArrowUpRight className="w-4 h-4 min-w-4 min-h-4" />
    </Link>
  );
};

const ProjectDescription = ({ children, className }: Components.BaseWrapperProps) => {
  return <span className={cn("text-muted-foreground text-sm flex-1", className)}>{children}</span>;
};

const ProjectTechs = ({ list }: Components.ProjectTechsProps) => {
  return (
    <div className="flex flex-row flex-wrap items-start justify-start gap-xs">
      {list.map((item) => (
        <span
          key={item}
          className="flex flex-row items-center justify-center gap-sm px-sm py-xs text-muted-foreground text-sm font-medium tracking-tight bg-background border dark:border-transparent dark:bg-accent/80 rounded-sm">
          {item}
        </span>
      ))}
    </div>
  );
};

export { ProjectContainer, ProjectHeader, ProjectTitle, ProjectDescription, ProjectTechs };
