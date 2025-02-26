import React from "react";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }: React.ComponentProps<typeof ThemeProvider>) => {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
