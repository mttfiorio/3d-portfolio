import React from "react";
import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
};

const quote = {
  animate: {
    transition: {
      delay: 0.3,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className }: AnimatedTextProps) => {
  return (
    <div
      className="w-full mx-auto py-2 flex items-center justify-center text-center
    overflow-hidden"
    >
      <motion.h1
        className={`${className} flex flex-wrap w-full text-dark`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, i) => (
          <motion.span
            key={word + i}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
