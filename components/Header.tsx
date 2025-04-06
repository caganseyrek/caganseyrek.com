"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/base/button";
import { Separator } from "@/components/base/separator";
import MobileNav from "@/components/MobileNav";
import { HeaderLogo, HeaderRightSection, HeaderWrapper } from "@/components/partials/HeaderPartials";

import { cn } from "@/shared/utils";

import { mainMenuLinks, socialLinks } from "@/contents/data/links";

const Header = () => {
  const pathname: string = usePathname();

  return (
    <HeaderWrapper>
      <HeaderLogo />
      <HeaderRightSection>
        {mainMenuLinks.map((item) => (
          <Link key={item.label} href={item.link} className="cursor-pointer">
            <Button
              className={cn(pathname === item.link && "text-foreground-hover hover:text-foreground-active-hover")}>
              {item.label}
            </Button>
          </Link>
        ))}
        <Separator decorative orientation="vertical" className="h-6 mx-sm" />
        {socialLinks.map((item) => (
          <Link key={item.label} href={item.link} target="_blank" className="cursor-pointer">
            <Button size="icon">
              <item.icon /> <span className="sr-only">{item.label}</span>
            </Button>
          </Link>
        ))}
      </HeaderRightSection>
      <MobileNav />
    </HeaderWrapper>
  );
};

export default Header;
