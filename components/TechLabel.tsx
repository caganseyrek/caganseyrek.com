import React from "react";

import { cn } from "@/shared/utils/twUtils";

import { Components } from "@/types/globals";

const TechLabel = ({ children, className }: Components.BaseWrapperProps) => {
  return (
    <span
      className={cn(
        "flex flex-row items-center justify-center gap-sm border dark:border-border/50 bg-accent/80 dark:bg-accent/40 px-sm py-xs rounded-sm font-medium tracking-tight text-sm text-muted-foreground",
        className,
      )}>
      {children}
    </span>
  );
};

export default TechLabel;
