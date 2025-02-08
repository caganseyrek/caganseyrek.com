import React from "react";

interface HeaderBaseProps {
  children?: React.ReactNode;
}

const HeaderBase = ({ children }: HeaderBaseProps) => {
  return <header className="w-full border-b bg-accent p-md flex items-center justify-center">{children}</header>;
};

export default HeaderBase;
