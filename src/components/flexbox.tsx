import React from "react";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

import type { WrapperProps } from "@/globals";

function FlexBox({
  children,
  className,
  asColumn,
  asChild = false,
  style,
}: WrapperProps & { style?: React.CSSProperties; asColumn?: true; asChild?: boolean }) {
  const Component = asChild ? Slot : "div";
  return (
    <Component
      style={style}
      className={cn("flex flex-row items-center justify-start gap-1.5", asColumn && "flex-col", className)}>
      {children}
    </Component>
  );
}

export { FlexBox };
