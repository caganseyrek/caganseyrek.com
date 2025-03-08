"use client";

import React from "react";

import Link from "next/link";

import { Menu, Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/base-ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/base-ui/drawer";
import { Separator } from "@/components/base-ui/separator";

import { navLinks, socialLinks } from "@/shared/data/links";
import { getNextTheme } from "@/shared/utils/getNextTheme";

const MobileDrawer = () => {
  const [mounted, setMounted] = React.useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="icon">
          <Menu />
          <span className="sr-only">Navigation</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="min-w-[140px]">
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
          <DrawerDescription>Pages and social links from the site </DrawerDescription>
        </DrawerHeader>
        <nav className="w-full flex flex-col items-center justify-center gap-md p-md">
          <div className="w-full flex flex-col items-center justify-center gap-sm">
            {navLinks.map((item) => (
              <Link key={item.label} href={item.link} className="w-full">
                <Button className="bg-accent/80 w-full">
                  <item.icon /> {item.label}
                </Button>
              </Link>
            ))}
          </div>
          <Separator decorative className="mx-sm" />
          <div className="flex flex-row items-center justify-center gap-sm">
            {socialLinks.map((item) => (
              <Link key={item.label} href={item.link} target="_blank">
                <Button size="icon">
                  <item.icon /> <span className="sr-only">{item.label}</span>
                </Button>
              </Link>
            ))}
            <Button size="icon" onClick={() => setTheme(getNextTheme(theme))}>
              {theme === "dark" ? <Sun /> : theme === "light" ? <Moon /> : <SunMoon />}
            </Button>
          </div>
        </nav>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
