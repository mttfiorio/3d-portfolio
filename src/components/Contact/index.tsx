import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import ComputerCanvas from "./ComputerCanvas";
import content from "../../content";
import { ArrowUpRightFromSquare } from "../Icon";

const Contact = () => {
  return (
    <div className="mx-4 md:mx-12">
      <motion.div variants={textVariant(0)}>
        <p className="over-text">{content.contact.overTitle}</p>
        <h2>{content.contact.title}</h2>
      </motion.div>

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
              border-2 border-solid border-transparent hover:border-dark"
          download={true}
        >
          Resume <ArrowUpRightFromSquare />
        </a>
        <a
          href={`mailto:${content.contact.email}`}
          target={"_blank"}
          className="ml-4 text-lg font-medium capitalize text-dark underline"
        >
          Contact
        </a>
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
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
