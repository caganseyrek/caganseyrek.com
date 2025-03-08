import { DiMsqlServer } from "react-icons/di";
import {
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
  SiTypescript,
  SiUbuntu,
} from "react-icons/si";

const techstack = [
  { key: "aspdotnetcore", label: "ASP.NET Core", icon: SiDotnet },
  { key: "springboot", label: "Spring Boot", icon: SiSpringboot },
  { key: "expressjs", label: "Express", icon: SiExpress },
  { key: "react", label: "React", icon: SiReact },
  { key: "nextjs", label: "Next.js", icon: SiNextdotjs },
  { key: "typescript", label: "TypeScript", icon: SiTypescript },
  { key: "wslubuntu", label: "WSL with Ubuntu", icon: SiUbuntu },
  { key: "sqlserver", label: "SQL Server", icon: DiMsqlServer },
  { key: "postgresql", label: "PostgreSQL", icon: SiPostgresql },
  { key: "postman", label: "Postman", icon: SiPostman },
  { key: "git", label: "Git", icon: SiGit },
  { key: "github", label: "GitHub", icon: SiGithub },
  { key: "python", label: "Python", icon: SiPython },
];

export default techstack;
