import { SiGithub, SiLinkedin, SiNpm } from "react-icons/si";

import {
  GITHUB_LINK,
  IMG_TITLE,
  INTRO_TEXT,
  INTRO_TITLE,
  LINKEDIN_LINK,
  NPMJS_LINK,
} from "@/constants/texts";

const Introduction = () => {
  return (
    <section id="introduction" aria-label="Introduction">
      <div id="introduction-grid">
        <h1>{INTRO_TITLE}</h1>
        <p>{INTRO_TEXT}</p>
        <div id="social-links" aria-label="Social Links">
          <a
            href={GITHUB_LINK}
            target="_blank"
            aria-label="Visit my GitHub profile"
            rel="noopener noreferrer">
            <SiGithub />
          </a>
          <a
            href={NPMJS_LINK}
            target="_blank"
            aria-label="Visit my NPM profile"
            rel="noopener noreferrer">
            <SiNpm />
          </a>
          <a
            href={LINKEDIN_LINK}
            target="_blank"
            aria-label="Visit my LinkedIn profile"
            rel="noopener noreferrer">
            <SiLinkedin />
          </a>
        </div>
      </div>
      <img id="general_cat" src="/general_cat.png" alt={IMG_TITLE} title={IMG_TITLE} />
    </section>
  );
};

export default Introduction;
