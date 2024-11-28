import Image from "next/image";
import Link from "next/link";

const ProjectContent = [
  {
    title: "GITHUB",
    content: [
      <Link
        href="https://github.com/sHyunis/WHOAMI-MBTITEST"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 cursor-pointer"
      >
        GitHub Repository
      </Link>,
    ],
  },
  {
    title: "링크",
    content: [
      <Link
        href="https://whoami-mbtitest.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-700 cursor-pointer"
      >
        https://whoami-mbtitest.vercel.app/
      </Link>,
    ],
  },
  { title: "개발기간", content: ["2024.09.09 ~ 2024.09.11 (1주)"] },
  { title: "플랫폼", content: ["웹"] },
  { title: "개발인원", content: ["개인프로젝트"] },
  {
    title: "페이지소개",
    content: [
      "메인페이지- 페이지소개",
      "로그인, 회원가입",
      "마이페이지",
      "테스트페이지",
      "결과조회페이지",
    ],
  },
  { title: "개발환경", content: [""] },
  { title: "언어", content: ["JavaScript"] },
  {
    title: "라이브러리, API",
    content: ["React, Styled-components, React-router"],
  },
  { title: "데이터베이스", content: ["supabase"] },
  { title: "협업설계", content: ["Notion, Figma, Slack, Gibhub"] },
];
const WhoamIProject = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center font-koLogo">
      <div className="w-[90%] h-[100%] bg-darkGray p-8 ">
        <div className="flex items-center gap-4">
          <div className="flex gap-4 items-center">
            <h1 className="text-white text-5xl  font-extrabold">WHOAMI</h1>
            <Image
              src="/imgs/WhoamILogo.png"
              alt="WhoamILogo"
              width={100}
              height={50}
            />
          </div>
          <p className="text-lightGray text-3xl">
            | MBTI테스트로 나를 알아보고 타인과 공유하는 사이트
          </p>
        </div>
        <div className="bg-lightGray mt-8 pl-8 pr-8 h-[90%] relative flex items-center gap-32">
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
              src="/imgs/WhoamITestpage.png"
              alt="WhoamITestpage"
              width={400}
              height={400}
            />

            <Image
              src="/imgs/WhoamITestResultPage.png"
              alt="WhoamITestResultPage"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoamIProject;
