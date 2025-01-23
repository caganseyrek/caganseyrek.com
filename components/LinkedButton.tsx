import React, { ReactNode } from "react";

import Link from "next/link";

import { Button } from "./ui/button";

interface LinkedButtonProps {
  variant?: "default" | "white";
  size?: "icon" | "default";
  className?: string;
  linkClassName?: string;
  href: string;
  isExternal?: boolean;
  children?: ReactNode;
}

const LinkedButton = ({
  variant = "default",
  size = "default",
  className,
  linkClassName,
  href,
  isExternal = false,
  children,
}: LinkedButtonProps) => {
  return (
    <Link href={href} target={isExternal ? "_blank" : "_self"} className={linkClassName ? linkClassName : ""}>
      <Button variant={variant} size={size} className={className ? className : ""}>
        {children}
      </Button>
    </Link>
  );
};

export default LinkedButton;
