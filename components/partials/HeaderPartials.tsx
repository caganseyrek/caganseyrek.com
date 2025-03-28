import Link from "next/link";

import { cn } from "@/shared/utils";

import { Components } from "@/types/globals";

const HeaderWrapper = ({ children, className }: Components.BaseWrapperProps) => {
  return (
    <header
      className={cn(
        "w-[800px] h-[67px]",
        "border-b border-neutral-700/40",
        "gap-md flex flex-row items-center justify-between",
        "mx-auto py-md",
        "max-base:w-full max-base:p-md",
        className,
      )}>
      {children}
    </header>
  );
};

const HeaderLogo = () => {
  return (
    <Link href="/" className="flex flex-row items-center justify-center gap-md">
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="27" viewBox="0 0 35 27" fill="none">
        <path
          d="M15.3121 2.45928C15.4884 2.22216 15.455 1.88472 15.2174 1.70943C13.7421 0.620619 12.0413 0 10.2308 0C4.58047 0 0 6.04416 0 13.5C0 20.1985 3.69716 25.7575 8.54568 26.8178C8.86476 26.8875 9.15385 26.6342 9.15385 26.3067V21.1709C9.15385 20.9584 9.02771 20.7691 8.84559 20.6607C7.14605 19.6484 5.92308 16.8248 5.92308 13.5C5.92308 9.32472 7.8517 5.94 10.2308 5.94C10.8956 5.94 11.5253 6.20432 12.0875 6.67634C12.4193 6.95492 12.9735 6.85757 13.1297 6.45287C13.6964 4.98452 14.4348 3.63968 15.3121 2.45928Z"
          className="fill-neutral-100"
        />
        <path
          d="M11.6159 20.6607C11.4338 20.7691 11.3077 20.9584 11.3077 21.1709V26.3067C11.3077 26.6342 11.5968 26.8875 11.9159 26.8178C16.7644 25.7575 20.4615 20.1985 20.4615 13.5C20.4615 9.32473 22.3902 5.94 24.7692 5.94C27.1483 5.94 29.0769 9.32473 29.0769 13.5C29.0769 17.6753 27.1483 21.06 24.7692 21.06C24.1044 21.06 23.4748 20.7957 22.9125 20.3237C22.5807 20.0451 22.0265 20.1424 21.8703 20.5471C21.3036 22.0155 20.5652 23.3603 19.6879 24.5407C19.5116 24.7778 19.5451 25.1153 19.7826 25.2906C21.2579 26.3794 22.9587 27 24.7692 27C30.4195 27 35 20.9558 35 13.5C35 6.04416 30.4195 0 24.7692 0C19.1189 0 14.5385 6.04416 14.5385 13.5C14.5385 16.8248 13.3155 19.6484 11.6159 20.6607Z"
          className="fill-neutral-100"
        />
      </svg>
      <span className="sr-only">Go to homepage</span>
    </Link>
  );
};

const HeaderRightSection = ({ children, className }: Components.BaseWrapperProps) => {
  return (
    <section className={cn("flex flex-row items-center justify-center gap-sm max-sm:hidden", className)}>
      {children}
    </section>
  );
};

export { HeaderWrapper, HeaderLogo, HeaderRightSection };
