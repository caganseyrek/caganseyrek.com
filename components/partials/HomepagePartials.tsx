import React from "react";

import { cn } from "@/shared/utils";

import type { Components } from "@/types/globals";

const HomepageImage = ({ className }: Omit<Components.BaseWrapperProps, "children">) => {
  return (
    <img
      src="/images/portrait_drawing.png"
      className={cn("w-[160px] h-[160px] rounded-lg", className)}
      alt="My profile picture"
      title="My profile picture"
      aria-label="My profile picture"
    />
  );
};

const HomepageContainer = ({ children, className }: Components.BaseWrapperProps) => {
  return <div className={cn("flex flex-col items-start justify-start gap-md", className)}>{children}</div>;
};

const HomepagePrimaryTitle = ({ children, className }: Components.BaseWrapperProps) => {
  return <h1 className={cn("text-foreground w-full text-2xl font-semibold tracking-tight", className)}>{children}</h1>;
};

const HomepageParagraph = ({ children, className }: Components.BaseWrapperProps) => {
  return <span className={cn("w-full text-foreground-muted text-pretty", className)}>{children}</span>;
};

const HomepageTechstack = ({ className, list }: Components.Partials.HomepageTechstackProps) => {
  return (
    <div className="w-full flex flex-row flex-wrap items-start justify-start gap-xs">
      {list.map((item) => (
        <span
          key={item.key}
          className={cn(
            "w-[calc((100%-20px)/5)] h-9 min-h-9 p-sm rounded-md",
            "flex flex-row items-center justify-start gap-sm",
            "text-sm font-medium select-none",
            "border border-container-border bg-container-background text-foreground-muted",
            "max-md:w-[calc((100%-15px)/4)] max-sm:w-[calc((100%-10px)/3)] max-[520px]:w-[calc((100%-5px)/2)]",
            className,
          )}>
          <item.icon /> {item.label}
        </span>
      ))}
    </div>
  );
};

export { HomepageImage, HomepageContainer, HomepagePrimaryTitle, HomepageParagraph, HomepageTechstack };
