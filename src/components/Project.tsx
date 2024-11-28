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
  const sectionRef = useRef<HTMLDivElement | null>(null); // 타입을 명시적으로 지정
  const triggerRef = useRef(null);
  const [totalWidth, setTotalWidth] = useState(0); // scrollWidth를 상태로 저장

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // DOM이 렌더링되고 ref가 참조된 후에 totalWidth 계산
    if (sectionRef.current) {
      setTotalWidth(sectionRef.current.scrollWidth); // scrollWidth 계산
    }

    // GSAP 애니메이션 설정
    if (sectionRef.current && totalWidth > 0) {
      gsap.fromTo(
        sectionRef.current,
        { x: 0 }, // 초기 위치
        {
          x: -totalWidth + window.innerWidth, // 끝 위치 (전체 너비만큼 이동)
          ease: "none", // 부드럽게 이동
          scrollTrigger: {
            trigger: triggerRef.current, // 스크롤이 시작될 요소
            start: "top top", // 시작 위치
            end: `+=${totalWidth}`, // 끝 위치
            scrub: 1, // 스크롤에 맞춰 부드럽게 애니메이션
            pin: true, // 페이지 고정 기능
            anticipatePin: 1, // 스크롤에 더 부드러운 고정 기능을 추가
          },
        },
      );
    }

    // Clean-up: ScrollTrigger가 제거될 때
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [totalWidth]); // totalWidth가 변경될 때마다 실행

  return (
    <div
      className="relative flex overflow-hidden min-h-screen w-full bg-black"
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
