import React from "react";

import { cn } from "@/shared/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full h-9 min-h-9 text-sm rounded-md border border-container-border bg-transparent px-md py-sm transition-color",
          "placeholder:text-foreground-muted focus-visible:outline-1 focus-visible:outline-container-ring disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
