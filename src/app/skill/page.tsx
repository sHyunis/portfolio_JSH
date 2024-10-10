import React from "react";
import styles from "@/styles/skill.module.css";

const SkillPage = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen h-[100vh] w-full bg-black ${styles.background}`}
    >
      <h2 className="text-black  text-huge font-main spac">SKILLS</h2>
      <div
        className={`w-[95%] h-[70%] bg-black ${styles.gridContainer} rounded`}
      >
        <div className={`${styles.gridBox}`}></div>
        <div className={`${styles.gridBox}`}></div>
        <div className={`${styles.gridBox}`}></div>
        <div className={`${styles.gridBox}`}></div>
        <div className={`${styles.gridBox}`}></div>
        <div className={`${styles.gridBox}`}></div>
        <div className={`${styles.gridBox}`}></div>
        <div className={`${styles.gridBox}`}></div>
      </div>
    </div>
  );
};

export default SkillPage;
