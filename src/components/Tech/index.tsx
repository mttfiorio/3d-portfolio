import React from "react";

import content from "../../content";
import BallCanvas from "./BallCanvas";
import { SectionWrapper } from "../../hoc";

const Tech = () => {
  return (
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
  );
};

export default SectionWrapper(Tech, "");
