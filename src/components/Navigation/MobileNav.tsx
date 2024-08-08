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
    <div className="flex flex-1 justify-end items-center">
      <div className="fixed right-4 top-4 z-50">
        <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0" }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
            }}
            className="fixed right-0 top-0 w-[85px] h-screen z-40 overflow-auto bg-primary 
              border border-black shadow-xl shadow-black"
          >
            <div
              className="text-white mt-48 p-4 transform rotate-90
            flex gap-24"
            >
              {content.navbar.navLinks.map((nav) => (
                <h3
                  key={nav.id}
                  onClick={() => {
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </h3>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
