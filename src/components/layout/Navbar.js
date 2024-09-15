import React, { useState, useEffect } from 'react';
import logo from '../../assets/banner.jpeg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="TAG Specialist" className="h-10 w-auto mr-2" />
          <div className="text-xl font-bold text-white">Tag Specialist</div>
        </div>
        <div className="flex items-center space-x-6">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="text-white hover:text-yellow-400 transition-colors duration-300"
  >
    {children}
  </a>
);

export default Navbar;