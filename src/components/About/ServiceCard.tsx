import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => (
  <Tilt
    tiltMaxAngleX={-20}
    tiltMaxAngleY={-20}
    scale={1}
    transitionSpeed={450}
    className="xs:w-[250px] w-full overflow-hidden diagonal-cut" // Add overflow-hidden
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="relative  p-8 rounded-lg min-h-[280px]" // Add background and padding
    >
      {/* Content wrapper with clip-path */}
      <div className=" bg-gray-800 rounded-lg absolute inset-0 flex flex-col items-center justify-center space-y-4">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

export default ServiceCard;
