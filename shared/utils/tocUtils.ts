export interface Heading {
  level: number;
  text: string;
}

export interface HeadingNode extends Heading {
  children: HeadingNode[];
}

class TocUtils {
  private static parseHeadings(headingsArray: string[]): Heading[] {
    const headings: Heading[] = [];

    headingsArray.forEach((heading) => {
      const match: RegExpMatchArray | null = heading.match(/^(#+)\s+(.*)$/);
      if (match) {
        const level: number = match[1].length;
        const text: string = match[2].trim();
        headings.push({ level: level, text: text });
      }
    });
    return headings;
  }

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

  public static parseText(text: string): string {
    return text
      .replace(/[\/()'",.;]/g, "")
      .replaceAll(" ", "-")
      .toLowerCase();
  }
}

export default TocUtils;
