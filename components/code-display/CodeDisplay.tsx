"use client";

import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

import type { Components } from "@/types/globals";

const CodeBlock = ({ language, code }: Components.CodeBlock.CodeBlockProps) => {
  return (
    <SyntaxHighlighter
      language={language.toLowerCase()}
      style={atomOneDarkReasonable}
      customStyle={{
        overflowX: "auto",
        background: "hsl(var(--container-label-background))",
        borderRadius: "4px",
        paddingTop: "15px",
        paddingBottom: "15px",
      }}
      showLineNumbers>
      {code}
    </SyntaxHighlighter>
  );
};

export { CodeBlock };
