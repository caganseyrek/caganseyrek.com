import React from "react";

import { cn } from "@/shared/utils/twUtils";

import { Components } from "@/types/globals";

const HomepageImage = ({ className }: Omit<Components.BaseWrapperProps, "children">) => {
  return (
    <img
      src="/images/general_cat.webp"
      className={cn("w-[160px] h-[160px] rounded-lg border-2 border-transparent dark:border-border", className)}
      alt="My profile picture"
      title="My profile picture"
      aria-label="My profile picture"
    />
  );
};

const HomepageContainer = ({ children, className }: Components.BaseWrapperProps) => {
  return (
    <div className={cn("flex flex-col items-start justify-start gap-md max-base:items-center", className)}>
      {children}
    </div>
  );
};

const HomepagePrimaryTitle = ({ children, className }: Components.BaseWrapperProps) => {
  return (
    <h1 className={cn("w-full text-2xl font-semibold tracking-tight max-base:text-center", className)}>{children}</h1>
  );
};

const HomepageSecondaryTitle = ({ children, className }: Components.BaseWrapperProps) => {
  return (
    <h2 className={cn("w-full text-lg font-semibold tracking-tight max-base:text-center", className)}>{children}</h2>
  );
};

const HomepageParagraph = ({ children, className }: Components.BaseWrapperProps) => {
  return (
    <span
      className={cn(
        "w-full text-muted-foreground text-pretty max-base:text-center max-base:w-[550px] max-sm:w-[420px] max-[420px]:w-full",
        className,
      )}>
      {children}
    </span>
  );
};

export { HomepageImage, HomepageContainer, HomepagePrimaryTitle, HomepageSecondaryTitle, HomepageParagraph };
