import React from "react";

import { cn } from "@/shared/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full h-9 min-h-9 text-sm rounded-md border border-neutral-700/50 bg-transparent px-md py-sm transition-colors placeholder:text-neutral-400 focus-visible:outline-none focus-visible:border-ring/40 disabled:cursor-not-allowed disabled:opacity-50",
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
