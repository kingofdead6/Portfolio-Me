import { useState } from "react";

const Card5 = () => {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  const [buttonText, setButtonText] = useState("Copy my email address");

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100; 
    const y = ((clientY - top) / height) * 100; 
    setGradientPosition({ x, y });
  };

  const handleButtonClick = () => {
    navigator.clipboard.writeText("ny_kahlouche@esi.dz");
    setButtonText("Email Copied!");
    setTimeout(() => setButtonText("Copy my email address"), 2000); 
  };

  return (
    <div  className="pl-[50px]">
      <div
        className="relative w-[400px] h-[200px] rounded-[20px] shadow-lg flex flex-col items-center 
                    justify-center transition-colors duration-200 z-[-10px]"
                    style={{
                      background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, blue, red, purple)`,
                    }}
        onMouseMove={handleMouseMove}
      >
        <div className="text-white text-[22px] font-bold text-center">
          Do you want to start a project together?
        </div>
        <button
  className="mt-6 bg-[#080424] text-white py-2 px-4 rounded-lg flex items-center
      gap-2 hover:bg-[#1c034d] transition duration-300 ease-in-out relative border-movement"
  onClick={handleButtonClick}
>
  
  <svg
    height="100%"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0" 
  >
    <rect
      rx="8"
      ry="8"
      className="line"
      height="100%"
      width="100%"
      stroke-linejoin="round"
    />
  </svg>

  <div className="inner flex items-center gap-2 relative">
    {buttonText}

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 relative z-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 16v4a2 2 0 002 2h8a2 2 0 002-2v-4M16 12H8a2 2 0 00-2 2v4a2 2 0 002 2h8a2 2 0 002-2v-4a2 2 0 00-2-2zm0-4H8a2 2 0 00-2 2v4m4-8v-4"
      />
    </svg>
  </div>
</button>


      </div>
      </div>
  );
};

export default Card5;
