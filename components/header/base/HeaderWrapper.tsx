import React from "react";

interface HeaderWrapperProps {
  children?: React.ReactNode;
}

const HeaderWrapper = ({ children }: HeaderWrapperProps) => {
  return <div className="w-[755px] m-auto flex items-center justify-between px-md">{children}</div>;
};

export default HeaderWrapper;
