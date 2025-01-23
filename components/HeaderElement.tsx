import React, { ReactNode } from "react";

interface HeadingElementProps {
  type?: "page-header" | "section-header" | "intro";
  className?: string;
  children?: ReactNode;
}

const HeaderElement = ({ type = "page-header", className = "", children }: HeadingElementProps) => {
  if (type === "intro") {
    return <h1 className={`text-2xl tracking-tight font-bold leading-tight ${className}`}>{children}</h1>;
  }
  return type === "page-header" ? (
    <h1 className={`text-2xl font-bold tracking-tight m-0 p-0 ${className}`}>{children}</h1>
  ) : (
    <h3 className={`text-xl tracking-tight font-semibold flex flex-row items-center justify-center ${className}`}>
      {children}
    </h3>
  );
};

export default HeaderElement;
