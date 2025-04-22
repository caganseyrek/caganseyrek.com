"use client";

import React from "react";

import { Content, Header, Item, Root, Trigger } from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/shared/utils";

const Accordion = ({ className, ref, ...props }: React.ComponentProps<typeof Root>) => (
  <Root ref={ref} className={cn("w-full p-0 m-0", className)} {...props} />
);

const AccordionItem = ({ className, ref, ...props }: React.ComponentProps<typeof Item>) => (
  <Item
    ref={ref}
    className={cn("border rounded-lg border-container-border bg-container-background", className)}
    {...props}
  />
);

const AccordionTrigger = ({ className, children, ref, ...props }: React.ComponentProps<typeof Trigger>) => (
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
);

const AccordionContent = ({ className, children, ref, ...props }: React.ComponentProps<typeof Content>) => (
  <Content
    ref={ref}
    className="w-auto overflow-hidden rounded-lg text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}>
    <div className={cn("p-4 pt-0", className)}>{children}</div>
  </Content>
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
