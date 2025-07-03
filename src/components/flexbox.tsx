import React from "react";

import { cn } from "@/shared/utils";

import type { WrapperProps } from "@/types/globals";

const FlexBox = ({ className, children }: WrapperProps) => {
  return <div className={cn("flex flex-row items-center justify-start", className)}>{children}</div>;
};

export { FlexBox };
