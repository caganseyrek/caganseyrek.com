import React from "react";

import { AlignLeft } from "lucide-react";

import TocUtils, { HeadingNode } from "@/shared/utils/tocUtils";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui-base/accordion";
import LinkedButton from "./ui-base/linked-button";

interface TocSidebarProps {
  content: string;
}

const renderNodes = (nodes: HeadingNode[]) => {
  return nodes.map((node) => {
    const parsedText: string = TocUtils.parseText(node.text);
    return (
      <ul className="mx-3.5 flex min-w-0 flex-col gap-0 border-l px-2.5" key={parsedText}>
        <li>
          <LinkedButton
            link={{ href: "#" + parsedText }}
            button={{
              variant: "ghost",
              className:
                "rounded-sm font-normal w-full h-auto flex justify-start items-center overflow-hidden outline-none py-2 text-[0.95rem]",
            }}>
            {node.text}
          </LinkedButton>
          {node.children && node.children.length > 0 && renderNodes(node.children)}
        </li>
      </ul>
    );
  });
};

const TableOfContents = ({ content }: TocSidebarProps) => {
  const headings: string[] = content.split("\n").filter((items) => items.startsWith("#"));
  const headingNodes: HeadingNode[] = TocUtils.generateNodes(headings);

  return (
    <Accordion type="single" collapsible className="my-2 inline float-right">
      <AccordionItem value="toc">
        <AccordionTrigger>
          <span className="flex flex-row items-center justify-start gap-md">
            <AlignLeft className="w-4 h-4 min-w-4 min-h-4" />
            On this page
          </span>
        </AccordionTrigger>
        <AccordionContent className="flex w-full min-w-0 flex-col p-2 border-t max-h-[300px] overflow-y-auto">
          <ul className="w-full min-w-0 flex flex-col gap-0">
            {headingNodes.length === 0 ? (
              <span className="p-sm text-sm text-muted-foreground text-center">
                There isn&apos;t any headings in this page
              </span>
            ) : (
              headingNodes.map((node) => {
                const parsedText: string = TocUtils.parseText(node.text);
                return (
                  <li key={parsedText}>
                    <LinkedButton
                      link={{ href: "#" + parsedText }}
                      button={{
                        variant: "ghost",
                        className: "rounded-sm font-normal w-full h-auto flex justify-start py-2 text-[0.95rem]",
                      }}>
                      {node.text}
                    </LinkedButton>
                    {node.children && node.children.length > 0 && renderNodes(node.children)}
                  </li>
                );
              })
            )}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default TableOfContents;
