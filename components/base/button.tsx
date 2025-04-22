import React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border border-container-border bg-container-background text-foreground-muted hover:text-foreground",
        outlined: "border border-container-border bg-transparent text-foreground-muted hover:text-foreground",
        ghost: "bg-transparent hover:bg-container-background text-foreground-muted hover:text-foreground",
      },
      size: {
        default: "h-9 min-h-9 px-md py-sm",
        icon: "h-9 w-9 min-h-9 min-w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

const Button = ({ className, variant, size, asChild = false, ...props }: ButtonProps) => {
  const Component = asChild ? Slot : "button";
  return <Component className={cn(buttonVariants({ variant, size, className }))} {...props} />;
};

export { Button };
