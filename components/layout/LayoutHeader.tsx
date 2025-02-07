"use client";

import React, { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Boxes, Handshake, Home } from "lucide-react";

import LinkedButton from "../LinkedButton";
import SharedImages from "../SharedImages";
import LayoutHeaderMobileNav from "./LayoutHeaderMobileNav";

const LayoutHeader = () => {
  const [isMobileNavToggled, setIsMobileNavToggled] = useState<boolean>(false);
  const pathname: string = usePathname().replace("/", "");

  const getButtonClasses = (pageName: string): string => {
    return pathname === pageName ? "text-foreground" : "text-muted-foreground";
  };

  return (
    <div className="border-b bg-accent">
      <header className="p-md w-[780px] m-auto flex items-center justify-between max-[780px]:w-full">
        <Link href="/" className="select-none">
          <SharedImages image="logo" />
        </Link>
        <nav className="flex flex-row gap-x-[7px] max-[570px]:hidden" role="navigation" aria-label="Main Navigation">
          <LinkedButton href="/" className={getButtonClasses("")} variant="white">
            <Home /> About Me
          </LinkedButton>
          <LinkedButton href="/projects" className={getButtonClasses("projects")} variant="white">
            <Boxes /> Projects
          </LinkedButton>
          <LinkedButton href="/collaborate" className={getButtonClasses("collaborate")} variant="white">
            <Handshake /> Collaborate
          </LinkedButton>
        </nav>
        <LayoutHeaderMobileNav isToggled={isMobileNavToggled} setIsToggled={setIsMobileNavToggled} />
      </header>
    </div>
  );
};

export default LayoutHeader;
