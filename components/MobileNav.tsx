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

const MobileNav = () => {
  return (
    <nav className="mobile-nav">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="outline" className="mobile-nav-btn">
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
