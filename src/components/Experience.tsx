import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import content from "../content";

type ExperienceCardProps = {
  title: string;
  company_name: string;
  icon: any;
  iconBg: string;
  date: string;
  points: string[];
};

const ExperienceCard = ({
  title,
  company_name,
  icon,
  iconBg,
  date,
  points,
}: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={icon}
            alt={company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p>{content.experience.overTitle}</p>
        <h2>{content.experience.title}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {content.experience.experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
