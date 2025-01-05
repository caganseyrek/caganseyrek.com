import React from "react";
import { ReactNode } from "react";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiVisualstudio } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import {
  SiApachemaven,
  SiCss3,
  SiDocker,
  SiDotnet,
  SiEslint,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiGit,
  SiGithub,
  SiGnubash,
  SiHtml5,
  SiI18Next,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiLinux,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiSpringboot,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

interface TechstackListProps {
  key: string;
  label: string;
  list: Array<{
    key: string;
    label: string;
    icon: ReactNode;
  }>;
}

const techstackList: TechstackListProps[] = [
  {
    key: "frontend",
    label: "Front-end",
    list: [
      { key: "react", label: "React", icon: <SiReact /> },
      { key: "reactquery", label: "React-Query", icon: <SiReactquery /> },
      { key: "reactrouter", label: "React-Router", icon: <SiReactrouter /> },
      { key: "nextjs", label: "Next.js", icon: <SiNextdotjs /> },
      { key: "tailwindcss", label: "TailwindCSS", icon: <SiTailwindcss /> },
      { key: "i18next", label: "I18Next", icon: <SiI18Next /> },
      { key: "jest", label: "Jest", icon: <SiJest /> },
      { key: "eslint", label: "ESLint", icon: <SiEslint /> },
      { key: "vite", label: "Vite", icon: <SiVite /> },
      { key: "typescript", label: "TypeScript", icon: <SiTypescript /> },
      { key: "javascript", label: "JavaScript", icon: <SiJavascript /> },
      { key: "css", label: "CSS", icon: <SiCss3 /> },
      { key: "html", label: "HTML", icon: <SiHtml5 /> },
    ],
  },
  {
    key: "backend",
    label: "Back-end",
    list: [
      { key: "expressjs", label: "Express.js", icon: <SiExpress /> },
      { key: "springboot", label: "Springboot", icon: <SiSpringboot /> },
      { key: "maven", label: "Maven", icon: <SiApachemaven /> },
      { key: "aspdotnetcore", label: "ASP.NET Core", icon: <SiDotnet /> },
      { key: "fastapi", label: "FastAPI", icon: <SiFastapi /> },
      { key: "nodejs", label: "Node.js", icon: <SiNodedotjs /> },
      { key: "postgresql", label: "PostgreSQL", icon: <SiPostgresql /> },
      { key: "mongodb", label: "MongoDB", icon: <SiMongodb /> },
      { key: "jwt", label: "JWT", icon: <SiJsonwebtokens /> },
      { key: "java", label: "Java", icon: <FaJava /> },
      { key: "csharp", label: "C#", icon: <TbBrandCSharp /> },
      { key: "python", label: "Python", icon: <SiPython /> },
    ],
  },
  {
    key: "devtools",
    label: "Dev Tools",
    list: [
      { key: "gnulinux", label: "GNU/Linux", icon: <SiLinux /> },
      { key: "docker", label: "Docker", icon: <SiDocker /> },
      { key: "postman", label: "Postman", icon: <SiPostman /> },
      { key: "bash", label: "Bash", icon: <SiGnubash /> },
      { key: "git", label: "Git", icon: <SiGit /> },
      { key: "github", label: "GitHub", icon: <SiGithub /> },
      { key: "visualstudiocode", label: "VSCode", icon: <BiLogoVisualStudio /> },
      { key: "visualstudio", label: "Visual Studio", icon: <DiVisualstudio /> },
      { key: "swagger", label: "Swagger", icon: <SiSwagger /> },
      { key: "netlify", label: "Netlify", icon: <SiNetlify /> },
      { key: "figma", label: "Figma", icon: <SiFigma /> },
      { key: "notion", label: "Notion", icon: <SiNotion /> },
    ],
  },
];

const Techstack = () => {
  return (
    <section>
      <Accordion key={"accordiond-1"} type="single" collapsible className="w-full bg-accent border rounded-lg">
        <AccordionItem key="accordion-item-1" value="item-1" className="border-0">
          <AccordionTrigger key="accordion-trigger-1" className="p-[15px] text-md font-semibold">
            Toggle my Techstack
          </AccordionTrigger>
          <AccordionContent key="accordion-content-1" className="bg-background pb-0 rounded-b-lg">
            {techstackList.map((category) => (
              <React.Fragment key={category.key}>
                <Separator orientation="horizontal" decorative />
                <div className="w-[100%] flex flex-col justify-start items-start gap-y-[5px] p-[15px]">
                  <h3 className="text-base font-semibold tracking-tight">{category.label}</h3>
                  <div className="flex items-start justify-start flex-row flex-wrap gap-x-[5px] gap-y-[5px]">
                    {category.list.map((item) => (
                      <div
                        key={item.key}
                        className="bg-accent py-[5px] px-[7px] gap-x-[5px] flex items-center justify-center rounded-sm text-muted-foreground border text-sm font-medium hover:text-foreground transition-colors">
                        {item.icon}
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Techstack;
