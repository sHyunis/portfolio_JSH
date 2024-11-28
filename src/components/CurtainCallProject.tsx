import Image from "next/image";
import Link from "next/link";

const ProjectContent = [
  {
    title: "GITHUB",
    content: [
      <Link
        href="https://github.com/dev-rjw/outsourcing-project"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-500 cursor-pointer"
      >
        GitHub Repository
      </Link>,
    ],
  },

  { title: "개발기간", content: ["2024.9.11 ~ 2024.9.23 (11일)"] },
  { title: "플랫폼", content: ["웹"] },
  { title: "개발인원", content: ["프론트엔드 5명"] },
  {
    title: "담당역할",
    content: [
      "공연정보 상세페이지 - kakaoApi 공연위치 정보 나타내기",
      "댓글 추가 삭제",
      "kopis Api 상세페이지 정보표시",
    ],
  },
  { title: "개발환경", content: [""] },
  { title: "언어", content: ["JavaScript"] },
  {
    title: "라이브러리, API",
    content: [
      "React, Styled Components, React router, Kopis API, kakao Map, sweetAlert",
    ],
  },
  { title: "상태관리", content: ["zustand, Tanstack Query"] },
  { title: "데이터베이스", content: ["supabase"] },
  { title: "협업설계", content: ["Notion, Figma, Slack, Gibhub"] },
];
const CurtainCallProject = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center font-koLogo">
      <div className="w-[90%] h-[100%] bg-darkGray p-8 ">
        <div className="flex items-center gap-4">
          <div className="flex gap-4 items-center">
            <h1 className="text-white text-5xl  font-extrabold">커튼콜</h1>
            <Image
              src="/imgs/curtainCallLogo.png"
              alt="curtainCallLogo"
              width={80}
              height={50}
            />
          </div>
          <p className="text-lightGray text-3xl">
            | 공연을 공유하고 검색할 수 있는 페이지
          </p>
        </div>
        <div className="bg-lightGray mt-8 pl-8 pr-8 h-[90%] relative flex items-center gap-4">
          <table>
            <tbody>
              {ProjectContent.map((menu, idx) => (
                <tr className="gap-4" key={idx}>
                  <th className="text-left text-black font-bold w-[150px] text-2xl py-2">
                    {menu.title}
                  </th>
                  <td className="text-2xl font-extrabold">
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
              src="/imgs/curtainCallMainPage.png"
              alt="curatinCallMainPage"
              width={500}
              height={400}
            />

            <Image
              src="/imgs/curtainCallDetailPage.png"
              alt="curtainCallDetailPage"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurtainCallProject;
