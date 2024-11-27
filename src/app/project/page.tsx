import CurtainCallProject from "@/components/CurtainCallProject";
import DreamCardProject from "@/components/DreamCardProject";
import WhoamIProject from "@/components/WhoamIProject";
import MoviewProject from "@/components/MoviewProject";
import PoketifyProject from "@/components/PoketifyProject";
import YummyYummyProject from "@/components/YummyYummyProject";

const ProjectPage = () => {
  return (
    <div className="relative min-h-screen  w-full bg-black">
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen  w-full bg-grayBg">
        <DreamCardProject />
        <PoketifyProject />
        <CurtainCallProject />
        <YummyYummyProject />
        <WhoamIProject />
        <MoviewProject />
      </div>
    </div>
  );
};

export default ProjectPage;
