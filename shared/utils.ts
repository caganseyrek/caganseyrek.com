import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getNextTheme(theme?: string): string {
  if (!theme) return "system";
  else if (theme === "light") return "dark";
  else if (theme === "dark") return "system";
  else if (theme === "system") return "light";
  else return "system";
}
