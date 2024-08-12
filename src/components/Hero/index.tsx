import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Sphere from "./SphereCanvas";
import content from "../../content";

const ScrollAnimation = () => {
  return (
    <motion.div
      className="sticky xs:bottom-10 bottom-4 w-full flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
          delay: 2,
        },
      }}
    >
      <div className="w-[35px] h-[64px] rounded-3xl border-4 border-light flex justify-center items-start p-2">
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-3 h-3 rounded-full bg-light mb-1"
        />
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const [opacity, setOpacity] = useState(1);
  const dissolvenceScrollBreakpoint = 0.6;

  useEffect(() => {
    const heroSectionElement = document.getElementById("hero-section");

    const handleScroll = () => {
      const scrollRatio =
        window.scrollY / (heroSectionElement?.offsetHeight || 1);

      let newOpacity = 1;
      if (scrollRatio >= dissolvenceScrollBreakpoint) {
        newOpacity = 1 - (scrollRatio - dissolvenceScrollBreakpoint) * 5;
      }

      // Only update state if opacity has changed
      if (newOpacity !== opacity) {
        setOpacity(Math.max(newOpacity, 0));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [opacity]);

  return (
    <section
      className="relative w-screen h-[400vh] mx-auto mb-24 bg-black"
      id="hero-section"
      style={{ opacity }}
    >
      <div
        className="absolute text-white w-full h-screen flex flex-col justify-center items-center z-10
      text-center"
      >
        <div className="over-text">{content.hero.name}</div>
        <h1>
          {content.hero.title.map((str) => (
            <div key={str}>
              <br />
              {str}
            </div>
          ))}
        </h1>
      </div>

      <div className="sticky top-0 w-screen h-screen">
        <Sphere />
        <ScrollAnimation />
      </div>
    </section>
  );
};

export default Hero;
