"use client";

import React from "react";

import { Root } from "@radix-ui/react-separator";

import { cn } from "@/shared/utils";

const Separator = ({
  className,
  orientation = "horizontal",
  decorative = true,
  lighter = false,
  ...props
}: React.ComponentProps<typeof Root> & { lighter?: boolean }) => {
  return (
    <Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 rounded-lg",
        lighter ? "bg-border-lighter/55" : "bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      {...props}
    />
  );
};

export { Separator };
