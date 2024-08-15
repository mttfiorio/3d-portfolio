import React, { lazy, Suspense } from "react";
import { SectionWrapper } from "../../hoc";
import content from "../../content";
import SectionText from "../SectionText";

const ProjectCard = lazy(() => import("./ProjectCard"));

const Projects = () => {
  return (
    <div className="mx-4 md:mx-12">
      <SectionText
        overTitle={content.works.overTitle}
        title={content.works.title}
        paragraph={content.works.paragraph}
      />

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
