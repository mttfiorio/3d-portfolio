import React from "react";
import { motion } from "framer-motion";

import content from "../../content";
import ComputersCanvas from "./Computers";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto 
    mb-12 lg:mb-48 max-w-[1220px]"
    >
      <div
        className={`absolute inset-0 max-w-7xl flex flex-row items-start gap-5
          mt-12 mx-4 lg:mx-12`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-dark" />
          <div className="w-1 sm:h-80 h-40 dark-gradient" />
        </div>

        <div className=" w-full z-10">
          <h1>{content.hero.title}</h1>
          <p className={` mt-2 text-dark/90`}>{content.hero.description}</p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-4 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-dark flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-dark mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
