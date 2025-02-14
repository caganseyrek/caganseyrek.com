import React from "react";

import { cn } from "@/shared/utils/twUtils";

interface PageWrapperProps extends BaseWrapperProps {
  className?: string;
}

const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return (
    <div
      className={cn(
        "w-[800px] max-[800px]:w-auto h-full box-border m-auto px-md my-lg flex flex-col flex-1 gap-y-md",
        className,
      )}>
      {children}
    </div>
  );
};

const InnerContainer = ({ children }: BaseWrapperProps) => {
  return <div className="flex flex-col items-center justify-center gap-xs">{children}</div>;
};

export { PageWrapper, InnerContainer };
