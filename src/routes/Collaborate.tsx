import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

import { COLLABORATE_TEXT, GITHUB_LINK, IMG_TITLE } from "@/constants/texts";

const Collaborate = () => {
  return (
    <section id="collaborate">
      <img id="general_cat" src="/general_cat.webp" alt={IMG_TITLE} title={IMG_TITLE} />
      <h2>Want to collaborate?</h2>
      <p>{COLLABORATE_TEXT}</p>
      <p>
        You can see some highlights from my work on the{" "}
        <Link to="/" rel="noopener noreferrer">
          About
        </Link>{" "}
        page or on{" "}
        <Link to={`${GITHUB_LINK}?tab=repositories`} rel="noopener noreferrer">
          my GitHub
        </Link>{" "}
        page.
      </p>
      <a
        id="contact-linkedin"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/services/page/4548aa324845553b6b/"
        target="_blank">
        Contact me on <SiLinkedin />
      </a>
    </section>
  );
};

export default Collaborate;
