"use client";

import React from "react";

import Link from "next/link";

import { Menu } from "lucide-react";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface MobileNavProps {
  isMobileNavToggled: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsMobileNavToggled: (value: boolean) => void;
}

const MobileNav = ({ isMobileNavToggled, setIsMobileNavToggled }: MobileNavProps) => {
  return (
    <nav
      className="mobile-nav"
      role="navigation"
      aria-label="Mobile Navigation"
      aria-hidden={isMobileNavToggled ? false : true}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            role="button"
            aria-label="Toggle Mobile Navigation"
            onClick={() => setIsMobileNavToggled(!isMobileNavToggled)}
            className="mobile-nav-btn">
            <Menu className="icon-18x18" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Navigation</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href="/">
              <DropdownMenuItem className="cursor-pointer">About Me</DropdownMenuItem>
            </Link>
            <Link href="/blog">
              <DropdownMenuItem className="cursor-pointer">Blog</DropdownMenuItem>
            </Link>
            <Link href="/collaborate">
              <DropdownMenuItem className="cursor-pointer">Collaborate</DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default MobileNav;
