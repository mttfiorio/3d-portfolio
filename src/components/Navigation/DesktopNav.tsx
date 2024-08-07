import React from "react";
import { useState } from "react";
import content from "../../content";
import { menu, close } from "../../assets";
import MobileNav from "./MobileNav";

const DesktopNav = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  const [scrolled, setScrolled] = useState(false);

  return (
    <ul className="list-none hidden sm:flex flex-row gap-10">
      {content.navbar.navLinks.map((nav) => (
        <li
          key={nav.id}
          className={`${
            active === nav.title ? "text-white" : "text-secondary"
          } hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => setActive(nav.title)}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default DesktopNav;
