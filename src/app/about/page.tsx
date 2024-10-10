import Image from "next/image";
import React from "react";
import profile from "@/assets/images/profile.png";
import styles from "@/styles/about.module.css";
import github from "@/assets/images/github_loco_icon.svg";
import velog from "@/assets/images/velog_logo_icon_.svg";
import Link from "next/link";
const AboutPage = () => {
  return (
    <div
      className={`h-[100vh] min-h-screen flex items-start bg-black ${styles.background}`}
    >
      <div className="flex w-[90%] mx-auto gap-40 items-center justify-center">
        <div className="w-[95%] h-[100vh] flex bg-color rounded justify-around items-center  relative">
          <div>
            <p className="w-[95%] font-main text-huge text-white font-bold mb-8 ">
              ABOUT
            </p>
            <div className="border-2 border-solid border-white border-r-0 border-l-0 border-b-0 pt-8 pb-4">
              <p className="font-koLogo text-2xl font-bold  text-white leading-loose">
                안녕하세요 프론트엔드 개발자
                <span className="font-extrabold text-4xl text-pink">
                  &nbsp;정소현&nbsp;
                </span>
                입니다 <br />
                끊임없는 학습과 성장으로
                <br /> 문제를 해결하며, 책임감을 가지고
                <br /> 가치를
                <span className="font-extrabold text-3xl text-pink">
                  &nbsp; 함께 하고싶은 개발자&nbsp;
                </span>
                가 되겠습니다.
              </p>

              <p className="font-main p-8 font-extrabold text-5xl ml-16 tracking-wider text-white ">
                - Rome wasn &apos;t built in a day
              </p>
              <div className="flex justify-center items-center border-2 border-solid border-white border-l-0 border-r-0 border-b-0 pt-7 ">
                <div>
                  <p className="font-koLogo text-2xl font-bold leading-relaxed text-white  pb-4">
                    BIRTH : 2000.09.08 <br />
                    FRONTEND DEVELOPER <br />
                    REACT / NEXT.JS
                  </p>
                </div>

                <div className="bg-white  w-[150px] p-2 rounded mx-auto flex justify-around">
                  <Link href="https://github.com/sHyunis" target="_blank">
                    <div>
                      <Image src={github} alt="github" width={50} height={50} />
                    </div>
                  </Link>
                  <Link href="https://shyunis.github.io/" target="_blank">
                    <div>
                      <Image src={velog} alt="velog" width={50} height={50} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Image src={profile} alt="profile" width={300} height={50} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;