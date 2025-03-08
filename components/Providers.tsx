"use client";

import React from "react";

import { ThemeProvider } from "next-themes";

import MountCheck from "./MountCheck";

const Providers = ({ children }: React.ComponentProps<typeof ThemeProvider>) => {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system" disableTransitionOnChange>
      <MountCheck>{children}</MountCheck>
    </ThemeProvider>
  );
};

export default Providers;
