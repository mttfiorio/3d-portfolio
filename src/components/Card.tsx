import React, { ReactNode } from "react";
import { Variants, motion } from "framer-motion";

interface CardProps {
  index: number;
  children: ReactNode;
  className?: string;
}

const fadeIn = (delay: number): Variants => ({
  hidden: {
    x: -50,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "just", delay, duration: 0.5, ease: "easeOut" },
  },
});

const Card = ({ className, children, index }: CardProps) => {
  return (
    <motion.div
      variants={fadeIn(index * 0.25 + 0.5)}
      className={`relative ${className}`}
    >
      <div
        className="absolute w-full h-full left-1 top-1 -z-10
       bg-white rounded-2xl diagonal-cut"
      />

      <div
        className="absolute w-full h-full 
        diagonal-cut"
      >
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
