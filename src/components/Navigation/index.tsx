import React, { useEffect, useState } from "react";
import { motion, useTransform } from "framer-motion";
import content from "../../content";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrollRatio, setScrollRatio] = useState(0);
  const colorBreakpoint = 0.4;

  useEffect(() => {
    const heroSectionElement = document.getElementById("hero-section");

    const handleScroll = () => {
      setScrollRatio(window.scrollY / (heroSectionElement?.offsetHeight || 1));
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const interpolateColor = (ratio: number) => {
    if (ratio <= colorBreakpoint) return "#FFFFFF";
    const hex = ((1 - ratio) / (1 - colorBreakpoint)) * 255;
    const hexStr = Math.floor(hex).toString(16).padStart(2, "0");
    return "#" + hexStr.repeat(3);
  };

  return (
    <motion.nav
      className={`fixed p-4 lg:p-12 w-full  h-12  top-0 z-20 
        bg-gradient-to-b from-black/80 to-transparent
        text-tillium font-bold`}
      initial={{ y: "-100%" }}
      animate={{
        y: 0,
        transition: {
          duration: 1,
        },
      }}
    >
      <div
        className="flex justify-between items-center z-10 max-w-[1184px] mx-auto"
        style={{ color: interpolateColor(scrollRatio) }}
      >
        {content.navbar.navLinks.map((nav) => (
          <h5
            key={nav.id}
            className={"cursor-pointer over-text"}
            onClick={() => scrollToSection(nav.id)}
          >
            <a
              className="p-1 pr-0"
              style={{
                backgroundColor: `rgba(255, 255, 255, ${
                  scrollRatio > 0.4 ? (scrollRatio - colorBreakpoint) * 2.5 : 0
                })`,
              }}
            >
              {nav.title}
            </a>
          </h5>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
