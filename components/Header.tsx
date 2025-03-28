"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/base/button";
import { Separator } from "@/components/base/separator";

import { mainMenuLinks, socialLinks } from "@/resources/data/links";

import { cn } from "@/shared/utils";

import MobileNav from "./MobileNav";
import { HeaderLogo, HeaderRightSection, HeaderWrapper } from "./partials/HeaderPartials";

const Header = () => {
  const pathname: string = usePathname();

  return (
    <HeaderWrapper>
      <HeaderLogo />
      <HeaderRightSection>
        {mainMenuLinks.map((item) => (
          <Link key={item.label} href={item.link}>
            <Button className={cn(pathname === item.link && "text-orange-400 hover:text-orange-200")}>
              {item.label}
            </Button>
          </Link>
        ))}
        <Separator decorative orientation="vertical" className="h-6 mx-sm" />
        {socialLinks.map((item) => (
          <Link key={item.label} href={item.link} target="_blank">
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
