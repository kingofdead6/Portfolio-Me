import Image from '../Assets/LapTop.jpeg';

const Card6 = () => {
  const work = 'C++ Project';

  return (
    <div className="pl-[50px]">
      <div className="relative w-[700px] h-[390px] overflow-hidden rounded-lg group">
        <img 
          src={Image} 
          alt="Laptop with planet Earth" 
          className="w-full h-full object-cover border-[2px] border-[#14072b] rounded-[25px]"
        />
        <div
          className="absolute top-[150px] left-6 text-white font-bold text-[40px] md:text-3xl pl-[20px]
                  md:max-w-sm transition-all duration-300 group-hover:translate-x-[20px]">
          Currently working on : {" "}
          <span className="text-blue-500 neon-glow">
    {work}
  </span>
</div>

      </div>
    </div>
  );
};

export default Card6;
