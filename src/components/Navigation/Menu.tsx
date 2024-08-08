import React, { useState } from "react";
import content from "../../content";
import BurgerMenu from "./BurgerMenu";
import { AnimatePresence, motion } from "framer-motion";

type MenuProps = {
  setActive: (title: string) => void;
};

const Menu = ({ setActive }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-1 justify-end items-center">
      <div className="fixed right-4 top-4 z-50">
        <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0" }}
            exit={{ y: "-100%", transitionEnd: { display: "none" } }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 15,
            }}
            className={
              "fixed right-0 top-0 w-full h-screen z-40 overflow-auto bg-black"
            }
          >
            <ul
              className="flex flex-col mt-48 p-4 gap-12 justify-center items-center
            text-primary "
            >
              {content.navbar.navLinks.map((nav, linkIndex) => (
                <li
                  key={nav.id}
                  onClick={() => {
                    setActive(nav.title);
                    setIsOpen(false);
                  }}
                >
                  <motion.a href={`#${nav.id}`} className="text-6xl ">
                    {nav.title.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={letterIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: 0.1 * letterIndex + 0.6 * linkIndex,
                          duration: 1,
                        }}
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

export default Menu;
