"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MenuIcon } from "lucide-react";

import { Button } from "@/components/base/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/base/dropdown";

import { menuItems } from "@/data/menu-items";

import { cn } from "@/lib/utils";

function MobileMenu() {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="mr-2 hidden max-[475px]:flex">
        <Button variant="containerButton" size="icon">
          <MenuIcon /> <span className="sr-only">Menüyü Aç/Kapa</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {menuItems.map((item) => (
          <DropdownMenuItem asChild key={item.key}>
            <Button variant="dropdownItemButton" className={cn(pathname === item.href && "text-white!")} asChild>
              <Link href={item.href}>
                <item.icon /> {item.label}
              </Link>
            </Button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { MobileMenu };
