import React from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/shared/twUtils";

import type { TechstackItemProps } from "@/types/globals";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

interface TagListProps {
  contents: {
    items: TechstackItemProps[];
    borderRadius?: "default" | "small";
  };
  className?: string;
}

const tagListItemVariants = cva(
  "bg-background border dark:border-transparent p-sm flex flex-row items-center justify-center gap-[7px] text-sm text-muted-foreground select-none",
  {
    variants: {
      radius: {
        default: "rounded-md",
        small: "rounded-sm",
      },
    },
    defaultVariants: {
      radius: "default",
    },
  },
);

const TagList = ({ contents, className }: TagListProps) => {
  return (
    <div className={cn("flex flex-row flex-wrap items-center justify-start gap-xs", className)}>
      <TooltipProvider>
        {contents.items.map((item) => (
          <Tooltip key={item.key}>
            <TooltipTrigger>
              <span className={cn(tagListItemVariants({ radius: contents.borderRadius ?? "default" }), className)}>
                <item.icon className="w-5 h-5" />
                <span className="sr-only">{item.label}</span>
              </span>
            </TooltipTrigger>
            <TooltipContent className="font-sans">{item.label}</TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default TagList;
