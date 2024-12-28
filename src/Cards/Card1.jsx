import GamerImage from '../Assets/Gamer.jpg';

const Card1 = () => {
  return (
    <div className="pl-[50px]">
      <div className="relative w-[650px] h-[350px] overflow-hidden rounded-lg group">
        <img 
          src={GamerImage} 
          alt="Laptop with planet Earth" 
          className="w-full h-full object-cover border-[2px] border-[#14072b] rounded-[25px]"
        />
        <div className="absolute bottom-6 left-6 text-white font-bold text-[30px] md:text-3xl pl-[20px]
         max-w-[100px] md:max-w-sm transition-all duration-300 group-hover:translate-x-[20px]">
          I prioritize client collaboration, fostering open communication
        </div>
      </div>
    </div>
  );
};

export default Card1;
