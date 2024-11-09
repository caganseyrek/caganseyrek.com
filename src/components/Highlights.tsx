import { MdOpenInNew } from "react-icons/md";

import { HIGHLIGTED_PROJECTS } from "@/constants/highlights";

const Highlights = () => {
  return (
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
            <div className="project-details">
              <p>{project.description}</p>
              <div>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
