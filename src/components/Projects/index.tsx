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
      grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
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
