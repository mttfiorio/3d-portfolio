import React, { useState } from "react";
import content from "../../content";
import BurgerMenu from "./BurgerMenu";
import { AnimatePresence, motion } from "framer-motion";

type MobileNavProps = {
  setActive: (title: string) => void;
};

const MobileNav = ({ setActive }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="sm:hidden flex flex-1 justify-end items-center">
      <div className="fixed right-4 top-4 z-50">
        <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0" }}
            exit={{ x: "100%", transitionEnd: { display: "none" } }} // Add exit animation
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 18,
            }}
            className={
              "fixed right-0 top-0 w-full h-screen z-40 overflow-auto bg-black"
            }
          >
            <ul
              className="mt-48 p-4 flex flex-col gap-12 justify-center items-center
            text-primary "
            >
              {content.navbar.navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  onClick={() => {
                    setActive(nav.title);
                    setIsOpen(false);
                  }}
                >
                  <motion.a
                    href={`#${nav.id}`}
                    className="text-6xl inline-block"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 1.5 }}
                  >
                    {nav.title.split("").map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
