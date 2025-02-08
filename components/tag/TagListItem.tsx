import React from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/utils/twUtils";

interface TagListItemProps {
  children?: React.ReactNode;
  variant?: "default" | "white";
}

const TagListItem = ({ children, variant = "default" }: TagListItemProps) => {
  const tagListItemVariants = cva(
    "border rounded-md flex flex-row items-center justify-center gap-[7px] py-xs px-sm text-muted-foreground text-sm select-none hover:text-foreground transition-colors",
    {
      variants: {
        variant: {
          default: "bg-accent",
          white: "bg-background",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    },
  );

  return <span className={cn(tagListItemVariants({ variant }))}>{children}</span>;
};

export default TagListItem;
