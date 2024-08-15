import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { SectionWrapper } from "../../hoc";
import content from "../../content";
import ExperienceCard from "./ExperienceCard";
import SectionText from "../SectionText";

const Experience = () => {
  return (
    <div className="mx-4 md:mx-12">
      <SectionText
        overTitle={content.experience.overTitle}
        title={content.experience.title}
      />

      <div className="mt-6 md:mt-12 flex flex-col">
        <VerticalTimeline lineColor="var(--color-dark)">
          {content.experience.experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
