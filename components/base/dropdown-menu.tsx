"use client";

import React from "react";

import { Content, Item, Label, Portal, Root, Separator, Trigger } from "@radix-ui/react-dropdown-menu";

import { cn } from "@/shared/utils";

const DropdownMenu = Root;

const DropdownMenuTrigger = Trigger;

const DropdownMenuContent = React.forwardRef<
  React.ComponentRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 10, ...props }, ref) => (
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
));
DropdownMenuContent.displayName = Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ComponentRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
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
));
DropdownMenuItem.displayName = Item.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ComponentRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => (
  <Label ref={ref} className={cn("p-md pb-sm text-sm font-semibold text-foreground", className)} {...props} />
));
DropdownMenuLabel.displayName = Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ComponentRef<typeof Separator>,
  React.ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator ref={ref} className={cn("my-sm h-px bg-container-background", className)} {...props} />
));
DropdownMenuSeparator.displayName = Separator.displayName;

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
};
