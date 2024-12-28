import Image from "../Assets/whale.png";

const AboutMe = () => {
  const technologies = [
    "VueJS",
    "React",
    "C",
    "C++",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Git"
  ];

  const personalInfo = [
    { title: "Name", content: "Youcef Kahlouche" },
    { title: "Age", content: "19" },
    { title: "Location", content: "Algeria" },
  ];

  return (
    <div id="AboutMe"
      className="relative min-h-screen bg-[#270b54] flex flex-col items-center justify-center pt-[-250px] sm:mt-0"
    >
      <div className="absolute inset-0 sm:hidden bg-black opacity-50"></div> 
      <div className="absolute inset-0 sm:block bg-cover bg-center bg-[#14072b]"
        style={{
          backgroundImage: `url(${Image})`,
        }}
      ></div> 
      
      <div className="relative z-10 w-full max-w-[1200px] px-6 text-center">
        <div className="text-[#d4c1ff] font-bold text-4xl mb-8 text-shadow-lg">About Me</div>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {personalInfo.map((info, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#1e1930] to-[#380c56] text-white rounded-[10px] px-6 py-4 w-[200px] text-center transition-transform transform hover:scale-105 hover:shadow-xl hover:shadow-[#af92f3] duration-300"
            >
              <div className="font-bold text-xl">{info.title} :</div>
              <div className="text-sm">{info.content}</div>
            </div>
          ))}
        </div>

        <div className="relative w-full h-[160px] overflow-hidden bg-[#08042476] mr-6 border-[1px] border-[#d4c1ff] rounded-[25px] group flex items-center px-6 mb-6 justify-center">
          <div className="flex-1 transform transition-transform duration-300 group-hover:translate-x-[20px]">
            <div className="text-[#711eff] font-normal text-[25px] w-[150px]">
              My Tech Stack
            </div>
          </div>
          <div className="wrapper flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className={`item item${index + 1} text-center`}>
                <div className="tech">{tech}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1e1930] to-[#380c56] text-white rounded-[15px] px-8 py-6 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mt-10 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#af92f3] mx-auto">
          <div className="text-sm md:text-base leading-relaxed text-[#f0f0f0]">
            I'm a passionate and driven computer science student with a focus on
            web development, machine learning, and AI. I'm constantly learning
            new technologies and refining my skills to create innovative solutions
            for real-world problems. In my free time, I enjoy tackling challenging
            projects and exploring new areas in the tech world.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
