"use client";

import React from "react";

import Link from "next/link";

import { Boxes, Handshake, Home, Menu } from "lucide-react";

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
  isToggled: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsToggled: (value: boolean) => void;
}

const LayoutHeaderMobileNav = ({ isToggled, setIsToggled }: MobileNavProps) => {
  return (
    <nav
      className="hidden max-[570px]:flex"
      role="navigation"
      aria-label="Mobile Navigation"
      aria-hidden={isToggled ? false : true}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="white"
            size="icon"
            role="button"
            aria-label="Toggle Mobile Navigation"
            onClick={() => setIsToggled(!isToggled)}
            className="rounded-sm hover:bg-background hidden max-[570px]:flex">
            <Menu className="icon-18x18" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[180px] mr-md">
          <DropdownMenuLabel>Navigation</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link href="/">
              <DropdownMenuItem className="cursor-pointer">
                <Home /> About Me
              </DropdownMenuItem>
            </Link>
            <Link href="/projects">
              <DropdownMenuItem className="cursor-pointer">
                <Boxes /> Projects
              </DropdownMenuItem>
            </Link>
            <Link href="/collaborate">
              <DropdownMenuItem className="cursor-pointer">
                <Handshake /> Collaborate
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default LayoutHeaderMobileNav;
