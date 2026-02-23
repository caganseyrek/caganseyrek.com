import { BriefcaseBusinessIcon, FileTextIcon, HomeIcon } from "lucide-react";

import type { IconType } from "@/globals";

interface MenuItemProps {
  key: string;
  label: string;
  href: string;
  icon: IconType;
}

const menuItems: MenuItemProps[] = [
  {
    key: "homepage",
    label: "Ana Sayfa",
    href: "/",
    icon: HomeIcon,
  },
  {
    key: "services",
    label: "Hizmetler",
    href: "/hizmetler",
    icon: BriefcaseBusinessIcon,
  },
  {
    key: "blog",
    label: "Blog",
    href: "/blog",
    icon: FileTextIcon,
  },
];

export { type MenuItemProps, menuItems };
