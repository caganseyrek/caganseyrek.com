import React from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/shared/utils/twUtils";

interface TagListItemProps extends BaseWrapperProps {
  variant?: "default" | "white";
  radius?: "default" | "small";
  className?: string;
}

const TagListItem = ({ children, variant = "default", radius = "small", className }: TagListItemProps) => {
  const tagListItemVariants = cva(
    "border flex flex-row items-center justify-center gap-[7px] py-xs px-sm text-muted-foreground text-sm select-none hover:text-foreground transition-colors",
    {
      variants: {
        variant: {
          default: "bg-accent",
          white: "bg-background",
        },
        radius: {
          default: "rounded-md",
          small: "rounded-sm",
        },
      },
      defaultVariants: {
        variant: "default",
        radius: "default",
      },
    },
  );

  return <span className={cn(tagListItemVariants({ variant, radius }), className)}>{children}</span>;
};

const TagList = ({ children }: BaseWrapperProps) => {
  return <div className="flex flex-row flex-wrap items-center justify-start gap-xs">{children}</div>;
};

export { TagList, TagListItem };
