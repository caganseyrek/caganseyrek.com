import React from "react";

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  if (!subtitle) {
    return <h3 className="text-xl font-semibold text-foreground">{title}</h3>;
  }

  return (
    <div className="flex items-center justify-center flex-col gap-xs">
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <span className="text-muted-foreground text-center">{subtitle}</span>
    </div>
  );
};

export default PageTitle;
