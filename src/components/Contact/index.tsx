import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import ComputerCanvas from "./ComputerCanvas";
import content from "../../content";
import {
  IcoArrowUpRightFromSquare,
  IcoGit,
  IcoLinkedin,
  IcoMail,
} from "../Icon";

const Contact = () => {
  const iconsStyles =
    "bg-light hover:bg-dark hover:text-light border-2 border-solid border-transparent hover:border-dark";

  return (
    <div className="mx-4 md:mx-12">
      <motion.div variants={textVariant(0)}>
        <p className="over-text">{content.contact.overTitle}</p>
        <h2>{content.contact.title}</h2>
      </motion.div>

      <motion.p className="description-text" variants={fadeIn("", "", 0.1, 1)}>
        {content.contact.paragraph}
      </motion.p>

      <div
        className="mt-6 md:mt-12 
        flex justify-start items-center flex-wrap 
        gap-12"
      >
        <a
          href="/dummy.pdf"
          target={"_blank"}
          className="flex items-center gap-2 bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
              hover:bg-light hover:text-dark 
              border-2 border-solid border-light hover:border-dark"
          download={true}
          aria-label="Resume"
        >
          Resume <IcoArrowUpRightFromSquare />
        </a>
        <a href={`mailto:${content.contact.email}`} target={"_blank"}>
          <IcoMail
            size="3rem"
            className={`${iconsStyles}`}
            style={{ clipPath: "polygon(5% 15%, 95% 15%, 95% 85%, 5% 85%)" }}
          />
        </a>
        <a href={content.contact.linkedin} aria-label="Linkedin">
          <IcoLinkedin
            size="2.8rem"
            className={`${iconsStyles}`}
            style={{ clipPath: "polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%)" }}
          />
        </a>
        <a href={content.contact.git} aria-label="GitHub">
          <IcoGit size="2.7em" className={`${iconsStyles} rounded-full`} />
        </a>
      </div>

      {/*
 <div className="w-full h-[360px] hidden">
        {
          <Suspense
            fallback={
              <div className="bg-dark p-5 rounded-2xl sm:w-[360px] w-full h-[350px] animate-pulse" />
            }
          >
            <ComputerCanvas />
          </Suspense>
        }
      </div>

*/}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
