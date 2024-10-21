import styles from "@/styles/skill.module.css";
import Image from "next/image";
import Javascript from "@/assets/images/javascript.png";
import HTML from "@/assets/images/html.png";
import CSS from "@/assets/images/css.png";
import TypeScript from "@/assets/images/typescript.png";
import React from "@/assets/images/react.png";
import NextJs from "@/assets/images/next.js.png";
import Figma from "@/assets/images/Figma.png";
import Slack from "@/assets/images/slack.png";
import Discord from "@/assets/images/Discord.png";
import Vercel from "@/assets/images/Vercel.png";
import Github from "@/assets/images/github.png";
const SkillPage = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen h-[100vh] w-full bg-black ${styles.background}`}
    >
      <h2 className="text-black  text-huge font-main ">SKILLS</h2>
      <div
        className={`w-[95%] h-[70%] bg-black ${styles.gridContainer} rounded`}
      >
        <div
          className={`${styles.gridBox} text-white p-4 text-[2rem] flex justify-center items-center`}
        >
          <Image src={HTML} width={100} height={100} alt="HTML" />
          <Image src={CSS} width={100} height={100} alt="CSS" />
        </div>
        <div className={`${styles.gridBox} flex justify-center items-center`}>
          <Image src={Javascript} width={100} height={100} alt="javascript" />
          <Image src={TypeScript} width={100} height={100} alt="typescript" />
        </div>
        <div
          className={`${styles.gridBox} p-4 text-[2rem] flex justify-center items-center gap-4`}
        >
          <Image src={React} width={80} height={80} alt="React" />
          <Image src={NextJs} width={100} height={100} alt="NextJs" />
        </div>
        <div
          className={`${styles.gridBox}  text-white p-4 text-[2rem] flex justify-center items-center gap-4`}
        >
          <Image src={Figma} width={100} height={100} alt="Figma" />
          <Image src={Github} width={80} height={80} alt="Github" />
        </div>
        <div
          className={`${styles.gridBox}  text-white p-4 text-[2rem] flex justify-center items-center gap-4`}
        >
          <Image src={Discord} width={100} height={100} alt="Discord" />
          <Image src={Slack} width={80} height={80} alt="Slack" />
        </div>
        <div
          className={`${styles.gridBox}   p-4 text-[2rem] flex justify-center items-center gap-4`}
        >
          <Image src={Vercel} width={100} height={100} alt="Vercel" />
        </div>
        <div
          className={`${styles.gridBox}  font-extrabold text-[2.5rem] font-main flex flex-col  justify-center items-center text-center tracking-widest gap-3`}
        >
          <p className="bg-pink p-2 rounded">Zustand</p>
          <p className=" bg-lightGray p-2 rounded">TanstackQuery</p>
          <p className="bg-blue-200 p-2 rounded">TailwindCSS</p>
        </div>
        <div
          className={`${styles.gridBox}  font-extrabold text-[2.5rem] font-main flex flex-col  justify-center items-center text-center tracking-widest gap-3`}
        >
          <p className="bg-green-600 p-2 rounded">Supabase</p>
          <p className="bg-red-300 p-2 rounded">Firebase</p>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
