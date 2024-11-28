const ScrollDownButton = () => {
  return (
    <button className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-10">
      <div className=" animate-bounce">
        <p className="font-main text-4xl tracking-widest">SCROLL !</p>
        <svg
          className="text-black w-24 h-24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7 7 7-7"
          ></path>
        </svg>
      </div>
    </button>
  );
};

export default ScrollDownButton;
