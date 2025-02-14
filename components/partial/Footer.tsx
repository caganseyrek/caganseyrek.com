import React from "react";

import Link from "next/link";

import { AlignLeft, ArrowUp } from "lucide-react";

import LinkedButton from "../ui-base/linked-button";

const Footer = () => {
  const repository: string = "https://github.com/caganseyrek/caganseyrek.com";

  return (
    <div className="bg-accent border-t">
      <footer className="w-[800px] text-muted-foreground flex flex-row items-center justify-between p-md gap-md m-auto max-[800px]:w-auto max-[630px]:flex-col-reverse">
        <span className="max-[630px]:text-center">
          The website is{" "}
          <Link href={repository} target="_blank" className="underline hover:text-foreground">
            open-source
          </Link>{" "}
          and licensed under{" "}
          <Link href={repository + "/blob/main/LICENSE"} target="_blank" className="underline hover:text-foreground">
            MIT license
          </Link>
        </span>{" "}
        <div className="flex flex-row items-center justify-start gap-sm">
          <LinkedButton link={{ href: "/sitemap.xml", isExternal: true }} button={{ variant: "white" }}>
            <AlignLeft className="w-4 h-4 min-w-4 min-h-4" /> Sitemap
          </LinkedButton>
          <LinkedButton link={{ href: "#top" }} button={{ variant: "white", size: "icon" }}>
            <ArrowUp /> <span className="sr-only">Return to Top</span>
          </LinkedButton>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
