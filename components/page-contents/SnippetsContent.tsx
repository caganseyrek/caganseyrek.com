"use client";

import React from "react";

import { Trash2 } from "lucide-react";

import { snippets } from "@/resources/content/snippets";

import { cn } from "@/shared/utils";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../base/accordion";
import { Button } from "../base/button";
import { Input } from "../base/input";
import { CodeBlock } from "../CodeDisplay";
import { ContentSection } from "../partials/ContentPartials";
import {
  SnippetContainer,
  SnippetDescription,
  SnippetHeader,
  SnippetLanguage,
  SnippetTitle,
} from "../partials/SnippetPartials";

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
      <div className="w-full flex flex-row items-center justify-center gap-sm">
        <Input
          value={searchParams}
          onChange={(e) => setSearchParams(e.currentTarget.value)}
          placeholder="Type to search snippets..."
          className="w-full"
        />
        <Button size="icon" variant="outlined" onClick={() => setSearchParams("")}>
          <Trash2 />
          <span className="sr-only">Clear search parameters</span>
        </Button>
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
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </ContentSection>
    </>
  );
};

export default SnippetsContent;
