import Image from "next/image";
import ScrollDownButton from "./ScrollDownButton";
const Home = () => {
  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center  bg-grayBg  h-[100vh] ">
        <div className="w-full h-[200px] relative ">
          <Image
            src="/imgs/JUNGSOHYUN.svg"
            alt="mainBanner"
            fill
            className="object-cover "
          />
        </div>
        <p className="font-main text-4xl tracking-wider">
          PORTFOLIO BY SO HYUN
        </p>
      </div>
      <ScrollDownButton />
    </div>
  );
};

export default Home;
