import React from "react";

import { Metadata } from "next";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/base-ui/accordion";
import CodeBlock from "@/components/CodeBlock";
import { ContentSection } from "@/components/layout/Content";
import { MainPageHeader } from "@/components/layout/partials/PagePartials";
import {
  SnippetDescription,
  SnippetDetails,
  SnippetHeader,
  SnippetLanguage,
  SnippetTitle,
} from "@/components/layout/partials/SnippetPartials";

import { snippets } from "@/shared/content/snippets";
import { headMetadata } from "@/shared/data/metadata";
import { cn } from "@/shared/utils/twUtils";

export const metadata: Metadata = {
  ...headMetadata,
  title: "Snippets",
  description: "Collection of handy code snippets",
};

const SnippetsPage = () => {
  return (
    <>
      <MainPageHeader title="Snippets" subtitle="Collection of handy code snippets" />
      <ContentSection>
        <Accordion type="single" collapsible>
          {snippets.map((snippet, index) => (
            <AccordionItem key={snippet.key} value={snippet.key} className={cn(index === 0 ? "" : "mt-sm")}>
              <AccordionTrigger>
                <SnippetDetails>
                  <SnippetHeader>
                    <SnippetTitle>{snippet.label}</SnippetTitle>
                    <SnippetDescription>{snippet.description}</SnippetDescription>
                  </SnippetHeader>
                  <SnippetLanguage>{snippet.language}</SnippetLanguage>
                </SnippetDetails>
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

export default SnippetsPage;
