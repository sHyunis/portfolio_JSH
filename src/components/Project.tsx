"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import CurtainCallProject from "@/components/CurtainCallProject";
import DreamCardProject from "@/components/DreamCardProject";
import WhoamIProject from "@/components/WhoamIProject";
import MoviewProject from "@/components/MoviewProject";
import PoketifyProject from "@/components/PoketifyProject";
import YummyYummyProject from "@/components/YummyYummyProject";

const Project = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef(null);
  const [totalWidth, setTotalWidth] = useState(0);
  const HEADER_WIDTH = 200;

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (sectionRef.current) {
      setTotalWidth(sectionRef.current.scrollWidth);
    }

    if (sectionRef.current && totalWidth > 0) {
      gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: -(totalWidth - window.innerWidth + HEADER_WIDTH),
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: `+=${totalWidth}+${HEADER_WIDTH}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        },
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [totalWidth]);

  return (
    <div
      className="relative flex overflow-hidden  min-h-screen w-full bg-black"
      ref={triggerRef}
    >
      <div className="flex w-full" ref={sectionRef}>
        <div className="project-panel min-w-full min-h-screen bg-grayBg">
          <DreamCardProject />
        </div>
        <div className="project-panel min-w-full min-h-screen bg-grayBg">
          <PoketifyProject />
        </div>
        <div className="project-panel min-w-full min-h-screen bg-grayBg">
          <CurtainCallProject />
        </div>
        <div className="project-panel min-w-full min-h-screen bg-grayBg">
          <YummyYummyProject />
        </div>
        <div className="project-panel min-w-full min-h-screen bg-grayBg">
          <WhoamIProject />
        </div>
        <div className="project-panel min-w-full min-h-screen bg-grayBg">
          <MoviewProject />
        </div>
      </div>
    </div>
  );
};

export default Project;
