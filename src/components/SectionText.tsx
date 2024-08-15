import React from "react";
import { motion, Variants } from "framer-motion";

interface SectionTextProps {
  overTitle: string;
  title: string;
  paragraph?: string;
}

const textVariant = (delay: number): Variants => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay },
  },
});

const SectionText = ({ overTitle, title, paragraph }: SectionTextProps) => {
  return (
    <>
      <motion.p variants={textVariant(0)} className="over-text">
        {overTitle}
      </motion.p>
      <motion.h2 variants={textVariant(0.5)}>{title}</motion.h2>
      {paragraph && (
        <motion.p className="description-text" variants={textVariant(1)}>
          {paragraph}
        </motion.p>
      )}
    </>
  );
};

export default SectionText;
