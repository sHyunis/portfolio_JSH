"use client";
import React, { useEffect } from "react";
import AboutPage from "./about/page";
import HomePage from "./home/page";
import SkillPage from "./skill/page";
import ProjectPage from "./project/page";
import ContactPage from "./contact/page";
import gsap from "gsap";

const Home = () => {
  useEffect(() => {
    gsap.from(".page", {
      y: 50,
      duration: 1,
      stagger: 0.2,
    });
  }, []);
  return (
    <div className="home">
      <HomePage />
      <div className="page">
        <AboutPage />
      </div>
      <div className="page">
        <SkillPage />
      </div>
      <div className="page">
        <ProjectPage />
      </div>
      <div className="page">
        <ContactPage />
      </div>
    </div>
  );
};

export default Home;
