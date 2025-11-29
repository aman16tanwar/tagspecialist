import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (item) => {
    setIsMobileMenuOpen(false);

    if (item.id === 'contact') {
      window.dispatchEvent(new CustomEvent('openContactForm'));
      return;
    }

    // If it's a route navigation (like blogs)
    if (item.route) {
      navigate(item.route);
      return;
    }

    // If we're on the homepage, just scroll to section
    if (location.pathname === '/') {
      const section = document.getElementById(item.id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If we're on another page, navigate to homepage then scroll
      navigate('/');
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const section = document.getElementById(item.id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const menuItems = [
    { name: 'Services', route: '/services' },
    { name: 'Case Studies', route: '/case-studies' },
    { name: 'About', route: '/about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="text-2xl font-semibold tracking-tight">
              <span className="text-brand-primary">Tag</span>
              <span className="text-brand-accent">Specialist</span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {menuItems.map((item, index) => (
              item.submenu ? (
                <div key={item.name} className="relative">
                  <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="text-text-main hover:text-brand-primary transition-colors duration-300 font-medium relative group flex items-center text-sm uppercase tracking-wide"
                  >
                    {item.name}
                    <HiChevronDown className="ml-1 w-4 h-4" />
                  </motion.button>
                  {openDropdown === item.name && (
                    <div
                      className="absolute top-full mt-2 bg-white border border-gray-200 rounded-sm shadow-xl py-2 min-w-[180px]"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => navigate(subItem.route)}
                          className="block w-full text-left px-4 py-2 text-text-main hover:text-brand-accent hover:bg-gray-50 transition-colors text-sm"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavigation(item)}
                  className="text-text-main hover:text-brand-primary transition-colors duration-300 font-medium relative group text-sm uppercase tracking-wide"
                >
                  <span className="flex items-center gap-2">
                    {item.name}
                  </span>
                </motion.button>
              )
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              onClick={() => window.dispatchEvent(new CustomEvent('openContactForm'))}
              className="btn-primary"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 py-4 bg-white border border-gray-200 rounded-lg shadow-lg"
          >
            {menuItems.map((item) => (
              item.submenu ? (
                <div key={item.name}>
                  <div className="px-4 py-3 text-text-dark font-semibold text-sm uppercase">{item.name}</div>
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem.name}
                      onClick={() => {
                        navigate(subItem.route);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-8 py-2 text-text-main hover:text-brand-accent hover:bg-gray-50 transition-colors duration-300 text-sm"
                    >
                      {subItem.name}
                    </button>
                  ))}
                </div>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="block w-full text-left px-4 py-3 text-text-main hover:text-brand-accent hover:bg-gray-50 transition-colors duration-300 text-sm uppercase"
                >
                  {item.name}
                </button>
              )
            ))}
            <div className="mt-4 px-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('openContactForm'));
                }}
                className="block w-full text-center px-6 py-3 bg-brand-accent hover:bg-blue-600 text-white font-semibold rounded-sm uppercase text-sm tracking-wider"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;