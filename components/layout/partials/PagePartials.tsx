import React from "react";

import { cn } from "@/shared/utils/twUtils";

import { Components } from "@/types/globals";

const CustomPageFullContainer = ({ children, className }: Components.BaseWrapperProps) => {
  return (
    <div className={cn("w-full h-full bg-background flex flex-1 items-center justify-center", className)}>
      {children}
    </div>
  );
};

const CustomPageContainer = ({ children, className }: Components.BaseWrapperProps) => {
  return (
    <div className={cn("w-full flex flex-1 flex-col items-center justify-center gap-md m-auto p-lg", className)}>
      {children}
    </div>
  );
};

const CustomPageTitle = ({ children, className }: Components.BaseWrapperProps) => {
  return <h3 className={cn("text-xl font-semibold text-foreground", className)}>{children}</h3>;
};

const CustomPageDescription = ({ children, className }: Components.BaseWrapperProps) => {
  return <span className={cn("text-muted-foreground", className)}>{children}</span>;
};

const CustomPageBody = ({ children, className }: Components.BaseWrapperProps) => {
  return <div className={cn("flex flex-col items-center justify-center gap-xs", className)}>{children}</div>;
};

const MainPageHeader = ({ title, subtitle }: Components.PageHeaderProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-xs">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      {subtitle && <span className="text-muted-foreground">{subtitle}</span>}
    </div>
  );
};

export {
  CustomPageFullContainer,
  CustomPageContainer,
  CustomPageTitle,
  CustomPageDescription,
  CustomPageBody,
  MainPageHeader,
};
