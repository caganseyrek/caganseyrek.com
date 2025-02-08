import React from "react";

interface ProjectBodyProps {
  children?: React.ReactNode;
}

const ProjectBody = ({ children }: ProjectBodyProps) => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-sm p-md bg-background rounded-b-lg">
      {children}
    </div>
  );
};

export default ProjectBody;
