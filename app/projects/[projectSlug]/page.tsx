import React from "react";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Metadata } from "next";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import NotFoundPage from "@/app/not-found";

import TableOfContents from "@/components/TableOfContents";
import LinkedButton from "@/components/ui-base/linked-button";
import { PageWrapper } from "@/components/ui-base/page-wrapper";

import { ProjectDetailProps, projectList } from "@/shared/data/projectsList";
import { Loader, ProjectFileProps } from "@/shared/utils/loader";
import { cn } from "@/shared/utils/twUtils";

interface ProjectDocsPageParams {
  params: Promise<{ projectSlug: string }>;
}

export async function generateMetadata({ params }: ProjectDocsPageParams): Promise<Metadata> {
  const awaitedProjectSlug: string = (await params).projectSlug;
  const projectDetails: ProjectDetailProps[] = projectList.filter((project) => project.slug === awaitedProjectSlug);

  if (projectDetails.length === 0) {
    return { title: "Not Found" };
  }
  return { title: projectDetails[0].title + " Docs" };
}

const ProjectDocsPage = async ({ params }: ProjectDocsPageParams) => {
  const awaitedProjectSlug: string = (await params).projectSlug;

  const loadedProject: ProjectFileProps | null = Loader.loadProject(awaitedProjectSlug);

  if (!loadedProject) {
    return <NotFoundPage />;
  }

  return (
    <PageWrapper>
      <div className="flex flex-row items-end justify-between gap-md max-[650px]:flex-col max-[650px]:items-start max-[650px]:justify-start">
        <div className="flex flex-col items-start justify-start gap-sm">
          <Link href={"#" + awaitedProjectSlug}>
            <h1 className="text-3xl font-semibold tracking-tight" id={awaitedProjectSlug}>
              {loadedProject.title}
            </h1>
          </Link>
          <span className="text-muted-foreground">{loadedProject.repository.description}</span>
        </div>
        <LinkedButton link={{ href: loadedProject.repository.url, isExternal: true }}>
          Repository <ArrowUpRight />
        </LinkedButton>
      </div>
      <TableOfContents content={loadedProject.content} />
      <article className="w-full">
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[
            rehypeSanitize,
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: "wrap" }],
            [rehypeExternalLinks, { target: "_blank" }],
          ]}
          components={{
            code: (props) => {
              const { children, className, ...remainingProps } = props;
              const match = /language-(\w+)/.exec(className || "");

              return match ? (
                <SyntaxHighlighter
                  PreTag="div"
                  language={match[1]}
                  showLineNumbers
                  style={atomOneLight}
                  lineNumberStyle={{ color: "hsl(240 3.8% 46.1%)" }}
                  customStyle={{
                    fontFamily: "Geist Mono",
                    borderRadius: "6px",
                    background: "hsl(240 4.8% 95.9%)",
                    backgroundColor: "hsl(240 4.8% 95.9%)",
                    border: "solid 1px hsl(240 5.9% 90%)",
                  }}>
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code
                  {...remainingProps}
                  className={cn(
                    "bg-accent border rounded-md font-mono text-foreground py-[1px] px-1 text-sm",
                    className,
                  )}>
                  {children}
                </code>
              );
            },
          }}>
          {loadedProject.content}
        </Markdown>
      </article>
    </PageWrapper>
  );
};

export default ProjectDocsPage;
