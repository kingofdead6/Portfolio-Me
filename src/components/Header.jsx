import { useState, useEffect } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  const navLinks = [
    { name: "Home", href: "#Hero" },
    { name: "About", href: "#AboutMe" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-[#240d5f8b] bg-opacity-90 text-white rounded-[10px] px-6 py-3 shadow-lg 
        transition-transform duration-300 ${isVisible ? "translate-y-[0px]" : "-translate-y-[200px]"}`}
    >
      <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-sm sm:text-xl font-medium small-text">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-[#7e89ff] transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
