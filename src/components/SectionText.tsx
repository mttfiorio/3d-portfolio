import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils";

interface SectionTextProps {
  overTitle: string;
  title: string;
  paragraph?: string;
}

const SectionText = ({ overTitle, title, paragraph }: SectionTextProps) => {
  return (
    <>
      <motion.p variants={fadeIn(0)} className="over-text">
        {overTitle}
      </motion.p>
      <motion.h2 variants={fadeIn(0.2)}>{title}</motion.h2>
      {paragraph && (
        <motion.p className="description-text" variants={fadeIn(0.4)}>
          {paragraph}
        </motion.p>
      )}
    </>
  );
};

export default SectionText;
