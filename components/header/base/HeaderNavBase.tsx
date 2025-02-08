import React from "react";

interface HeaderNavBaseProps {
  children?: React.ReactNode;
}

const HeaderNavBase = ({ children }: HeaderNavBaseProps) => {
  return (
    <nav className="flex flex-row gap-x-[7px] max-[570px]:hidden" role="navigation" aria-label="Main Navigation">
      {children}
    </nav>
  );
};

export default HeaderNavBase;
