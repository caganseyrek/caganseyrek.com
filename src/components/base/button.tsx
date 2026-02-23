import React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border border-gray-2 bg-gray-1 text-foreground-darker hover:bg-gray-2 hover:border-gray-3! hover:text-foreground",
        ghost: "hover:bg-gray-1 text-foreground-darker hover:text-foreground",
        containerButton:
          "rounded-sm! border border-gray-3 bg-gray-2 text-foreground-darker hover:bg-gray-3 hover:border-gray-4 hover:text-foreground",
        dropdownItemButton:
          "rounded-sm! border border-gray-4 bg-gray-3 text-foreground-darker hover:bg-gray-4 hover:border-gray-5 hover:text-foreground",
      },
      size: {
        default: "h-8.5 min-h-8.5 px-2.5 py-1.5",
        icon: "size-8.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Component = asChild ? Slot.Root : "button";
  return <Component data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
