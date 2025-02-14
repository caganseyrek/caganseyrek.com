import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface ProjectFileProps {
  title: string;
  repository: {
    url: string;
    description: string;
  };
  content: string;
}

class BaseLoader {
  constructor() {}

  private normalizeExtname(fileName: string): string {
    if (fileName.endsWith(".md")) {
      return fileName;
    }
    return fileName + ".md";
  }

  public doesFileExists(dir: string, fileName: string): boolean {
    return fs.existsSync(path.join(dir, this.normalizeExtname(fileName)));
  }

  private parseFrontmatter<T>(loadedFile: string): T {
    const { content, data } = matter(loadedFile);
    return { ...(data as Omit<T, "content">), content: content } as T;
  }

  public readPlainMdFile(dir: string, fileName: string): string {
    const loadedFile: string = fs.readFileSync(path.join(dir, this.normalizeExtname(fileName)), "utf-8");
    return loadedFile;
  }

  public readMdFile<T>(dir: string, fileName: string): T {
    const loadedFile: string = fs.readFileSync(path.join(dir, this.normalizeExtname(fileName)), "utf-8");
    return this.parseFrontmatter<T>(loadedFile);
  }
}

export class Loader {
  private static baseLoader: BaseLoader = new BaseLoader();
  private static projectDir = path.join(process.cwd(), "shared", "projects");

  private constructor() {}

  public static loadProject(projectSlug: string): ProjectFileProps | null {
    if (!this.baseLoader.doesFileExists(this.projectDir, projectSlug)) {
      console.log("here");
      return null;
    }
    return this.baseLoader.readMdFile<ProjectFileProps>(this.projectDir, projectSlug);
  }
}
