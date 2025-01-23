import React from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

import TagElement from "../TagElement";
import techstackList from "@/data/techstack";

const TechstackSection = () => {
  return (
    <Accordion type="single" collapsible className="w-full bg-accent border rounded-lg">
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className="p-md text-base font-semibold text-muted-foreground">
          Toggle my Techstack
        </AccordionTrigger>
        <AccordionContent className="bg-background p-0 rounded-b-lg">
          {techstackList.map((category) => (
            <React.Fragment key={category.key}>
              <Separator orientation="horizontal" decorative />
              <div className="w-full flex flex-col justify-start items-start gap-xs p-md">
                <h3 className="text-base font-semibold tracking-tight">{category.label}</h3>
                <div className="flex items-start justify-start flex-row flex-wrap gap-xs">
                  {category.list.map((item) => (
                    <TagElement key={item.key} hasHoverEffect>
                      <item.icon className="icon-14" />
                      {item.label}
                    </TagElement>
                  ))}
                </div>
              </div>
            </React.Fragment>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default TechstackSection;
