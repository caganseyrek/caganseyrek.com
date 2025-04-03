"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu } from "lucide-react";

import { Button } from "@/components/base/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/base/dropdown-menu";

import { cn } from "@/shared/utils";

import { mainMenuLinks, socialLinks } from "@/resources/data/links";

const MobileNav = () => {
  const pathname: string = usePathname();

  return (
    <div className="hidden max-sm:block">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="hover:text-foreground-hover">
            Menu <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Navigation</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {mainMenuLinks.map((item) => (
            <DropdownMenuItem
              key={item.key}
              asChild
              className={cn(
                "cursor-pointer",
                pathname === item.link && "text-foreground-hover hover:text-foreground-active-hover",
              )}>
              <Link href={item.link}>{item.label}</Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          {socialLinks.map((item) => (
            <DropdownMenuItem key={item.key} asChild className="cursor-pointer">
              <Link href={item.link} target="_blank">
                {item.label} <item.icon />
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNav;
