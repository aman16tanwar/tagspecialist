import React, { useState, useEffect } from 'react';
import logo from '../../assets/banner.jpeg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="TAG Specialist" className="h-10 w-auto mr-2" />
          <div className="text-xl font-bold text-white">Tag Specialist</div>
        </div>
        <div className="flex space-x-6">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-yellow-400 transition-colors duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-white hover:text-yellow-400 transition-colors duration-300"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-yellow-400 transition-colors duration-300"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
