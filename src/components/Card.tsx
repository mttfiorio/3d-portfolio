import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils";

interface CardProps {
  index: number;
  children: ReactNode;
  className?: string;
}

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
