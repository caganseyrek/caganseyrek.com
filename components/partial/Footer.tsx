import React from "react";

import Link from "next/link";

const Footer = () => {
  const repository: string = "https://github.com/caganseyrek/caganseyrek.com";

  return (
    <div className="bg-accent border-t">
      <footer className="w-[800px] text-muted-foreground flex items-center justify-center p-md m-auto max-[800px]:w-auto">
        <span className="py-1.5 text-center">
          The website is{" "}
          <Link href={repository} target="_blank" className="text-nowrap hover:text-foreground transition-colors">
            open-source
          </Link>{" "}
          and licensed under{" "}
          <Link
            href={repository + "/blob/main/LICENSE"}
            target="_blank"
            className="text-nowrap hover:text-foreground transition-colors">
            MIT license
          </Link>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
