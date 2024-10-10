// pages/index.jsx
import React from "react";
import styles from "@/styles/home.module.css";
const HomePage = () => {
  return (
    <div>
      <div className={`flex pb-12 ${styles.background}`}>
        <div className={`bg-lightGray p-12" ${styles.mainBanner}`}></div>
        <p className="font-main text-3xl tracking-wider">
          PORTFOLIO BY SO HYUN
        </p>
      </div>
    </div>
  );
};

export default HomePage;
