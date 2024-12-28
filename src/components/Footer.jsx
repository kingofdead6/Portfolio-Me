const Footer = () => {
    return (
      <footer className="relative bg-gradient-to-r from-[#240d5f] to-[#160025] py-16 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-12">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-extrabold text-[#d4c1ff] mb-4 text-shadow-xl">Stay Connected</h3>
            <p className="text-lg text-[#f0f0f0] max-w-[700px] mx-auto leading-relaxed">
              Let's connect! Feel free to reach out for collaboration, discussion, or to simply share ideas. I would love to hear from you.
            </p>
          </div>
  
          <div className="flex flex-wrap justify-between mb-12">
            <div className="w-full sm:w-1/3 text-center sm:text-left mb-8 sm:mb-0">
              <h4 className="text-2xl font-semibold text-[#d4c1ff] mb-4">About Me</h4>
              <p className="text-[#f0f0f0] text-lg leading-relaxed">
                I am a passionate developer who thrives on creating meaningful projects. My goal is to help businesses grow, innovate, and succeed through technology. Let's collaborate!
              </p>
            </div>
  
            <div className="w-full sm:w-1/3 text-center sm:text-left mb-8 sm:mb-0">
              <h4 className="text-2xl font-semibold text-[#d4c1ff] mb-4">Contact</h4>
              <p className="text-[#f0f0f0] text-lg leading-relaxed">
                Got questions or ideas? I'd love to discuss new projects, tech trends, or anything you're passionate about. Reach out to me!
              </p>
              <p className="mt-4 text-[#f0f0f0] text-lg">
                <a href="mailto:ny_kahlouche@esi.dz" className="text-[#7e89ff] hover:text-[#d4c1ff] transition-all duration-300">
                  ny_kahlouche@esi.dz
                </a>
              </p>
            </div>
  
            <div className="w-full sm:w-1/3 text-center sm:text-left">
              <h4 className="text-2xl font-semibold text-[#d4c1ff] mb-4">Newsletter</h4>
              <p className="text-[#f0f0f0] text-lg leading-relaxed mb-4">
                Stay up-to-date with my latest work, blog posts, and tech news. Subscribe to my newsletter and never miss an update.
              </p>
              <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-4 w-full sm:w-[300px] rounded-full text-[#240d5f] bg-[#f3f3f3] placeholder-[#9e9e9e] border-2 border-[#7e89ff] focus:outline-none focus:ring-2 focus:ring-[#7e89ff] transition-all duration-300 shadow-lg hover:shadow-2xl"
              />

              <button className="px-8 py-4 bg-[#7e89ff] text-white rounded-full shadow-lg hover:bg-[#5f74c3] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#5f74c3] transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>

            </div>
          </div>
            <div className="text-center mt-12">
            <p className="text-sm text-[#f0f0f0]">
              &copy; 2024 SoftWebElevation. All rights reserved. Designed with passion.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  