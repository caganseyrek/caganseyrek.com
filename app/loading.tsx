import React from "react";

import { Loader } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-00 flex items-center justify-center">
      <Loader className="animate-spin" />
    </div>
  );
};

export default LoadingPage;
