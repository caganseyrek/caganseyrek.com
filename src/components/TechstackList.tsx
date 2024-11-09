import { ReactNode } from "react";
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

const TechstackList = () => {
  const List: TechstackListProps[] = [
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

  return List;
};

export default TechstackList;
