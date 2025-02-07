import React, { ReactNode } from "react";

interface TagElementProps {
  hasHoverEffect?: boolean;
  bg?: "default" | "white";
  size?: "default" | "smaller";
  className?: string;
  children?: ReactNode;
}

const TagListItem = ({
  hasHoverEffect = false,
  bg = "default",
  size = "default",
  className = "",
  children,
}: TagElementProps) => {
  const commonStyles: string =
    "flex flex-row items-center justify-center border rounded-sm gap-xs text-sm font-medium select-none px-sm text-muted-foreground";

  const elementBg: string = bg === "default" ? "bg-accent" : "bg-background";
  const hoverEffect: string = hasHoverEffect ? "hover:text-foreground transition-colors" : "";

  const styles: string = `${commonStyles} ${elementBg} ${hoverEffect} ${size === "default" ? "py-xs" : "py-[3px]"} ${className}`;

  return <span className={styles}>{children}</span>;
};

export default TagListItem;
