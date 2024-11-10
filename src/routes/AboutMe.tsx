import { MdOpenInNew } from "react-icons/md";
import { SiGithub, SiLinkedin, SiNpm } from "react-icons/si";

import { HIGHLIGTED_PROJECTS } from "@/constants/highlights";
import {
  GITHUB_LINK,
  IMG_TITLE,
  INTRO_TEXT,
  INTRO_TITLE,
  LINKEDIN_LINK,
  NPMJS_LINK,
} from "@/constants/texts";

import Techstack from "@/components/Techstack";

const AboutMe = () => {
  return (
    <>
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
        <img id="general_cat" src="/images/general_cat.webp" alt={IMG_TITLE} title={IMG_TITLE} />
      </section>
      <Techstack />
      <section id="highlights" aria-labelledby="highlights-header">
        <h3 className="section-header" id="highlights-header">
          Project Highlights
        </h3>
        <div id="highlights-content">
          {HIGHLIGTED_PROJECTS.map((project) => (
            <div className="highlighted-project" key={project.key}>
              <a
                className="project-title"
                href={project.source_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View the ${project.title}'s repository`}>
                {project.title} <MdOpenInNew />
              </a>
              <p>{project.description}</p>
              <div>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutMe;
