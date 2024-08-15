import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  children: ReactNode;
}

const Section = ({ id, children }: SectionProps) => {
  return (
    <motion.section
      className={`w-full max-w-7xl mx-auto relative z-0 mb-24 md:mb-48`}
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="mx-4 md:mx-12">{children}</div>
    </motion.section>
  );
};

export default Section;
