import { ReactNode, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import {
  SiAxios,
  SiCsharp,
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
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiTypescript,
  SiUbuntu,
  SiVisualstudio,
  SiVisualstudiocode,
  SiVite,
} from "react-icons/si";

import { TECHSTACK_LABELS } from "@/constants/texts";

interface TechstackListItemProps {
  key: string;
  label: string;
  icon: ReactNode;
}

interface TechstackListProps {
  key: string;
  label: string;
  list: TechstackListItemProps[];
}

const TechstackList: TechstackListProps[] = [
  {
    key: "frontend",
    label: "Front-end",
    list: [
      { key: "react", label: "React", icon: <SiReact /> },
      { key: "eslint", label: "ESLint", icon: <SiEslint /> },
      { key: "vite", label: "Vite", icon: <SiVite /> },
      { key: "reactquery", label: "React-Query", icon: <SiReactquery /> },
      { key: "reactrouter", label: "React-Router", icon: <SiReactrouter /> },
      { key: "axios", label: "Axios", icon: <SiAxios /> },
      { key: "jest", label: "Jest", icon: <SiJest /> },
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
      { key: "aspdotnetcore", label: "ASP.NET Core", icon: <SiDotnet /> },
      { key: "fastapi", label: "FastAPI", icon: <SiFastapi /> },
      { key: "nodejs", label: "Node.js", icon: <SiNodedotjs /> },
      { key: "csharp", label: "C#", icon: <SiCsharp /> },
      { key: "python", label: "Python", icon: <SiPython /> },
      { key: "jwt", label: "JWT", icon: <SiJsonwebtokens /> },
      { key: "mongodb", label: "MongoDB", icon: <SiMongodb /> },
      { key: "postgresql", label: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    key: "devtools",
    label: "Dev Tools",
    list: [
      { key: "vscode", label: "VSCode", icon: <SiVisualstudiocode /> },
      { key: "visualstudio", label: "Visual Studio", icon: <SiVisualstudio /> },
      { key: "wslubuntu", label: "WSL with Ubuntu", icon: <SiUbuntu /> },
      { key: "git", label: "Git", icon: <SiGit /> },
      { key: "github", label: "GitHub", icon: <SiGithub /> },
      { key: "postman", label: "Postman", icon: <SiPostman /> },
      { key: "docker", label: "Docker", icon: <SiDocker /> },
      { key: "bashscripts", label: "Bash Scripts", icon: <SiGnubash /> },
      { key: "figma", label: "Figma", icon: <SiFigma /> },
    ],
  },
];

const Techstack = () => {
  const [isContainerToggled, setIsContainerToggled] = useState<boolean>(false);

  return (
    <section id="techstack" aria-labelledby="techstack-header">
      <button
        id="techstack-toggle"
        className={isContainerToggled ? "toggled" : "untoggled"}
        onClick={() => setIsContainerToggled(!isContainerToggled)}
        aria-expanded={isContainerToggled}
        aria-controls="techstack-content">
        <b>
          {isContainerToggled ? TECHSTACK_LABELS.HEADER.HIDE : TECHSTACK_LABELS.HEADER.SEE}{" "}
          {TECHSTACK_LABELS.HEADER.MAIN}
        </b>
        {isContainerToggled ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      <div
        id="techstack-content"
        className={isContainerToggled ? "toggled" : "untoggled"}
        aria-hidden={!isContainerToggled}>
        {TechstackList.map((category) => (
          <div className="techstack-category" key={category.key}>
            <b>{category.label}</b>
            <div className="techstack-items">
              {category.list.map((item) => (
                <div key={item.key}>
                  {item.icon}
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Techstack;
