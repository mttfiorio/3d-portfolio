import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import { menu, close } from "../../assets";
import content from "../../content";
import Menu from "./Menu";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
      const distance = targetPosition - startPosition;
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
    <nav
      className={`fixed p-4 lg:p-12 w-full h-12 flex justify-between items-center top-0 z-20 
        bg-gradient-to-b from-black/50 to-transparent
        text-tillium font-bold`}
    >
      {content.navbar.navLinks.map((nav) => (
        <h5
          key={nav.id}
          className={"text-white cursor-pointer over-text"}
          onClick={() => scrollToSection(nav.id)}
        >
          <a>{nav.title}</a>
        </h5>
      ))}
    </nav>
  );
};

export default Navbar;
