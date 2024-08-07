import React from "react";

type BurgerMenuProps = {
  toggleMenu: () => void;
  isOpen: boolean;
};

const BurgerMenu = ({ toggleMenu, isOpen }: BurgerMenuProps) => {
  return (
    <button
      className="flex flex-col justify-center items-center lg:hidden bg-primary rounded-full z-50 h-12 w-12 p-4"
      onClick={toggleMenu}
    >
      <span
        className={`bg-black block h-1 w-7 rounded-sm -translate-y-0.5 transition-all duration-300 ease-out  ${
          isOpen ? "rotate-45 translate-y-2" : "-translate-y-0.5"
        }`}
      />
      <span
        className={`bg-black block h-1 w-8 rounded-sm my-0.5 transition-all duration-200 ease-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`bg-black block h-1 w-7 rounded-sm translate-y-0.5 transition-all duration-300 ease-out  ${
          isOpen ? "-rotate-45 -translate-y-2" : "translate-y-0.5"
        }`}
      />
    </button>
  );
};

export default BurgerMenu;
