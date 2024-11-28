"use client";
import React, { useRef } from "react";
const Menu = ["Home", "About", "Skill", "Project"];

type HeaderProps = {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  skillRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
};

const Header: React.FC<HeaderProps> = ({
  homeRef,
  aboutRef,
  skillRef,
  projectRef,
}) => {
  const scrollToSection = (section: string) => {
    if (section === "Home" && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "About" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Skill" && skillRef.current) {
      skillRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Project" && projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="w-[200px] h-screen fixed top-0 left-0 flex flex-col border border-solid border-l-0 border-t-0 border-b-0 border-white border-2 bg-grayBg ">
      <h1 className="text-center font-logo font-bold text-2xl text-foreground mt-4 ">
        JSH
      </h1>
      <nav className="absolute top-1/2 left-0 w-full transform -translate-y-1/2">
        <ul className="flex flex-col font-main text-xl">
          {Menu.map((menu) => (
            <li
              key={menu}
              className="relative text-4xl w-full text-center font-main border-gray-300 text-color hover:text-white transition-all duration-300 ease-in-out leading-relaxed tracking-widest group font-extrabold cursor-pointer "
              onClick={() => scrollToSection(menu)}
            >
              <span className="absolute inset-0 bg-color transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10">{menu}</span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
