import React from "react";

interface TagListProps {
  children?: React.ReactNode;
}

const TagList = ({ children }: TagListProps) => {
  return <div className="flex flex-row flex-wrap items-center justify-start gap-xs">{children}</div>;
};

export default TagList;
