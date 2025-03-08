export const getNextTheme = (theme?: string): string => {
  if (!theme) return "system";
  else if (theme === "light") return "dark";
  else if (theme === "dark") return "system";
  else if (theme === "system") return "light";
  else return "system";
};
