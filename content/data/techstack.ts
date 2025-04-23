import { DiMsqlServer } from "react-icons/di";
import {
  SiDocker,
  SiDotnet,
  SiExpress,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSpringboot,
  SiSqlite,
  SiTypescript,
  SiUbuntu,
} from "react-icons/si";

import type { Data } from "@/types/globals";

const techstack: Data.TechstackProps[] = [
  { key: "aspdotnetcore", label: "ASP.NET Core", icon: SiDotnet },
  { key: "springboot", label: "Spring Boot", icon: SiSpringboot },
  { key: "expressjs", label: "Express.js", icon: SiExpress },
  { key: "react", label: "React", icon: SiReact },
  { key: "nextjs", label: "Next.js", icon: SiNextdotjs },
  { key: "typescript", label: "TypeScript", icon: SiTypescript },
  { key: "postgresql", label: "PostgreSQL", icon: SiPostgresql },
  { key: "sqlserver", label: "SQL Server", icon: DiMsqlServer },
  { key: "sqlite", label: "SQLite", icon: SiSqlite },
  { key: "wslubuntu", label: "Ubuntu (WSL)", icon: SiUbuntu },
  { key: "docker", label: "Docker", icon: SiDocker },
  { key: "postman", label: "Postman", icon: SiPostman },
  { key: "git", label: "Git", icon: SiGit },
  { key: "github", label: "GitHub", icon: SiGithub },
  { key: "python", label: "Python", icon: SiPython },
];

export { techstack };
