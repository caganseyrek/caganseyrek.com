"use client";

import React from "react";

import { Trash2 } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/base/accordion";
import { Button } from "@/components/base/button";
import { Input } from "@/components/base/input";

import { ContentSection } from "@/components/partials/ContentPartials";
import {
  SnippetContainer,
  SnippetDescription,
  SnippetHeader,
  SnippetLanguage,
  SnippetTitle,
} from "@/components/partials/SnippetPartials";

import { CodeBlock } from "@/components/code-display/CodeDisplay";
import { CopyButton } from "@/components/code-display/CopyButton";

import { snippets } from "@/content/snippets";

import { cn } from "@/shared/utils";

const SnippetsContent = () => {
  const [searchParams, setSearchParams] = React.useState<string>("");

  const snippetsMap = new Map<string, string>();
  snippets.forEach((snippet) => {
    snippetsMap.set(
      snippet.key,
      [snippet.key, snippet.label, snippet.description, snippet.language].join(" ").toLowerCase(),
    );
  });

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-sm">
        <div className="w-full flex flex-row items-center justify-center gap-sm">
          <Input
            value={searchParams}
            onChange={(e) => setSearchParams(e.currentTarget.value)}
            placeholder="Type to filter snippets..."
            className="w-full"
          />
          <Button size="icon" variant="outlined" onClick={() => setSearchParams("")}>
            <Trash2 />
            <span className="sr-only">Clear search parameters</span>
          </Button>
        </div>
        <div className="w-full py-0.5 px-md text-xs text-foreground-muted">
          Each snippet has a copy button at the bottom.
        </div>
      </div>
      <ContentSection>
        <Accordion type="single" collapsible>
          {snippets
            .filter((snippet) => {
              if (!searchParams.trim()) return true;

              const snippetKeywords: string | undefined = snippetsMap.get(snippet.key);
              if (!snippetKeywords) return false;

              const normalizedSearchParams: string[] = searchParams.trim().toLowerCase().split(/\s+/);
              return normalizedSearchParams.every((word) => snippetKeywords.includes(word));
            })
            .map((snippet, index) => (
              <AccordionItem key={snippet.key} value={snippet.key} className={cn(index === 0 ? "" : "mt-sm")}>
                <AccordionTrigger>
                  <SnippetContainer>
                    <SnippetHeader>
                      <SnippetTitle>{snippet.label}</SnippetTitle>
                      <SnippetDescription>{snippet.description}</SnippetDescription>
                    </SnippetHeader>
                    <SnippetLanguage>{snippet.language}</SnippetLanguage>
                  </SnippetContainer>
                </AccordionTrigger>
                <AccordionContent>
                  <CodeBlock language={snippet.language} code={snippet.code} />
                  <CopyButton code={snippet.code} />
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </ContentSection>
    </>
  );
};

export { SnippetsContent };
