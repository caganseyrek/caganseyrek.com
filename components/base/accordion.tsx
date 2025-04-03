"use client";

import React from "react";

import { Content, Header, Item, Root, Trigger } from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/shared/utils";

const Accordion = React.forwardRef<React.ComponentRef<typeof Root>, React.ComponentPropsWithoutRef<typeof Root>>(
  ({ className, ...props }, ref) => <Root ref={ref} className={cn("w-full p-0 m-0", className)} {...props} />,
);
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<React.ComponentRef<typeof Item>, React.ComponentPropsWithoutRef<typeof Item>>(
  ({ className, ...props }, ref) => (
    <Item
      ref={ref}
      className={cn("border rounded-lg border-container-border bg-container-background", className)}
      {...props}
    />
  ),
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref) => (
  <Header className="flex">
    <Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between p-4 transition-all text-left cursor-pointer",
        "[&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}>
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </Trigger>
  </Header>
));
AccordionTrigger.displayName = Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <Content
    ref={ref}
    className="w-auto overflow-hidden rounded-lg text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("p-4 pt-0", className)}>{children}</div>
  </Content>
));
AccordionContent.displayName = Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
