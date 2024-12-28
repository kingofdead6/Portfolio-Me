const Card3 = () => {
    return (
      <div className="pl-[20px] pt-8">
        <div
          className="relative w-[500px] h-[160px] overflow-hidden bg-[#080424]
          border-[1px] border-[#d4c1ff] rounded-[25px] group flex items-center px-6"
        >
          <div
            className="flex-1 transform transition-transform duration-300 group-hover:translate-x-[20px]"
          >
            <div className="text-[#ffffffab] font-normal text-[16px] w-[150px]">
              I constantly try to improve
            </div>
            <div className="text-white font-bold text-[30px] mt-2">
              My tech stack
            </div>
          </div>
  
          <div className="flex flex-wrap gap-2">
            <div className="mt-[-20px]">
              <div className="bg-[#1e1930] text-white rounded-[10px] px-4 py-2 mb-[30px] text-[16px]">
                VueJS
              </div>
              <div className="bg-[#1e1930] text-white rounded-[10px] px-4 py-2 text-[16px]">
                React
              </div>
            </div>
            <div className="mr-[-50px] ml-11">
              <div className="bg-[#1e1930] text-white rounded-[10px] px-4 py-2 mb-[30px] text-[16px] mt-[-50px]">
                C++
              </div>
              <div className="bg-[#1e1930] text-white rounded-[10px] px-4 py-2 text-[16px]">
                JavaScript
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card3;
  