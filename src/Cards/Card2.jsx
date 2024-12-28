import Globe from "./Globe";

const Card2 = () => {
  return (
    <div className="pl-[20px]">
      <div
        className="relative w-[500px] h-[150px] overflow-hidden bg-[#080424]
        border-[1px] border-[#d4c1ff] rounded-[25px] group"
      >
        <div
          className="relative w-full h-full transition-transform 
          duration-300 ease-in-out group-hover:-translate-x-[-10px]"
        >
          <div
            className="absolute top-5 left-1/2 transform -translate-x-1/2 z-10 
            text-white font-bold text-[25px] text-center w-full"
          >
            I'm very flexible with time zone communications
          </div>

          <div className="absolute top-0 left-0 w-full h-full">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
