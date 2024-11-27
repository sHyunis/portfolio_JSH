import Image from "next/image";

const SkillPage = () => {
  return (
    <div className="relative min-h-screen h-[100vh] w-full bg-black">
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen h-[100vh] w-full bg-grayBg">
        <h2 className="text-white text-4xl font-bold mb-6">SKILLS</h2>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 w-[95%] h-[70%]  rounded-lg p-4">
          {/* Box 1 */}
          <div className="flex justify-center items-center text-white p-4 text-2xl gap-4 bg-mediumGray">
            <Image src="/imgs/html.png" width={100} height={100} alt="HTML" />
            <Image src="/imgs/css.png" width={100} height={100} alt="CSS" />
          </div>

          {/* Box 2 */}
          <div className=" flex justify-center items-center gap-4 bg-darkGray ">
            <Image src="/imgs/javascript.png" width={100} height={100} alt="javascript" />
            <Image src="/imgs/typescript.png" width={100} height={100} alt="typescript" />
          </div>

          {/* Box 3 */}
          <div className=" flex justify-center items-center p-4 gap-4 bg-mediumGray">
            <Image src="/imgs/react.png" width={80} height={80} alt="React" />
            <Image src="/imgs/next.js.png" width={130} height={100} alt="NextJs" />
          </div>

          {/* Box 4 */}
          <div className=" text-white flex justify-center items-center p-4 gap-4 bg-blackGray">
            <Image src="/imgs/Figma.png" width={100} height={100} alt="Figma" />
            <Image src="/imgs/Github.png" width={100} height={100} alt="Github" />
          </div>

          {/* Box 5 */}
          <div className=" text-white flex flex-col justify-center items-center gap-4 p-4 bg-darkGray">
            <Image src="/imgs/Discord.png" width={80} height={80} alt="Discord" />
            <Image src="/imgs/slack.png" width={60} height={60} alt="Slack" />
            <Image src="/imgs/notion.png" width={100} height={60} alt="notion" />
          </div>

          {/* Box 6 */}
          <div className="bg-gray-700 flex justify-center items-center p-4 gap-4 bg-mediumGray">
            <Image src="/imgs/Vercel.png" width={130} height={100} alt="Vercel" />
          </div>

          {/* Box 7 */}
          <div className="flex flex-wrap w-full justify-center gap-3 items-center   font-extrabold  bg-blackGray ">
          <Image src="/imgs/zustand.jpeg" width={130} height={100} alt="zustand" />
          <Image src="/imgs/tanstackQuery.png" width={160} height={100} alt="tanstackQuery" />
          <Image src="/imgs/tailwindcss.jpg" width={160} height={100} alt="tailwindcss" />
          <Image src="/imgs/styledComponents.jpeg" width={130} height={100} alt="styledComponents" />
          </div>

          {/* Box 8 */}
          <div className="bg-gray-300 bg-opacity-70 flex flex-col justify-center items-center text-center gap-3 font-extrabold text-2xl tracking-widest bg-darkGray">
          <Image src="/imgs/supabase.png" width={150} height={100} alt="supabase" />
          <Image src="/imgs/firebase.png" width={150} height={100} alt="firebase" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
