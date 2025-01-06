import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Metadata } from "next";

import remarkGfm from "remark-gfm";

import NotFoundPage from "@/app/not-found";

import { getArticleBySlug } from "@/utils/articleUtils";
import { parseTag as parseSlug } from "@/utils/tagUtils";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const awaitedSlug = (await params).slug;
  return { title: parseSlug(awaitedSlug) };
}

const ArticlePage = async ({ params }: PageParams) => {
  const awaitedSlug = (await params).slug;
  const { content } = getArticleBySlug(awaitedSlug);

  if (content.trim() === "") {
    return <NotFoundPage />;
  }

  return (
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
                {
                  <div className="codeblock-header-background">
                    <div className="codeblock-header">{label}</div>
                  </div>
                }
                <SyntaxHighlighter
                  {...rest}
                  showLineNumbers
                  PreTag="pre"
                  // eslint-disable-next-line react/no-children-prop
                  children={String(children)
                    .replace(/\n$/, "")
                    .replace(/^label:[^\n]+\n/, "")}
                  language={match[1]}
                  style={atomOneDark}
                />
              </>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}>
        {content}
      </Markdown>
    </article>
  );
};

export default ArticlePage;
