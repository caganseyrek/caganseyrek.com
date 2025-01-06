"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

import MobileNav from "./MobileNav";

const LayoutHeader = () => {
  const pathname: string = usePathname();

  return (
    <header>
      <h2>Çağan Seyrek</h2>
      <nav className="default-nav">
        <Button
          variant="outline"
          className={`rounded-sm hover:bg-background ${pathname === "/" ? "text-foreground" : "text-muted-foreground"}`}>
          <Link href="/">About Me</Link>
        </Button>
        <Button
          variant="outline"
          className={`rounded-sm hover:bg-background ${pathname.includes("blog") ? "text-foreground" : "text-muted-foreground"}`}>
          <Link href="/blog">Blog</Link>
        </Button>
        <Button
          variant="outline"
          className={`rounded-sm hover:bg-background ${pathname.includes("collaborate") ? "text-foreground" : "text-muted-foreground"}`}>
          <Link href="/collaborate">Collaborate</Link>
        </Button>
      </nav>
      <MobileNav />
    </header>
  );
};

export default LayoutHeader;
