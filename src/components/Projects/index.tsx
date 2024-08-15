import React, { lazy, Suspense } from "react";
import content from "../../content";
import SectionText from "../SectionText";
import Section from "../Section";

const ProjectCard = lazy(() => import("./ProjectCard"));

const Projects = () => {
  return (
    <Section id="projects">
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
          <Suspense key={project.id}>
            <ProjectCard index={index} {...project} />
          </Suspense>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
