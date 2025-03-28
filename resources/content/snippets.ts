import { Content } from "@/types/globals";

export const snippets: Content.Snippets.SnippetProps[] = [
  {
    key: "projectsetup",
    label: "Project Setup",
    description: "Installs all necessary tools for a full-stack Spring Boot and PSQL project",
    language: "bash",
    code: `#!/bin/bash

MAVEN_VERSION="apache-maven-3.9.9"
MAVEN_SOURCE="https://dlcdn.apache.org/maven/maven-3/3.9.9/binaries/$MAVEN_VERSION.tar.gz"

NODE_VERSION="22"
NVM_SOURCE="https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh"
PNPM_SOURCE="https://get.pnpm.io/install.sh"

# Uptade and upgrade the package manager

sudo apt update
sudo apt upgrade

# NVM AND NODE
echo "Info: Installing Node Version Manager..."

curl -o- "$NVM_SOURCE" | bash
nvm install "$NODE_VERSION"

echo "Info: Succesfully installed Node Version Manager."

# PNPM
echo "Info: Installing pnpm..."

curl -fsSL "$PNPM_SOURCE"| sh -

echo "Info: Successfully installed pnpm."

# JAVA
echo "Info: Installing JDK..."

sudo apt install default-jre

echo "Info: Successfully installed JDK..."

# MAVEN
echo "Info: Installing Maven..."

if ! grep -q 'export PATH=$MAVEN_HOME/bin:$PATH' ~/.bashrc; then
  cd /tmp
  wget "$MAVEN_SOURCE"
  sudo tar -xvzf "$MAVEN_VERSION-bin.tar.gz" -C /opt
  sudo rm -rf "$MAVEN_VERSION-bin.tar.gz"

  echo "" >> ~/.bashrc
  echo "export MAVEN_HOME=/opt/$MAVEN_VERSION" >> ~/.bashrc
  echo 'PATH=$MAVEN_HOME/bin:$PATH' >> ~/.bashrc

  source ~/.bashrc

  echo "Info: Successfully installed Maven."
else
  echo "Info: Maven environment variables found in ~./bashrc. Skipping..."
fi

# POSTGRESQL
echo "Info: Installing PostgreSQL..."

sudo apt install postgresql postgresql-contrib

echo "Info: Successfully installed PostgreSQL."`,
  },
  {
    key: "runner",
    label: "App Runner",
    description: "Starts multiple apps in the same terminal using 'concurrently'",
    language: "bash",
    code: `#!/bin/bash

SCRIPT_DIR="$(dirname "$(realpath "$0")")"
ROOT_DIR="$SCRIPT_DIR/.." # Assuming the script is in a folder at the project root

SOME_APP="$ROOT_DIR/path/to/some-app"
ANOTHER_APP="$ROOT_DIR/path/to/another-app"

pnpm concurrently -k \\
  -n "some_app,another_app" \\
  -c "bgBlue,bgRed" \\
  "cd $SOME_APP && pnpm dev" \\
  "cd $ANOTHER_APP && ./mvnw spring-boot:run"`,
  },
  {
    key: "reactform",
    label: "React Form",
    description: "Template for a react form component with submit handler",
    language: "TypeScript",
    code: `"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// From shadcn/ui components
import { Button } from "@/components/base-ui/button";
import { Input } from "@/components/base-ui/input";
import { Label } from "@/components/base-ui/label";

import { cn } from "@/shared/utils/twUtils";

const someSchema = z.object({
  someString: z.string({ message: "Should be string" }).nonempty({ message: "Should not be empty" }),
});

const SomeFormComponent = () => {
  const form = useForm<z.infer<typeof someSchema>>({
    resolver: zodResolver(someSchema),
    defaultValues: {
      someString: "",
    },
  });

  const HandleSubmit = async (formData: z.infer<typeof someSchema>): Promise<void> => {
    // handle submit here
  };

  return (
    <form noValidate onSubmit={form.HandleSubmit}>
      <Controller
        control={form.control}
        name="someString"
        render={({ field }) => (
          <div>
            <Label htmlFor="someString">Some String</Label>
            <Input
              id="someString"
              className={cn(form.formState.errors.someString && "border-destructive")}
              {...field}
            />
            {form.formState.errors.name && (
              <span className="text-xs text-destructive">{form.formState.errors.name.message}</span>
            )}
          </div>
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};`,
  },
  {
    key: "reactcontext",
    label: "React Context",
    description: "Simple react context with a provider to use as a starting point of a context",
    language: "TypeScript",
    code: `"use client";

import React from "react";

interface CustomContextProviderProps {
  children?: React.ReactNode;
}

// Replace 'data' with your custom type or interface
export const customContext = React.createContext<{
  data: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}>({
  data: "",
  setData: () => "",
});

export const CustomContextProvider = ({ children }: CustomContextProviderProps) => {
  const [data, setData] = React.useState<string>("");

  return (
    <customContext.Provider value={{ data, setData }}>
      {children}
    </customContext.Provider>
  );
};`,
  },
  {
    key: "reactmarkdown",
    label: "Markdown Component",
    description: "React-Markdown component with 'rehype' and 'remark' plugins",
    language: "TypeScript",
    code: `import React from "react";
import Markdown from "react-markdown";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

interface MarkdownComponentProps {
  content: string;
}

const MarkdownComponent = ({ content }: MarkdownComponentProps) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeSanitize,
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        [rehypeExternalLinks, { target: "_blank" }],
      ]}>
      {content}
    </Markdown>
  );
};

export default MarkdownComponent;`,
  },
  {
    key: "tocgenerator",
    label: "Toc Generator",
    description: "Organizes an array of headings into a table of contents object with sublists",
    language: "TypeScript",
    code: `export interface Heading {
  level: number;
  text: string;
}

export interface HeadingNode extends Heading {
  children: HeadingNode[];
}

class Toc {
  private constructor() {}

  private static parseHeadings(headingsArray: string[]): Heading[] {
    const headings: Heading[] = [];

    headingsArray.forEach((heading) => {
      const match: RegExpMatchArray | null = heading.match(/^(#+)\\s+(.*)$/);
      if (match) {
        const level: number = match[1].length;
        const text: string = match[2].trim();
        headings.push({ level: level, text: text });
      }
    });
    return headings;
  }

  // Extract headings from a text and pass them to this method
  public static generateNodes(headingsArray: string[]): HeadingNode[] {
    const parsedHeadings: Heading[] = this.parseHeadings(headingsArray);
    const generatedNode: HeadingNode[] = [];
    const stack: HeadingNode[] = [];

    for (const heading of parsedHeadings) {
      const node: HeadingNode = {
        text: heading.text,
        level: heading.level,
        children: [],
      };

      while (stack.length > 0 && stack[stack.length - 1].level >= heading.level) {
        stack.pop();
      }
      if (heading.level === 1) continue; // h1 is reserved for the title
      if (stack.length === 0) {
        generatedNode.push(node);
      } else {
        stack[stack.length - 1].children.push(node);
      }
      stack.push(node);
    }
    return generatedNode;
  }
}

export default Toc;`,
  },
  {
    key: "tsconfig",
    label: "TypeScript Config",
    description: "A tsconfig file for using as a starting point",
    language: "JSON",
    code: `{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "strict": true,
    "target": "ES2022",
    "module": "ESNext",
    "moduleDetection": "force",
    "moduleResolution": "node",
    "lib": ["es2022", "DOM", "DOM.Iterable"],
    "allowJs": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "resolveJsonModule": true,
    "skipLibCheck": false,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "allowUnreachableCode": false,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noEmit": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", "postcss.config.js"],
  "exclude": ["node_modules"]
}`,
  },
  {
    key: "eslintconfig",
    label: "ESLint Config",
    description: "A sensible config file ESLint with TypeScript-Eslint's recommended rules",
    language: "JavaScript",
    code: `import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-alert": "warn",
      "no-console": "warn",
      "no-constant-condition": "error",
      "no-debugger": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-unreachable": "error",
      "use-isnan": "error",
      eqeqeq: ["error", "smart"],
      "no-eval": "error",
      "no-floating-decimal": "error",
      "no-new": "error",
      "no-return-assign": "error",
      "no-self-compare": "error",
      "no-undef-init": "error",
      "no-var": "error",
      "no-unused-vars": "error",
      "comma-dangle": ["error", "always-multiline"],
      "comma-spacing": ["error", { before: false, after: true }],
      "comma-style": ["error", "last"],
      "new-parens": "error",
      "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
      quotes: ["error", "double", { avoidEscape: true }],
    },
  },
];`,
  },
  {
    key: "prettierconfig",
    label: "Prettier Config",
    description: "A config file for Prettier with Trivago's import sorting plugin",
    language: "JSON",
    code: `{
  "trailingComma": "all",
  "printWidth": 120,
  "useTabs": false,
  "tabWidth": 2,
  "singleQuote": false,
  "bracketSpacing": true,
  "bracketSameLine": true,
  "arrowParens": "always",
  "embeddedLanguageFormatting": "auto",
  "semi": true,
  "plugins": ["@trivago/prettier-plugin-sort-imports"],
  "importOrder": [
    "^react(.*)$",
    "^react-dom$",
    "^(?:[./@]*next)(/.*|$)",
    "<THIRD_PARTY_MODULES>",
    "^(?:[./@]*app)(/.*|$)",
    "^(?:[./@]*components)(/.*|$)",
    "^(?:[./@]*shared)(/.*|$)",
    "^(?:[./@]*types)(/.*|$)",
    "^(?:[./@]*)(/.*|$)",
    "^[./]"
  ],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
  "importOrderGroupNamespaceSpecifiers": true,
  "importOrderCaseInsensitive": true
}`,
  },
];
