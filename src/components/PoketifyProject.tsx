import Image from "next/image";
import Link from "next/link";

const ProjectContent = [
  {
    title: "GITHUB",
    content: [
      <Link
        href="https://github.com/duddlfkd02/Poketify"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 cursor-pointer"
      >
        GitHub Repository
      </Link>,
    ],
  },
  {
    title: "링크",
    content: [
      <Link
        href="https://poketify.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 cursor-pointer"
      >
        https://poketify.vercel.app
      </Link>,
    ],
  },
  { title: "개발기간", content: ["2024.10.10 ~ 2024.10.16 (1주)"] },
  { title: "플랫폼", content: ["모바일, 웹"] },
  { title: "개발인원", content: ["프론트엔드 5명"] },
  {
    title: "담당역할",
    content: [
      "음악추천페이지 - 추천 플레이리스트, 마이 플레이리스트 추가, 삭제, 플레이리스트 재생",
      "갤러리 편집, 대표사진 등록, 인사말입력",
      "반응형 페이지 적용",
    ],
  },
  { title: "개발환경", content: [""] },
  { title: "언어", content: ["TypeScript"] },
  { title: "프레임워크", content: ["Next.js"] },
  {
    title: "라이브러리, API",
    content: ["tailwindCss, Spotify"],
  },
  { title: "상태관리", content: ["zustand, Tanstack Query"] },
  { title: "데이터베이스", content: ["supabase"] },
  { title: "협업설계", content: ["Notion, Figma, Slack, Gibhub"] },
];
const PoketifyProject = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center font-koLogo">
      <div className="w-[90%] h-[100%] bg-darkGray p-8 ">
        <div className="flex items-center gap-4">
          <div className="flex gap-4 items-center">
            <h1 className="text-white text-5xl  font-extrabold">Poketify</h1>
            <Image
              src="/imgs/PoketifyLogo.png"
              alt="PoketifyLogo"
              width={200}
              height={50}
            />
          </div>
          <p className="text-lightGray text-3xl">
            | 플레이리스트를 한번에 청취, 추천, 소통이 가능한 음악 커뮤니티
            사이트
          </p>
        </div>
        <div className="bg-lightGray mt-8 pl-8 pr-8 h-[90%] relative flex items-center gap-4">
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
              src="/imgs/PoketifyPlaylist.png"
              alt="PoketifyPlaylist"
              width={400}
              height={400}
            />

            <Image
              src="/imgs/PoketifyMainpage.png"
              alt="PoketifyMainpage"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoketifyProject;
