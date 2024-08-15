import React from "react";
import { SectionWrapper } from "../../hoc";
import content from "../../content";
import {
  IcoArrowUpRightFromSquare,
  IcoGit,
  IcoLinkedin,
  IcoMail,
} from "../Icon";
import SectionText from "../SectionText";

const Contact = () => {
  const iconsStyles =
    "bg-light hover:bg-dark hover:text-light border-2 border-solid border-transparent hover:border-dark transition-all duration-300";

  return (
    <div className="mx-4 md:mx-12">
      <SectionText
        overTitle={content.contact.overTitle}
        title={content.contact.title}
        paragraph={content.contact.paragraph}
      />

      <div
        className="mt-6 md:mt-12 
        flex justify-start items-center flex-wrap 
        gap-12"
      >
        {content.contact.pdf && (
          <a
            href={content.contact.pdf}
            target={"_blank"}
            className="flex items-center gap-2 bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
              hover:bg-light hover:text-dark 
              border-2 border-solid border-light hover:border-dark transition-all duration-300"
            download={true}
            aria-label="Resume"
          >
            Resume <IcoArrowUpRightFromSquare />
          </a>
        )}
        {content.contact.email && (
          <a
            href={`mailto:${content.contact.email}`}
            target={"_blank"}
            aria-label="mailto"
          >
            <IcoMail
              size="3rem"
              className={`${iconsStyles}`}
              style={{ clipPath: "polygon(5% 15%, 95% 15%, 95% 85%, 5% 85%)" }}
            />
          </a>
        )}
        {content.contact.linkedin && (
          <a href={content.contact.linkedin} aria-label="Linkedin">
            <IcoLinkedin
              size="2.8rem"
              className={`${iconsStyles}`}
              style={{ clipPath: "polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%)" }}
            />
          </a>
        )}
        {content.contact.git && (
          <a href={content.contact.git} aria-label="GitHub">
            <IcoGit size="2.7em" className={`${iconsStyles} rounded-full`} />
          </a>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
