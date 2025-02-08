"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Boxes, Handshake, Home } from "lucide-react";

import { default as NavButton } from "../shared/LinkedButton";
import SiteImages from "../shared/SiteImages";

import HeaderBase from "./base/HeaderBase";
import HeaderNavBase from "./base/HeaderNavBase";
import HeaderWrapper from "./base/HeaderWrapper";
import LayoutHeaderMobileNav from "./MobileNav";

const Header = () => {
  const pathname: string = usePathname().replace("/", "");

  const getButtonClasses = (pageName: string): string => {
    return pathname === pageName ? "text-foreground" : "text-muted-foreground";
  };

  return (
    <HeaderBase>
      <HeaderWrapper>
        <Link href="/" className="select-none">
          <SiteImages image="logo" />
        </Link>
        <HeaderNavBase>
          <NavButton href="/" className={getButtonClasses("")} variant="white">
            <Home /> About
          </NavButton>
          <NavButton href="/projects" className={getButtonClasses("projects")} variant="white">
            <Boxes /> Projects
          </NavButton>
          <NavButton href="/collaborate" className={getButtonClasses("collaborate")} variant="white">
            <Handshake /> Collaborate
          </NavButton>
        </HeaderNavBase>
        <LayoutHeaderMobileNav />
      </HeaderWrapper>
    </HeaderBase>
  );
};

export default Header;
