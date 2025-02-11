import React from "react";

interface ProjectContainerProps {
  children?: React.ReactNode;
}

const ProjectContainer = ({ children }: ProjectContainerProps) => {
  return (
    <div className="min-w-[calc((100%-15px)/2)] max-[570px]:min-w-[calc(100%/2)] flex flex-col items-start justify-start border rounded-lg flex-1 max-[570px]:w-full">
      {children}
    </div>
  );
};

export default ProjectContainer;
