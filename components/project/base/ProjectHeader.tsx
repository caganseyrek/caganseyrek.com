import React from "react";

import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

interface ProjectHeaderProps {
  repositoryLink: string;
  title: string;
  description: string;
}

const ProjectHeader = ({ repositoryLink, title, description }: ProjectHeaderProps) => {
  return (
    <div className="bg-accent rounded-t-[7px] flex flex-col items-start justify-center w-full p-md border-b">
      <Link href={repositoryLink} target="_blank" className="flex flex-row items-center justify-start gap-sm">
        <span className="font-semibold inline-block">{title}</span>
        <ArrowUpRight className="w-4 h-4 min-w-4 min-h-4" />
      </Link>
      <span className="text-muted-foreground flex-1 text-sm">{description}</span>
    </div>
  );
};

export default ProjectHeader;
