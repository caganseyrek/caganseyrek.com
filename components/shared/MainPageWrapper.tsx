import React from "react";

import { cn } from "@/utils/twUtils";

interface MainPageWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

const MainPageWrapper = ({ children, className }: MainPageWrapperProps) => {
  return (
    <div className={cn("w-[755px] max-[755px]:w-auto box-border m-auto px-md my-lg flex flex-col gap-y-md", className)}>
      {children}
    </div>
  );
};

export default MainPageWrapper;
