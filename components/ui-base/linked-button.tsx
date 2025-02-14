import React from "react";

import Link from "next/link";

import { cn } from "@/shared/utils/twUtils";

import { Button } from "./button";

interface ValueObjectProps {
  button: {
    variant: "default" | "white" | "ghost";
    size: "icon" | "default";
    className: string;
  };
  link: {
    href: string;
    isExternal: boolean;
    className: string;
  };
}

interface LinkedButtonProps extends BaseWrapperProps {
  button?: {
    variant?: "default" | "white" | "ghost";
    size?: "icon" | "default";
    className?: string;
  };
  link: {
    href: string;
    isExternal?: boolean;
    className?: string;
  };
}

const LinkedButton = ({ button, link, children }: LinkedButtonProps) => {
  const values: ValueObjectProps = {
    button: {
      variant: (button && button.variant) ?? "default",
      size: (button && button.size) ?? "default",
      className: (button && button.className) ?? "",
    },
    link: {
      href: link.href,
      isExternal: link.isExternal ?? false,
      className: link.className ?? "",
    },
  };

  return (
    <Link
      href={values.link.href}
      target={values.link.isExternal ? "_blank" : "_self"}
      className={cn(values.link.className)}>
      <Button variant={values.button.variant} size={values.button.size} className={cn(values.button.className)}>
        {children}
      </Button>
    </Link>
  );
};

export default LinkedButton;
