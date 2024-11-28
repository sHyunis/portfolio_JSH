"use client";
import React, { useRef, useState, useEffect } from "react";
import About from "@/components/About";
import Header from "@/components/Header";
import Home from "@/components/Home";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

const MainPage = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  return (
    <div className="home">
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillRef}>
        <Skill />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillRef={skillRef}
        projectRef={projectRef}
      />
    </div>
  );
};

export default MainPage;
