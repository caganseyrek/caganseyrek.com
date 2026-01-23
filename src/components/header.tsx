"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/base/button";

import { FlexBox } from "@/components/flexbox";

import { menuItems } from "@/data/menu-items";

import { cn } from "@/lib/utils";

function Header() {
  const pathname = usePathname();

  return (
    <FlexBox className="bg-gray-1 border-gray-2 w-full justify-between rounded-lg border">
      <div className="px-3 py-2 text-2xl font-bold tracking-tighter">
        <img src="/images/icon.svg" className="size-8.5" alt="Site Icon" title="Site Icon" aria-label="Site Icon" />
      </div>
      <FlexBox className="p-2">
        {menuItems.map((item) => (
          <Button
            key={item.key}
            variant="containerButton"
            className={cn(pathname === item.href && "text-white!")}
            asChild>
            <Link href={item.href}>
              <item.icon /> {item.label}
            </Link>
          </Button>
        ))}
      </FlexBox>
    </FlexBox>
  );
}

export { Header };
