import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Metadata } from "next";

import remarkGfm from "remark-gfm";

import NotFoundPage from "@/app/not-found";

import { projectMetadata } from "@/data/projects/projectsMetadata";
import { getProjectArticleBySlug, ProjectArticleProps } from "@/utils/articleActions";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const awaitedSlug = (await params).slug;
  if (projectMetadata.filter((project) => project.slug === awaitedSlug)) {
    return { title: "Not Found" };
  }
  return { title: projectMetadata.filter((project) => project.slug === awaitedSlug)[0].title };
}

const ProjectPage = async ({ params }: PageParams) => {
  const awaitedSlug = (await params).slug;
  const projectArticle: ProjectArticleProps | null = getProjectArticleBySlug(awaitedSlug);

  if (!projectArticle || projectArticle.is_draft || !projectArticle.is_published) {
    return <NotFoundPage />;
  }

  return (
    <>
      <div
        className="rounded-lg h-[250px] w-[100%] p-[30px] flex flex-col items-start justify-end"
        style={{
          backgroundImage: `url('${projectArticle.preview_image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}>
        <div className="flex flex-col items-start justify-center gap-[15px]">
          <h1 className="text-3xl text-background font-bold tracking-tight">{projectArticle.title}</h1>
        </div>
      </div>
      <article>
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            code(props) {
              // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
              const { children, className, node, ...rest } = props;

              let label: string = "";
              const blockMatch: RegExpMatchArray | null = String(className).match(/-label:([^\n]+)/);
              if (blockMatch) {
                label = blockMatch[1];
              }

              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <>
                  {blockMatch && (
                    <div className="codeblock-header-background">
                      <div className="codeblock-header">{label}</div>
                    </div>
                  )}
                  <SyntaxHighlighter
                    showLineNumbers
                    PreTag="pre"
                    // eslint-disable-next-line react/no-children-prop
                    children={String(children)
                      .replace(/\n$/, "")
                      .replace(/^label:[^\n]+\n/, "")}
                    language={match[1]}
                    style={atomOneLight}
                    customStyle={{
                      backgroundColor: "rgb(244, 244, 245)",
                      border: "solid 1px rgb(228, 228, 231)",
                      borderTopLeftRadius: `${!blockMatch ? "8px" : "0px"}`,
                      borderTopRightRadius: `${!blockMatch ? "8px" : "0px"}`,
                    }}
                  />
                </>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}>
          {projectArticle.content_md}
        </Markdown>
      </article>
    </>
  );
};

export default ProjectPage;
