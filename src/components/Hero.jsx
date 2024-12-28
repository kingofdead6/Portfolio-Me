const HeroSection = () => {
  return (
    <div id="Hero" className="relative min-h-screen bg-gradient-to-b from-gray-600 to-[#14072b]">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <div className="flex items-center justify-center h-full text-center px-4 sm:px-6 md:px-12 pt-[100px] sm:pt-[150px] md:pt-[200px]">
        <div className="text-white z-10 max-w-[90%] sm:max-w-[85%] md:max-w-[725px]">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-[1.8rem] sm:leading-[2rem] md:leading-[2.5rem] mb-4 sm:mb-6">
            Transforming Anything to a
            <span className="inline-block mt-[10px] sm:mt-[15px] md:mt-[20px] text-[#1528b8]"> Web</span>
            <span className="inline-block text-[#bb2020]"> Site</span>
            <span className="inline-block text-[green]">!</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-lg mb-6 sm:mb-8">
            Hi, I'm Youcef, a Front-End Developer ready to code any design.
          </p>

          <a
            href="#projects"
            className="text-white text-xs sm:text-sm md:text-lg font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg bg-gradient-to-r from-[#ab2828] to-indigo-600 
                      animate-gradient-x hover:animate-gradient-x hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Explore Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
