import Image from "next/image";
const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center pb-12 bg-grayBg h-[100vh] relative ">
        <div className="w-full h-[150px] relative bg-lightGray ">
        <Image src="/imgs/mainBanner.png" alt="mainBanner" fill className="object-cover"/></div>
        <p className="font-main text-4xl tracking-wider">
          PORTFOLIO BY SO HYUN
        </p>
      </div>
    </div>
  );
};

export default HomePage;
