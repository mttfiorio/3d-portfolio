import React from "react";
import content from "../../content";
import {
  IcoArrowUpRightFromSquare,
  IcoGit,
  IcoLinkedin,
  IcoMail,
} from "../Icon";
import Section from "../Section";
import SectionText from "../SectionText";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils";

const Contact = () => {
  const iconsStyles =
    "bg-light hover:bg-dark hover:text-light border-2 border-solid border-transparent hover:border-dark transition-all duration-300";

  return (
    <Section id="contact">
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
          <motion.a
            href={content.contact.pdf}
            target={"_blank"}
            variants={fadeIn(0.5)}
            className="flex items-center gap-2 bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
              hover:bg-light hover:text-dark 
              border-2 border-solid border-light hover:border-dark transition-all duration-300"
            download={true}
            aria-label="Resume"
          >
            Resume <IcoArrowUpRightFromSquare />
          </motion.a>
        )}
        {content.contact.email && (
          <motion.a
            href={`mailto:${content.contact.email}`}
            target={"_blank"}
            variants={fadeIn(0.75)}
            aria-label="mailto"
          >
            <IcoMail
              size="3rem"
              className={`${iconsStyles}`}
              style={{ clipPath: "polygon(5% 15%, 95% 15%, 95% 85%, 5% 85%)" }}
            />
          </motion.a>
        )}
        {content.contact.linkedin && (
          <motion.a
            href={content.contact.linkedin}
            variants={fadeIn(1)}
            aria-label="Linkedin"
          >
            <IcoLinkedin
              size="2.8rem"
              className={`${iconsStyles}`}
              style={{ clipPath: "polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%)" }}
            />
          </motion.a>
        )}
        {content.contact.git && (
          <motion.a
            href={content.contact.git}
            variants={fadeIn(1.25)}
            aria-label="GitHub"
          >
            <IcoGit size="2.7em" className={`${iconsStyles} rounded-full`} />
          </motion.a>
        )}
      </div>
    </Section>
  );
};

export default Contact;
