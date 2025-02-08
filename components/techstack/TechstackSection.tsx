import React from "react";

import { Separator } from "../ui-base/separator";

interface TechstackSectionProps {
  children?: React.ReactNode;
  label: string;
}

const TechstackSection = ({ children, label }: TechstackSectionProps) => {
  return (
    <>
      <Separator decorative />
      <div className="p-md flex flex-col items-start justify-start gap-sm">
        <span className="font-semibold">{label}</span>
        {children}
      </div>
    </>
  );
};

export default TechstackSection;
