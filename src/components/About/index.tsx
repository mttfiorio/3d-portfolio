import React, { lazy, Suspense } from "react";
import { SectionWrapper } from "../../hoc";
import content from "../../content";
import SectionText from "../SectionText";

const ServiceCard = lazy(() => import("./ServiceCard"));

const About = () => {
  return (
    <div className="mx-4 md:mx-12">
      <SectionText
        overTitle={content.about.overTitle}
        title={content.about.title}
        paragraph={content.about.paragraph}
      />

      <div
        className="mt-6 md:mt-12 
      flex items-start flex-wrap 
      gap-12 xl:justify-between"
      >
        {content.about.services.map((service, index) => (
          <Suspense
            key={service.title}
            fallback={
              <div className="bg-dark p-5 rounded-2xl sm:w-[360px] w-full h-[350px] animate-pulse" />
            }
          >
            <ServiceCard index={index} {...service} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
