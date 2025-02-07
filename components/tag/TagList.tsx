import React from "react";

import TagListItem from "./TagListItem";

interface TagListProps {
  tags: string[];
}

const TagList = ({ tags }: TagListProps) => {
  return (
    <div className="flex flex-row gap-xs flex-wrap">
      {tags.map((tag) => (
        <TagListItem key={tag} bg="white" size="smaller">
          {tag}
        </TagListItem>
      ))}
    </div>
  );
};

export default TagList;
