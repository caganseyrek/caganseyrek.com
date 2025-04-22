"use client";

import React from "react";

import { Check, Copy } from "lucide-react";

import { Button } from "@/components/base/button";

import { cn } from "@/shared/utils";

import type { Components } from "@/types/globals";

const CopyButton = ({ className, code }: Components.CodeBlock.CopyButtonProps) => {
  const [isCopied, setIsCopied] = React.useState<boolean>(false);
  return (
    <Button
      className={cn("w-full rounded-sm mt-md bg-container-label-background border-none border-0", className)}
      onClick={() => {
        navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
      }}>
      {isCopied ? <Check /> : <Copy />} {isCopied ? "Copied to clipboard!" : "Click to copy the snippet"}
    </Button>
  );
};

export { CopyButton };
