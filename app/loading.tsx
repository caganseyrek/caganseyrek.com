import React from "react";

import { LoaderCircle } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-00 flex items-center justify-center">
      <LoaderCircle className="animate-spin" />
    </div>
  );
};

export default LoadingPage;
