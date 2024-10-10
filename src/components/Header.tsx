import React from "react";
import Link from "next/link";
import styles from "../styles/header.module.css";
const Menu = [
  { href: "/about", page: "About" },
  { href: "/skill", page: "Skill" },
  { href: "/project", page: "Project" },
  { href: "/contact", page: "Contact" },
];

const Header = () => {
  return (
    <header
      className={`w-[200px] h-screen fixed top-0 left-0 flex flex-col justify-between ${styles.border} ${styles.headerBackground}`}
    >
      <Link href="/">
        <h1 className="text-center  font-logo font-bold  text-2xl text-foreground ">
          JSH
        </h1>
      </Link>
      <nav className="w-full">
        <ul className="flex flex-col font-main text-xl ">
          {Menu.map((menu) => (
            <Link href={menu.href} key={menu.page}>
              <li className="relative text-2xl w-full text-center font-main  border-gray-300 text-color hover:text-white transition-all duration-300 ease-in-out leading-relaxed tracking-widest group font-extrabold border border-solid border-r-0 border-l-0 border-t-0">
                <span className="absolute inset-0 bg-color transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                <span className="relative z-10">{menu.page}</span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
