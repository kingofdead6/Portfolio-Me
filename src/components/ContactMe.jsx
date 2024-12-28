import github from "../Assets/github.png";
import linkedin from "../Assets/linkedin.png"; 
import x from "../Assets/x.png";
import instagram from "../Assets/instagram.png";

const ContactMe = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/kingofdead6", img: github }, 
    { name: "LinkedIn", url: "https://www.linkedin.com/feed/", img: linkedin },
    { name: "Twitter", url: "https://x.com/home", img: x },
    { name: "Instagram", url: "https://www.instagram.com/softweb_elevation/?next=%2F", img: instagram },
  ];

  return (
    <div
      id="contact"
      className="relative min-h-screen bg-[#2c105b] bg-cover bg-center flex flex-col items-center justify-center pt-[100px]"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 w-full max-w-[1200px] px-6 text-center">
        <div className="text-[#d4c1ff] font-bold text-4xl mb-8 text-shadow-lg">Contact Me</div>
        <div className="text-[#f0f0f0] text-lg mb-6">
          You can reach me through the following social media platforms:
        </div>
        <div className="flex justify-center space-x-8 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-block border-2 border-transparent rounded-full p-2"
            >
              <img
                src={link.img} // Use the image from the `img` field in the `socialLinks` array
                alt={link.name}
                className="w-12 h-12 object-contain transition-all duration-200"
              />
              <span className="absolute inset-0 border-2 border-transparent rounded-full group-hover:border-[#7e89ff] group-hover:shadow-[0_0_8px_3px_rgba(144,0,255,0.8)] transition-all duration-300"></span>
            </a>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[#1e1930] to-[#380c56] text-white rounded-[15px] px-8 py-6 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mt-10 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#af92f3] mx-auto">
          <div className="text-sm md:text-base leading-relaxed text-[#f0f0f0]">
            Feel free to connect with me on any of the platforms above. I'm always open to collaborating on projects or discussing new technologies!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
