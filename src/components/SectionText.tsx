import React from "react";
import { motion, Variants } from "framer-motion";

interface SectionTextProps {
  overTitle: string;
  title: string;
  paragraph?: string;
}

const textVariant = (delay: number): Variants => ({
  hidden: { x: -50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "just", duration: 0.5, delay },
  },
});

const once = true;

const SectionText = ({ overTitle, title, paragraph }: SectionTextProps) => {
  return (
    <>
      <motion.p variants={textVariant(0)} className="over-text">
        {overTitle}
      </motion.p>
      <motion.h2 variants={textVariant(0.3)}>{title}</motion.h2>
      {paragraph && (
        <motion.p className="description-text" variants={textVariant(0.6)}>
          {paragraph}
        </motion.p>
      )}
    </>
  );
};

export default SectionText;
