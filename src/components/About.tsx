import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import content from "../content";

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
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
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

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p>{content.about.overTitle}</p>
        <h2>{content.about.title}</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-[17px]">
        {content.about.paragraph}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {content.about.services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
