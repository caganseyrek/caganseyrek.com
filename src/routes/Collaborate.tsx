import { SiLinkedin } from "react-icons/si";

import { COLLABORATE_TEXT, GITHUB_LINK, IMG_TITLE } from "@/constants/texts";

import CustomSEO from "@/components/CustomSEO";
import LinkElement from "@/components/LinkElement";

import "@/styles/collaborate.mod.css";

const Collaborate = () => {
  return (
    <>
      <CustomSEO
        title="Collaborate - Çağan Seyrek"
        description="Interested in working together? View my recent work highlights, check out my GitHub for code samples, and get in touch via LinkedIn."
        url="/collaborate"
      />
      <section id="collaborate">
        <img id="general_cat" src="/images/general_cat.webp" alt={IMG_TITLE} title={IMG_TITLE} />
        <h2>Want to collaborate?</h2>
        <p>{COLLABORATE_TEXT}</p>
        <p>
          You can see some highlights from my work on the <LinkElement to="/" contents="About" />{" "}
          page or on{" "}
          <LinkElement
            to={`${GITHUB_LINK}?tab=repositories`}
            contents="my GitHub"
            isExternal={true}
          />{" "}
          page.
        </p>
        <LinkElement
          id="contact-linkedin"
          to="https://www.linkedin.com/services/page/4548aa324845553b6b/"
          ariaLabel="Visit my services page on LinkedIn">
          Contact me on <SiLinkedin />
        </LinkElement>
      </section>
    </>
  );
};

export default Collaborate;
