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
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="xs:w-[250px] w-full"
  >
    <Tilt
      tiltMaxAngleX={-20}
      tiltMaxAngleY={-20}
      scale={1}
      transitionSpeed={450}
      className="min-h-[280px] relative p-8"
    >
      <div className="absolute w-full h-full bg-white rounded-2xl left-1 top-1 -z-10 diagonal-cut" />
      <div className="bg-dark rounded-2xl absolute inset-0 flex flex-col items-center justify-center space-y-4 diagonal-cut">
        <img
          src={icon}
          loading="lazy"
          alt={title}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </Tilt>
  </motion.div>
);

export default ServiceCard;
