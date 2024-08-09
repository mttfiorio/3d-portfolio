import React from "react";
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

      <div className="mt-6 md:mt-12 flex flex-wrap gap-10">
        {content.about.services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
