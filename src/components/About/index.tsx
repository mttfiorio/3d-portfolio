import React, { Suspense } from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import content from "../../content";
import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <div className="mx-4 md:mx-12">
      <motion.div variants={textVariant(0)}>
        <p className="over-text">{content.about.overTitle}</p>
        <h2>{content.about.title}</h2>
      </motion.div>

      <motion.p className="description-text" variants={fadeIn("", "", 0.1, 1)}>
        {content.about.paragraph}
      </motion.p>

      <div
        className="mt-6 md:mt-12 
      flex items-start flex-wrap 
      gap-12 xl:justify-between"
      >
        {content.about.services.map((service, index) => (
          <Suspense
            key={service.title}
            fallback={
              <div className="bg-dark p-5 rounded-2xl sm:w-[360px] w-full h-[350px] animate-pulse" />
            }
          >
            <ServiceCard index={index} {...service} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
