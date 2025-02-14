import React from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui-base/accordion";
import { Separator } from "@/components/ui-base/separator";
import { TagList, TagListItem } from "@/components/ui-base/tag-list";

import techstackList from "@/shared/data/techstackList";

interface TechstackSectionProps extends BaseWrapperProps {
  label: string;
}

const TechstackSection = ({ children, label }: TechstackSectionProps) => {
  return (
    <>
      <Separator decorative />
      <div className="p-md flex flex-col items-start justify-start gap-sm">
        <span className="font-semibold">{label}</span>
        {children}
      </div>
    </>
  );
};

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
