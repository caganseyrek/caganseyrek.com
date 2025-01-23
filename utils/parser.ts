class Parser {
  private static lowercaseWords: Set<string> = new Set([
    "of",
    "the",
    "or",
    "and",
    "a",
    "an",
    "in",
    "on",
    "at",
    "to",
    "by",
    "for",
  ]);

  public static parseSlug(parseType: "metadataToParam" | "paramToMetadata", slug: string): string {
    if (parseType === "metadataToParam") {
      return slug.toLowerCase().replaceAll(" ", "_");
    } else {
      const parsedWords: string[] = slug.replace(/_/g, " ").split(" ");
      return parsedWords
        .map((word, index) => {
          if (index > 0 && this.lowercaseWords.has(word)) {
            return word.toLowerCase();
          }
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ");
    }
  }

  public static parseSearchParam(searchParam: string): string {
    const parsedString: string = searchParam.charAt(0).toUpperCase() + searchParam.slice(1) + ".";
    return parsedString.replaceAll("_", " ");
  }
}

export default Parser;
