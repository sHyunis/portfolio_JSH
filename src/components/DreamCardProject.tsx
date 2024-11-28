import Image from "next/image";
import Link from "next/link";

const ProjectContent = [
  {
    title: "GITHUB",
    content: [
      <Link
        href="https://github.com/nninyeong/dream-card"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 cursor-pointer"
      >
        GitHub Repository
      </Link>,
    ],
  },
  {
    title: "링크",
    content: [
      <Link
        href="https://www.dream-card.co.kr/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-700 cursor-pointer"
      >
        https://www.dream-card.co.kr
      </Link>,
    ],
  },
  { title: "개발기간", content: ["2024.10 ~ 2024.11 (1개월)"] },
  { title: "플랫폼", content: ["모바일, 웹"] },
  { title: "개발인원", content: ["프론트엔드 5명 UI/UX 1명"] },
  {
    title: "담당역할",
    content: [
      "청첩장 메인제작 페이지 - 글꼴편집, 미리보기적용",
      "갤러리 편집, 대표사진 등록, 인사말입력",
      "마이페이지-전체 레이아웃, 제작진척률, 공유하기",
      "후기조회 - 전체레이아웃, 사진모아보기, 무한스크롤, 좋아요",
      "반응형페이지적용",
    ],
  },
  { title: "개발환경", content: [""] },
  { title: "언어", content: ["TypeScript"] },
  { title: "프레임워크", content: ["Next.js"] },
  {
    title: "라이브러리",
    content: ["React-hook-form, tailwindCss, framer, sharp"],
  },
  { title: "상태관리", content: ["zustand, Tanstack Query"] },
  { title: "데이터베이스", content: ["supabase"] },
  { title: "협업설계", content: ["Notion, Figma, Slack, Gibhub"] },
];
const DreamCardProject = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center font-koLogo">
      <div className="w-[90%] h-[100%] bg-darkGray p-8 ">
        <div className="flex items-center gap-4">
          <div className="flex gap-4 items-center">
            <h1 className="text-white text-5xl  font-extrabold">드림카드</h1>
            <Image
              src="/imgs/dreamCardLogo.png"
              alt="dreamCardLogo"
              width={50}
              height={50}
            />
          </div>
          <p className="text-lightGray text-3xl">
            | 모바일 청첩장 커스텀 제작 서비스
          </p>
        </div>
        <div className="bg-lightGray mt-8 pl-8 h-[90%] relative flex items-center gap-4">
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
          <div className="flex flex-col  justify-center items-center">
            <Image
              src="/imgs/dreamCardDesktop.png"
              alt="dreamCardDesktop"
              width={700}
              height={400}
            />
            <div className="flex gap-7">
              <Image
                src="/imgs/dreamCardMyPage.png"
                alt="dreamCardDesktop"
                width={200}
                height={200}
              />
              <Image
                src="/imgs/dreamCardGallery.png"
                alt="dreamCardDesktop"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamCardProject;
