"use client";

import React from "react";

import { usePathname } from "next/navigation";

import { ArrowUpRight, Menu } from "lucide-react";

import { Button } from "@/components/ui-base/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui-base/drawer";
import LinkedButton from "@/components/ui-base/linked-button";
import { Separator } from "@/components/ui-base/separator";

import { navLinks, socialLinks } from "@/shared/data/links";
import { cn } from "@/shared/utils/twUtils";

const MobileNav = () => {
  const pathname: string = usePathname();

  const getIsActive = (link: string): string => {
    return pathname === link ? "text-foreground" : "text-muted-foreground";
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="white" size="icon">
          <Menu />
          <span className="sr-only">Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
        </DrawerHeader>
        <nav className="w-full px-4 pb-4 flex flex-col items-start justify-start gap-md">
          <nav className="w-full">
            {navLinks.map((item) => (
              <LinkedButton
                key={item.label}
                link={{ href: item.link, className: "w-full" }}
                button={{
                  variant: "ghost",
                  className: cn("w-full flex flex-row justify-start", getIsActive(item.link)),
                }}>
                <item.icon /> {item.label}
              </LinkedButton>
            ))}
          </nav>
          <Separator decorative className="rounded-lg" />
          <div className="w-full">
            {socialLinks.map((item) => (
              <LinkedButton
                key={item.label}
                link={{ href: item.link, isExternal: true, className: "w-full" }}
                button={{
                  variant: "ghost",
                  className: cn("w-full flex flex-row justify-between", getIsActive(item.link)),
                }}>
                <span className="flex flex-row items-center justify-start gap-sm">
                  <item.icon />
                  <span>{item.label}</span>
                </span>
                <ArrowUpRight />
              </LinkedButton>
            ))}
          </div>
        </nav>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
