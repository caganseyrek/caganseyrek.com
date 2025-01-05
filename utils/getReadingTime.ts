interface MessagesProps {
  lessThanOneMin: string;
  equalsToOneMin: string;
  greaterThanOneMin: string;
}

const MESSAGES: MessagesProps = {
  lessThanOneMin: "Less than a min",
  equalsToOneMin: "min",
  greaterThanOneMin: "mins",
};

const WORDS_PER_MINUTE: number = 200;

const getReadingTime = (wholeTextOrWordCount: number | string) => {
  let readingTime: number = 0;

  if (typeof wholeTextOrWordCount === "string") {
    const words: string[] = wholeTextOrWordCount.trim().split(/\s+/);
    const wordCount: number = words.length;
    readingTime = wordCount / WORDS_PER_MINUTE;
  } else if (typeof wholeTextOrWordCount === "number") {
    readingTime = wholeTextOrWordCount / WORDS_PER_MINUTE;
  }

  if (readingTime < 1) {
    return MESSAGES.lessThanOneMin;
  } else if (readingTime === 1) {
    return `${readingTime.toString()} ${MESSAGES.equalsToOneMin}`;
  } else {
    return `${readingTime.toString()} ${MESSAGES.greaterThanOneMin}`;
  }
};

export default getReadingTime;
