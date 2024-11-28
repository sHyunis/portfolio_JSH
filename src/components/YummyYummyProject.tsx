import Image from "next/image";
import Link from "next/link";

const ProjectContent = [
  {
    title: "GITHUB",
    content: [
      <Link
        href="https://github.com/sHyunis/Yummy-Yummy?tab=readme-ov-file"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-500 cursor-pointer"
      >
        GitHub Repository
      </Link>,
    ],
  },
  {
    title: "링크",
    content: [
      <Link
        href="https://yummy-yummy-pi.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-700 cursor-pointer"
      >
        https://yummy-yummy-pi.vercel.app
      </Link>,
    ],
  },
  { title: "개발기간", content: ["2024.08.28 ~ 2024.09.04 (1주)"] },
  { title: "플랫폼", content: ["웹"] },
  { title: "개발인원", content: ["프론트엔드 5명"] },
  {
    title: "담당역할",
    content: [
      "로그인, 회원가입 - 소셜 로그인, 이메일 회원가입, 로그인",
      "전체 디자인",
    ],
  },
  { title: "개발환경", content: [""] },
  { title: "언어", content: ["JavaScript"] },
  {
    title: "라이브러리, API",
    content: ["React, Styled-components, React-router, Swal"],
  },
  { title: "데이터베이스", content: ["supabase"] },
  { title: "협업설계", content: ["Notion, Figma, Slack, Gibhub"] },
];
const YummyYummyProject = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center font-koLogo">
      <div className="w-[90%] h-[100%] bg-darkGray p-8 ">
        <div className="flex items-center gap-4">
          <div className="flex gap-4 items-center">
            <h1 className="text-white text-[28px]  font-extrabold">
              Yummy Yummy!
            </h1>
            <Image
              src="/imgs/YummyYummyLogo.jpg"
              alt="YummyYummyLogo"
              width={60}
              height={50}
            />
          </div>
          <p className="text-lightGray text-[16px]">
            | 유저들이 공유한 요리 레시피 기록을 한 눈에 볼 수 있는 뉴스피드
            사이트
          </p>
        </div>
        <div className="bg-lightGray mt-8 pl-8 pr-8 h-[90%] relative flex items-center gap-10">
          <table>
            <tbody>
              {ProjectContent.map((menu, idx) => (
                <tr className="gap-4" key={idx}>
                  <th className="text-left text-black font-bold w-[150px] text-xl py-2">
                    {menu.title}
                  </th>
                  <td className="text-xl font-extrabold">
                    {menu.content.map((item, idx) => (
                      <p
                        key={idx}
                        className="whitespace-pre-wrap break-words py-2"
                      >
                        {item}
                      </p>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col  gap-16 justify-center items-center">
            <Image
              src="/imgs/yummyyummyMainPage.png"
              alt="yummyyummyMainPage"
              width={500}
              height={400}
            />

            <Image
              src="/imgs/yummyyummyLoginPage.png"
              alt="yummyyummyLoginPage"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YummyYummyProject;
