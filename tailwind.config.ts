import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        color: "var(--color)",
        dark: "#1c1c1c",
        gray: "var(--gray)",
        lightGray: "var(--lightGray)",
        darkGray: "var(--darkgray)",
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
      // 사용자 정의 텍스트 그림자 추가
      textShadow: {
        DEFAULT: "4px 4px 6px rgba(0, 0, 0, 0.3)", // 기본 그림자
        md: "3px 3px 0 rgba(0, 0, 0, 0.7)", // 중간 그림자
        lg: "4px 4px 0 rgba(0, 0, 0, 0.7)", // 큰 그림자
        white: "4px 4px 6px #ffffff",
      },
    },
  },
};

export default config;
