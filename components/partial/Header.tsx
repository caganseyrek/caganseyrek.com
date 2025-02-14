"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import LinkedButton from "@/components/ui-base/linked-button";
import { Separator } from "@/components/ui-base/separator";

import { navLinks, socialLinks } from "@/shared/data/links";

import MobileNav from "./MobileNav";

const TestHeader = () => {
  const pathname: string = usePathname();

  const getIsActive = (link: string): string => (pathname === link ? "text-foreground" : "text-muted-foreground");

  return (
    <div className="bg-accent border-b">
      <header className="w-[800px] flex flex-row items-center justify-between p-md m-auto max-[800px]:w-auto">
        <Link href="/" className="text-xl tracking-tighter font-semibold group">
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="32" viewBox="0 0 42 32" fill="none">
            <path
              d="M18.3746 2.9147C18.5861 2.63367 18.5459 2.23375 18.2609 2.026C16.4905 0.735548 14.4496 0 12.2769 0C5.49657 0 0 7.16345 0 16C0 23.9389 4.43659 30.5274 10.2548 31.784C10.6377 31.8667 10.9846 31.5664 10.9846 31.1783V25.0914C10.9846 24.8396 10.8333 24.6153 10.6147 24.4867C8.57527 23.287 7.10769 19.9406 7.10769 16C7.10769 11.0515 9.42204 7.04 12.2769 7.04C13.0747 7.04 13.8303 7.35327 14.505 7.9127C14.9031 8.24286 15.5682 8.12749 15.7556 7.64784C16.4357 5.90758 17.3218 4.31369 18.3746 2.9147Z"
              className="fill-muted-foreground group-hover:fill-foreground transition-colors"
            />
            <path
              d="M13.9391 24.4867C13.7206 24.6153 13.5692 24.8396 13.5692 25.0914V31.1783C13.5692 31.5664 13.9161 31.8667 14.299 31.784C20.1173 30.5274 24.5538 23.9389 24.5538 16C24.5538 11.0515 26.8682 7.04 29.7231 7.04C32.578 7.04 34.8923 11.0515 34.8923 16C34.8923 20.9485 32.578 24.96 29.7231 24.96C28.9253 24.96 28.1697 24.6467 27.495 24.0873C27.0969 23.7571 26.4318 23.8725 26.2444 24.3522C25.5643 26.0924 24.6782 27.6863 23.6254 29.0853C23.414 29.3663 23.4541 29.7663 23.7391 29.974C25.5095 31.2645 27.5504 32 29.7231 32C36.5034 32 42 24.8366 42 16C42 7.16345 36.5034 0 29.7231 0C22.9427 0 17.4462 7.16345 17.4462 16C17.4462 19.9406 15.9786 23.287 13.9391 24.4867Z"
              className="fill-muted-foreground group-hover:fill-foreground transition-colors"
            />
          </svg>
        </Link>
        <div className="flex flex-row items-center justify-start gap-md max-[500px]:hidden">
          <nav className="flex flex-row items-start justify-start gap-sm">
            {navLinks.map((item) => (
              <LinkedButton
                key={item.label}
                link={{ href: item.link }}
                button={{ variant: "white", className: getIsActive(item.link) }}>
                <item.icon /> {item.label}
              </LinkedButton>
            ))}
          </nav>
          <Separator orientation="vertical" decorative className="h-7 rounded-lg" />
          <div className="flex flex-row items-start justify-start gap-sm">
            {socialLinks.map((item) => (
              <LinkedButton
                key={item.label}
                link={{ href: item.link, isExternal: true }}
                button={{ variant: "white", size: "icon" }}>
                <item.icon />
                <span className="sr-only">{item.label}</span>
              </LinkedButton>
            ))}
          </div>
        </div>
        <div className="hidden max-[500px]:flex">
          <MobileNav />
        </div>
      </header>
    </div>
  );
};

export default TestHeader;
