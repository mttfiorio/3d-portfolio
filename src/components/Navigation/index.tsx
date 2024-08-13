import React from "react";
import { motion } from "framer-motion";
import content from "../../content";

const Navbar = () => {
  // Function to handle smooth scrolling with custom duration
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const targetPosition = elementRect.top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition - 150;
      const duration = 2000;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(
          timeElapsed,
          startPosition,
          distance,
          duration,
        );

        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    }
  };

  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  return (
    <motion.nav
      className={`fixed p-4 md:p-8 w-full top-0 z-20 
        black-gradient
        menu-text`}
      initial={{ y: "-100%" }}
      animate={{
        y: 0,
        transition: {
          duration: 1,
        },
      }}
    >
      <div className="flex justify-between items-center z-10 max-w-[1184px] mx-auto text-white">
        {content.navbar.navLinks.map((nav) => (
          <h5
            key={nav.id}
            className={"cursor-pointer"}
            onClick={() => scrollToSection(nav.id)}
          >
            <a href={`#${nav.id}`} className="p-1 pr-0" aria-label={nav.title}>
              {nav.title}
            </a>
          </h5>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
