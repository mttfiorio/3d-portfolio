import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { menu, close } from "../../assets";
import content from "../../content";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNavFull";

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

  return (
    <nav
      className={`w-full flex items-center top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-black text-[18px] font-bold cursor-pointer flex ">
            {content.navbar.name}
          </p>
        </Link>
      </div>

      <MobileNav setActive={setActive} />
    </nav>
  );
};

export default Navbar;
