"use client";

import React from "react";

import LoadingPage from "@/app/loading";

import { Components } from "@/types/globals";

const MountCheck = ({ children }: Components.BaseWrapperProps) => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return <LoadingPage />;

  return children;
};

export default MountCheck;
