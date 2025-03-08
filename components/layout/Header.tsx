"use client";

import React from "react";

import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/base-ui/button";
import { Separator } from "@/components/base-ui/separator";

import { navLinks, socialLinks } from "@/shared/data/links";
import { getNextTheme } from "@/shared/utils/getNextTheme";

import HeaderSkeleton from "./header/HeaderSkeleton";
import MobileDrawer from "./header/MobileDrawer";
import {
  HeaderContainer,
  HeaderMain,
  HeaderMenu,
  HeaderNavigation,
  HeaderSocials,
  HeaderTitle,
} from "./partials/HeaderPartials";

const Header = () => {
  const [mounted, setMounted] = React.useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return <HeaderSkeleton />;

  return (
    <HeaderContainer>
      <HeaderMain>
        <HeaderTitle />
        <HeaderNavigation>
          <HeaderMenu items={navLinks} />
          <Separator decorative orientation="vertical" className="h-6 mx-sm" />
          <HeaderSocials items={socialLinks} />
          <Button size="icon" onClick={() => setTheme(getNextTheme(theme))}>
            {theme === "dark" ? <Sun /> : theme === "light" ? <Moon /> : <SunMoon />}
            <span className="sr-only">Change Theme</span>
          </Button>
        </HeaderNavigation>
        <div className="hidden max-md:flex">
          <MobileDrawer />
        </div>
      </HeaderMain>
    </HeaderContainer>
  );
};

export default Header;
