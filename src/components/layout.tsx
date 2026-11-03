import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

import { Button } from "@/components/base/button";
import { FlexBox } from "@/components/base/flexbox";

import type { WrapperProps } from "@/types";

export function Layout({ children }: Pick<WrapperProps, "children">) {
  return (
    <FlexBox className="mx-auto flex max-w-200 flex-col items-start justify-start gap-6 px-3 pt-6 pb-6 max-[800px]:pt-3">
      <FlexBox className="bg-gray-1 border-gray-2 w-full justify-between rounded-lg border">
        <Link className="px-3 py-2 text-2xl font-bold tracking-tighter" to="/">
          <img src="/images/logo.svg" className="size-8.5" alt="Logo" title="Logo" aria-label="Logo" />
        </Link>
        <FlexBox className="gap-2 p-2">
          <Button variant="containerButton" className="max-[475px]:size-8.5" asChild>
            <Link to="https://github.com/caganseyrek">
              <FaGithub /> <span className="max-[475px]:hidden">GitHub</span>
            </Link>
          </Button>

          <Button variant="containerButton" className="max-[475px]:size-8.5" asChild>
            <Link to="https://www.linkedin.com/in/caganseyrek/">
              <FaLinkedin /> <span className="max-[475px]:hidden">LinkedIn</span>
            </Link>
          </Button>
        </FlexBox>
      </FlexBox>

      {children}
    </FlexBox>
  );
}
