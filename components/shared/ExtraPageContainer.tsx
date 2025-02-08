import React from "react";

interface ExtraPageContainer {
  children?: React.ReactNode;
}

const ExtraPageContainer = ({ children }: ExtraPageContainer) => {
  return <div className="flex flex-col items-center justify-center gap-xs">{children}</div>;
};

export default ExtraPageContainer;
