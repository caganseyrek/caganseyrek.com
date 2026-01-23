import { FileTextIcon, HomeIcon } from "lucide-react";

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
    label: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    key: "blog",
    label: "Blog",
    href: "/blog",
    icon: FileTextIcon,
  },
];

export { menuItems };
