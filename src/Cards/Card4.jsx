import FolderImgae from "../Assets/folder.png"
const Card4 = () => {
  return (
    <div className="pl-[50px] pb-8">
      <div className="relative w-[400px] h-[150px] overflow-hidden bg-[#080424]
             border-[1px] border-[#d4c1ff] rounded-[25px] group">
        <div className="relative w-full h-full transition-transform 
          duration-300 ease-in-out group-hover:-translate-x-[-10px]">
            
          <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-10 
            text-white font-bold text-[22px] text-center w-full">
              Tech enthusiast with a passion for development.
          </div>
          </div>
          <div className="absolute bottom-[-20px] right-0 w-[150px] h-[100px] ">
            <img src={FolderImgae} />
          </div>
        
      </div>
    </div>
  );
};

export default Card4;
