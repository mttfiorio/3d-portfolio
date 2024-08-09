import React, { ComponentType, FC } from "react";
import { motion } from "framer-motion";

import { staggerContainer } from "../utils/motion";

interface StarWrapperProps {
  idName?: string;
}

const StarWrapper = (
  Component: ComponentType,
  idName: string,
): FC<StarWrapperProps> =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.5, 0.1)} // I've added example values here as staggerContainer expects two arguments.
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={` max-w-7xl mx-auto relative z-0 mb-12 md:mb-48`}
        id={idName}
      >
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
