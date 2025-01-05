"use client";

import React, { type ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

import "@/styles/globals.css";

interface LayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  const pathname: string = usePathname();

  return (
    <html>
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="any" />
      </head>
      <body className="bg-background min-w-[400px] text-[16px] m-0 p-0">
        <header className="w-[780px] m-auto p-[15px] box-content flex items-center justify-between bg-accent border border-t-0 rounded-b-lg">
          <h2 className="text-xl font-semibold tracking-tighter">Çağan Seyrek</h2>
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
        <main className="w-[780px] m-auto my-[30px] flex flex-col gap-y-[30px]">{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
