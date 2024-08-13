import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import content from "../../content";

const ProjectCard = lazy(() => import("./ProjectCard"));

const Projects = () => {
  return (
    <div className="mx-4 md:mx-12">
      <motion.div variants={textVariant(0)}>
        <p className="over-text">{content.works.overTitle}</p>
        <h2>{content.works.title}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="description-text "
        >
          {content.works.paragraph}
        </motion.p>
      </div>

      <div
        className="mt-6 md:mt-12 
      flex items-start flex-wrap 
      gap-12
      xl:justify-between"
      >
        {content.works.projects.map((project, index) => (
          <Suspense
            key={`project-${index}`}
            fallback={
              <div className="bg-dark p-5 rounded-2xl sm:w-[360px] w-full h-[350px] animate-pulse" />
            }
          >
            <ProjectCard index={index} {...project} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
