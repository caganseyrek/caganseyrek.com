import type { CSSProperties, ReactNode } from "react";

import { Root } from "radix-ui/slot";

import { cn } from "@/utils";

interface FlexBoxProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  asColumn?: true;
  asChild?: boolean;
}

export function FlexBox({ children, className, asColumn, asChild = false, style }: FlexBoxProps) {
  const Component = asChild ? Root : "div";
  return (
    <Component
      style={style}
      className={cn("flex flex-row items-center justify-start gap-1.5", asColumn && "flex-col", className)}>
      {children}
    </Component>
  );
}
