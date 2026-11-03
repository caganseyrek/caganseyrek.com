import type { ComponentProps } from "react";

import { Content, Item, Portal, Root, Trigger } from "radix-ui/dropdown-menu";

import { cn } from "@/utils";

export function DropdownMenu({ ...props }: ComponentProps<typeof Root>) {
  return <Root data-slot="dropdown-menu" {...props} />;
}

export function DropdownMenuTrigger({ ...props }: ComponentProps<typeof Trigger>) {
  return <Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

export function DropdownMenuContent({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}: ComponentProps<typeof Content>) {
  return (
    <Portal>
      <Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        align={align}
        className={cn(
          "data-open:animate-in data-closed:animate-out",
          "data-closed:fade-out-0 data-open:fade-in-0",
          "data-closed:zoom-out-95 data-open:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          "max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin)",
          "z-50 overflow-x-hidden overflow-y-auto shadow-md shadow-black/50 duration-100",
          "data-[state=closed]:overflow-hidden",
          "bg-gray-2 border-gray-3 flex w-full flex-col items-start justify-start gap-0.5 rounded-lg border p-1.5",
          className,
        )}
        {...props}
      />
    </Portal>
  );
}

export function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: ComponentProps<typeof Item> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "group/dropdown-menu-item relative cursor-default data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-7",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "select-nones flex w-full cursor-pointer items-center justify-start outline-hidden",
        className,
      )}
      {...props}
    />
  );
}
