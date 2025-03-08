"use client";

import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable, atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { useTheme } from "next-themes";

import { Components } from "@/types/globals";

const CodeBlock = ({ language, code }: Components.CodeBlockProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <SyntaxHighlighter
      language={language.toLowerCase()}
      style={resolvedTheme === "light" ? atomOneLight : atomOneDarkReasonable}
      customStyle={{
        overflowX: "auto",
        background: `${resolvedTheme === "dark" ? "hsl(var(--accent))" : "hsl(var(--background))"}`,
        border: "solid 1px hsl(var(--border))",
        borderRadius: "4px",
        paddingTop: "15px",
        paddingBottom: "15px",
      }}
      showLineNumbers>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
