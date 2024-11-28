import Image from "next/image";
import Link from "next/link";

const ProjectContent = [
  {
    title: "GITHUB",
    content: [
      <Link
        href="https://github.com/sHyunis/Moview"
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
        href="https://moview-phi.vercel.app/index.html"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-700 cursor-pointer"
      >
        https://moview-phi.vercel.app/index.html
      </Link>,
    ],
  },
  { title: "개발기간", content: ["2024.08.28 ~ 2024.09.04 (1주)"] },
  { title: "플랫폼", content: ["웹"] },
  { title: "개발인원", content: ["프론트엔드 4명"] },
  {
    title: "담당역할",
    content: [
      "메인 홈 페이지",
      "전체 디자인",
      "메뉴바",
      "상세페이지 - 댓글 추가, 삭제",
    ],
  },
  { title: "개발환경", content: [""] },
  { title: "언어", content: ["JavaScript"] },
  {
    title: "라이브러리, API",
    content: ["html,css, TMDB"],
  },
  { title: "협업설계", content: ["Notion, Figma, Slack, Gibhub"] },
];
const MoviewProject = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center font-koLogo">
      <div className="w-[90%] h-[100%] bg-darkGray p-8 ">
        <div className="flex items-center gap-4">
          <div className="flex gap-8 items-center">
            <h1 className="text-white text-5xl  font-extrabold">Moview</h1>
            <Image
              src="/imgs/MoviewLogo.png"
              alt="MoviewLogo"
              width={100}
              height={50}
            />
          </div>
          <p className="text-lightGray text-3xl">
            | 영화 검색 사이트의 기본 기능을 남아 커뮤니티 기반 영화 정보 사이트
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
              src="/imgs/MoviewMainPage.png"
              alt="MoviewMainPage"
              width={500}
              height={400}
            />

            <Image
              src="/imgs/MoviewDetailPage.png"
              alt="MoviewDetailPage"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviewProject;
