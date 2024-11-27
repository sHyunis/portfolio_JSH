import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'grayBg':'url("../../public/imgs/bg.png")'
      },
      colors: {
        background: "var(--background)",
        color: "var(--color)",
        dark: "#1c1c1c",
        gray: "var(--gray)",
        lightGray: "var(--lightGray)",
        mediumGray: "var(--mediumGray)",
        darkGray: "var(--darkgray)",
        blackGray: "var(--blackGray)",
        pink: "var(--pink)",
      },
      fontFamily: {
        logo: ["var(--font-logo)"],
        main: ["var(--font-main)"],
        koLogo: ["var(--font-koLogo)"],
      },
      fontSize: {
        huge: "10rem",
        large: "6rem",
      },
      textShadow: {
        DEFAULT: "4px 4px 6px rgba(0, 0, 0, 0.3)", 
        md: "3px 3px 0 rgba(0, 0, 0, 0.7)", 
        lg: "4px 4px 0 rgba(0, 0, 0, 0.7)", 
        white: "4px 4px 6px #ffffff",
      },
    },
  },
};

export default config;
