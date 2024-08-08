import React from "react";

type BurgerMenuProps = {
  toggleMenu: () => void;
  isOpen: boolean;
};

const BurgerMenu = ({ toggleMenu, isOpen }: BurgerMenuProps) => {
  return (
    <button
      className={`flex flex-col justify-center items-center rounded-full z-50 h-12 w-12 p-4
      border border-black shadow shadow-black
       transition-all duration-500 ease-out
      ${!isOpen ? "bg-primary" : "bg-dark"}`}
      onClick={toggleMenu}
    >
      <span
        className={`bg-dark block h-1 w-7 rounded-sm -translate-y-0.5 transition-all duration-500 ease-out  ${
          isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
        }  
        ${isOpen ? "bg-primary" : "bg-dark"}`}
      />
      <span
        className={`bg-dark block h-1 w-8 rounded-sm my-0.5 transition-all duration-400 ease-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }  
        ${isOpen ? "bg-primary" : "bg-dark"}`}
      />
      <span
        className={`bg-dark block h-1 w-7 rounded-sm translate-y-0.5 transition-all duration-500 ease-out  ${
          isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-0.5"
        }
         ${isOpen ? "bg-primary" : "bg-dark"}`}
      />
    </button>
  );
};

export default BurgerMenu;
