import type { IconType as ReactIconsType } from "react-icons";
import { DiMsqlServer } from "react-icons/di";
import { RiNextjsFill, RiNodejsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiDotnet,
  SiExpress,
  SiFastify,
  SiFirebase,
  SiJsonwebtokens,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
} from "react-icons/si";

import { AppWindowIcon, DatabaseIcon, HardDriveIcon } from "lucide-react";

import type { IconType } from "@/globals";

interface ServiceProps {
  key: string;
  icon: IconType;
  title: string;
  description: string;
  technologies: {
    label: string;
    icon: ReactIconsType;
  }[];
}

const services: ServiceProps[] = [
  {
    key: "web-applications",
    icon: AppWindowIcon,
    title: "Web Uygulamaları",
    description:
      "Projenizin ihtiyaçlarına göre özelleştirilmiş web uygulamaları geliştiriyorum. Pratik ve etkili çözümlerle hedeflerinize ulaşmanıza yardımcı oluyorum.",
    technologies: [
      { label: "Next.js", icon: RiNextjsFill },
      { label: "React", icon: SiReact },
      { label: "React Query", icon: SiReactquery },
      { label: "Tailwind", icon: RiTailwindCssFill },
    ],
  },
  {
    key: "backend-api-development",
    icon: HardDriveIcon,
    title: "Backend ve API Geliştirme",
    description:
      "Web ve mobil uygulamalar için sağlam backend sistemleri ve API’ler geliştiriyorum. Düzenli ve okunabilir kod yazarak, projenizin büyümesine uygun güçlü bir temel sağlıyorum.",
    technologies: [
      { label: "Node.js", icon: RiNodejsFill },
      { label: "ASP.NET Core", icon: SiDotnet },
      { label: "Fastify", icon: SiFastify },
      { label: "Express.js", icon: SiExpress },
      { label: "JWT", icon: SiJsonwebtokens },
    ],
  },
  {
    key: "database-design-data-modeling",
    icon: DatabaseIcon,
    title: "Veritabanı Tasarımı ve Veri Modelleme",
    description:
      "Projenizin ihtiyaçlarına uygun, düzenli ve sürdürülebilir veritabanı yapıları tasarlıyorum. Gereksiz karmaşıklıktan kaçınarak, projenize uygun veri modelleri oluşturuyorum.",
    technologies: [
      { label: "PostgreSQL", icon: SiPostgresql },
      { label: "MSSQL", icon: DiMsqlServer },
      { label: "Entity Framework", icon: SiDotnet },
      { label: "Prisma", icon: SiPrisma },
      { label: "Firebase", icon: SiFirebase },
    ],
  },
];

export { services };
