import React, { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils";

interface CardProps {
  index: number;
  children: ReactNode;
  className?: string;
  isHovered?: boolean;
  setIsHovered?: (value: boolean) => void;
}

const Card = ({
  className,
  children,
  index,
  isHovered,
  setIsHovered,
}: CardProps) => {
  return (
    <motion.div
      variants={fadeIn(index * 0.25 + 0.5)}
      className={`relative  ${className}`}
      onMouseEnter={() => setIsHovered && setIsHovered(true)}
      onMouseLeave={() => setIsHovered && setIsHovered(false)}
    >
      <div
        className={`absolute w-full h-full left-1 top-1 -z-10
       bg-white rounded-2xl diagonal-cut ${
         isHovered ? "transform transition-transform duration-300 scale-95" : ""
       }`}
      />

      <div
        className={`absolute w-full h-full 
        diagonal-cut overflow-hidden ${
          isHovered
            ? "transform transition-transform duration-300 scale-95"
            : ""
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
