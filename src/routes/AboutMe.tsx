import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";
import { SiGithub, SiLinkedin, SiNpm } from "react-icons/si";

import { HighlightsList } from "@/constants/highlights";
import { TechstackList } from "@/constants/Techstack";
import {
  GITHUB_LINK,
  IMG_TITLE,
  INTRO_TEXT,
  INTRO_TITLE,
  LINKEDIN_LINK,
  NPMJS_LINK,
  TECHSTACK_LABELS,
} from "@/constants/texts";

import CustomSEO from "@/components/CustomSEO";
import LinkElement from "@/components/LinkElement";

import "@/styles/about.mod.css";

const AboutMe = () => {
  const [isContainerToggled, setIsContainerToggled] = useState<boolean>(false);

  return (
    <>
      <CustomSEO
        title="Çağan Seyrek"
        description="4th-year computer engineering student who loves full-stack web development and the open-source."
        url="/"
      />
      <section id="introduction" aria-label="Introduction">
        <div id="introduction-grid">
          <h1>{INTRO_TITLE}</h1>
          <p>{INTRO_TEXT}</p>
          <div id="social-links" aria-label="Social Links">
            <LinkElement
              to={GITHUB_LINK}
              isExternal={true}
              ariaLabel="Visit my GitHub profile"
              contents={<SiGithub />}
            />
            <LinkElement
              to={NPMJS_LINK}
              isExternal={true}
              ariaLabel="Visit my NPM profile"
              contents={<SiNpm />}
            />
            <LinkElement
              to={LINKEDIN_LINK}
              isExternal={true}
              ariaLabel="Visit my LinkedIn profile"
              contents={<SiLinkedin />}
            />
          </div>
        </div>
        <img id="general_cat" src="/images/general_cat.webp" alt={IMG_TITLE} title={IMG_TITLE} />
      </section>
      <section id="techstack" aria-labelledby="techstack-header">
        <button
          id="techstack-toggle"
          className={isContainerToggled ? "toggled" : "untoggled"}
          onClick={() => setIsContainerToggled(!isContainerToggled)}
          aria-expanded={isContainerToggled}
          aria-controls="techstack-content">
          <b>
            {isContainerToggled ? TECHSTACK_LABELS.HEADER.HIDE : TECHSTACK_LABELS.HEADER.SEE}{" "}
            {TECHSTACK_LABELS.HEADER.MAIN}
          </b>
          {isContainerToggled ? <FaAngleUp /> : <FaAngleDown />}
        </button>
        <div
          id="techstack-content"
          className={isContainerToggled ? "toggled" : "untoggled"}
          aria-hidden={!isContainerToggled}>
          {TechstackList.map((category) => (
            <>
              <div className="techstack-category" key={category.key}>
                <b>{category.label}</b>
                <div className="techstack-items">
                  {category.list.map((item) => (
                    <div key={item.key}>
                      {item.icon}
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
              {category.key !== "devtools" && <hr />}
            </>
          ))}
        </div>
      </section>
      <section id="highlights" aria-labelledby="highlights-title">
        <h3 id="highlights-title">Project Highlights</h3>
        <div id="highlights-content">
          {HighlightsList.map((project) => (
            <div className="highlighted-project" key={project.key}>
              <LinkElement
                to={project.source_url}
                isExternal={true}
                ariaLabel={`View the ${project.title}'s repository`}
                className="project-title"
                contents={
                  <>
                    {project.title} <MdOpenInNew />
                  </>
                }
              />
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
