import { DiMsqlServer } from "react-icons/di";
import {
  SiDotnet,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTypescript,
  SiUbuntu,
} from "react-icons/si";

import { Data } from "@/types/globals";

const techstack: Data.TechstackProps[] = [
  { key: "aspdotnetcore", label: "ASP.NET Core", icon: SiDotnet },
  { key: "springboot", label: "Spring Boot", icon: SiSpringboot },
  { key: "expressjs", label: "Express.js", icon: SiExpress },
  { key: "react", label: "React", icon: SiReact },
  { key: "nextjs", label: "Next.js", icon: SiNextdotjs },
  { key: "typescript", label: "TypeScript", icon: SiTypescript },
  { key: "sqlserver", label: "SQL Server", icon: DiMsqlServer },
  { key: "postgresql", label: "PostgreSQL", icon: SiPostgresql },
  { key: "wslubuntu", label: "Ubuntu (WSL)", icon: SiUbuntu },
  { key: "postman", label: "Postman", icon: SiPostman },
  { key: "git", label: "Git", icon: SiGit },
  { key: "github", label: "GitHub", icon: SiGithub },
  { key: "python", label: "Python", icon: SiPython },
  { key: "figma", label: "Figma", icon: SiFigma },
];

export default techstack;
