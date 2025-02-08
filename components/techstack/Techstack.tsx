import React from "react";

import TagList from "@/components/tag/TagList";
import TagListItem from "@/components/tag/TagListItem";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui-base/accordion";

import TechstackSection from "./TechstackSection";
import techstackList from "@/data/techstack";

const Techstack = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="techstack">
        <AccordionTrigger>See My Techstack</AccordionTrigger>
        <AccordionContent>
          {techstackList.map((section) => (
            <TechstackSection label={section.label} key={section.key}>
              <TagList>
                {section.list.map((item) => (
                  <TagListItem key={item.key}>
                    <item.icon className="w-4 h-4 min-w-4 min-h-4" />
                    {item.label}
                  </TagListItem>
                ))}
              </TagList>
            </TechstackSection>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Techstack;
