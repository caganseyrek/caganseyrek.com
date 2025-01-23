import React from "react";

import TagElement from "./TagElement";

interface TagListProps {
  tags: string[];
}

const TagListElement = ({ tags }: TagListProps) => {
  return (
    <div className="flex flex-row gap-xs flex-wrap">
      {tags.map((tag) => (
        <TagElement key={tag} bg="white" size="smaller">
          {tag}
        </TagElement>
      ))}
    </div>
  );
};

export default TagListElement;
