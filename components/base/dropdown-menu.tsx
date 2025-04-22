"use client";

import React from "react";

import { Content, Item, Label, Portal, Root, Separator, Trigger } from "@radix-ui/react-dropdown-menu";

import { cn } from "@/shared/utils";

const DropdownMenu = ({ ...props }: React.ComponentProps<typeof Root>) => <Root {...props} />;

const DropdownMenuTrigger = ({ ...props }: React.ComponentProps<typeof Trigger>) => <Trigger {...props} />;

const DropdownMenuContent = ({ className, sideOffset = 10, ref, ...props }: React.ComponentProps<typeof Content>) => (
  <Portal>
    <Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-[175px] mr-[15px] shadow-xs overflow-y-auto overflow-x-hidden rounded-md",
        "border border-container-border bg-container-background text-foreground-muted",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </Portal>
);

const DropdownMenuItem = ({
  className,
  inset,
  ref,
  ...props
}: React.ComponentProps<typeof Item> & { inset?: boolean }) => (
  <Item
    ref={ref}
    className={cn(
      "flex items-center justify-between gap-2 py-sm px-md last-of-type:pb-md rounded-sm",
      "hover:text-foreground-muted text-sm font-medium select-none cursor-default transition-colors outline-hidden",
      "data-disabled:pointer-events-none data-disabled:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
);

const DropdownMenuLabel = ({ className, ref, ...props }: React.ComponentProps<typeof Label>) => (
  <Label ref={ref} className={cn("p-md pb-sm text-sm font-semibold text-foreground", className)} {...props} />
);

const DropdownMenuSeparator = ({ className, ref, ...props }: React.ComponentProps<typeof Separator>) => (
  <Separator ref={ref} className={cn("my-sm h-px bg-container-background", className)} {...props} />
);

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
};
