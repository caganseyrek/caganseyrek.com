export function stringifyTag(tagFromMetadata: string): string {
  return tagFromMetadata.toLowerCase().replaceAll(" ", "_");
}

export function parseTag(tagFromParams: string): string {
  const lowercaseWords: Set<string> = new Set([
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

  const parsedWords: string[] = tagFromParams.replace(/_/g, " ").split(" ");

  return parsedWords
    .map((word, index) => {
      if (index > 0 && lowercaseWords.has(word)) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}
