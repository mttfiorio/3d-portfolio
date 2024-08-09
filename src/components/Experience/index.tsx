import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "../../utils/motion";
import BallCanvas from "./BallCanvas";
import { SectionWrapper } from "../../hoc";
import content from "../../content";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="mx-4 md:mx-12">
      <motion.div variants={textVariant(0)}>
        <p className="over-text">{content.experience.overTitle}</p>
        <h2>{content.experience.title}</h2>
      </motion.div>

      <div className="mt-6 md:mt-12 flex flex-col">
        <VerticalTimeline lineColor="var(--color-dark)">
          {content.experience.experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} {...experience} />
          ))}
        </VerticalTimeline>
      </div>

      <div
        className="mt-6 md:mt-12 
      flex flex-row flex-wrap justify-center gap-10"
      >
        {content.tech.technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
