import React from "react";
import useCartStore from "../store/Store";

const Menu = () => {
  const { toggleMenu } = useCartStore();
  const isMenuOpen = useCartStore((state) => state.isMenuOpen);
  const sections = ["home", "about", "cars", "services", "contact"];

  if (!isMenuOpen) return null;

  return (
    <div className="fixed z-[9] flex flex-col justify-center  gap-5 right-0 top-0 mt-20 bg-[#12273DF2] bg-opacity-90 w-[250px] h-full text-white ">
      {sections.map((title) => {
        return (
          <a
            key={title}
            href={`#${title}`}
            className="hover:bg-[#741906] text-3xl h-16 pl-10 pt-2 "
            onClick={toggleMenu}
          >
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </a>
        );
      })}
    </div>
  );
};

export default Menu;
