"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

const LayoutHeader = () => {
  const pathname: string = usePathname();

  return (
    <header className="w-[780px] m-auto p-[15px] box-content flex items-center justify-between bg-accent border border-t-0 rounded-b-lg">
      <h2 className="text-[1.3rem] font-semibold tracking-tighter text-muted-foreground">Çağan Seyrek</h2>
      <nav className="flex flex-row gap-x-[7px]">
        <Button
          variant="outline"
          className={`rounded-sm hover:bg-background ${pathname === "/" ? "text-foreground" : "text-muted-foreground"}`}>
          <Link href="/">About Me</Link>
        </Button>
        <Button
          variant="outline"
          className={`rounded-sm hover:bg-background  ${pathname.includes("blog") ? "text-foreground" : "text-muted-foreground"}`}>
          <Link href="/blog">Blog</Link>
        </Button>
        <Button
          variant="outline"
          className={`rounded-sm hover:bg-background  ${pathname.includes("collaborate") ? "text-foreground" : "text-muted-foreground"}`}>
          <Link href="/collaborate">Collaborate</Link>
        </Button>
      </nav>
    </header>
  );
};

export default LayoutHeader;
