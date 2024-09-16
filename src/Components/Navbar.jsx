import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-70 backdrop-blur-md flex items-center justify-between p-2 shadow-lg z-50">
      <h1 className="text-white text-xl font-bold border-2 border-white rounded-md p-2 ml-5 hover:bg-blue-600 hover:border-blue-600 transition duration-300 ease-in-out">
        KS.
      </h1>
      <button
        className="text-white md:hidden text-sm px-2 py-1 border border-white rounded-md hover:bg-blue-600 transition duration-300"
        onClick={toggleMenu}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <ul
        className={`fixed top-0 right-0 w-64 h-full gap-10 bg-gray-800 bg-opacity-90 flex flex-col items-start p-4 space-y-4 md:space-y-0 md:space-x-4 md:bg-transparent md:opacity-100 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:flex md:relative md:flex-row`}
      >
        <li>
          <AnchorLink
            href="#home"
            className={`text-white text-lg hover:text-blue-400 transition duration-300 ${activeSection === 'home' ? 'border-b-2 border-blue-400' : ''}`}
            onClick={() => handleLinkClick('home')}
          >
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#about"
            className={`text-white text-lg hover:text-blue-400 transition duration-300 ${activeSection === 'about' ? 'border-b-2 border-blue-400' : ''}`}
            onClick={() => handleLinkClick('about')}
          >
            About
          </AnchorLink>
        </li>
        <li>
        <AnchorLink
         href="#projects"
         className={`text-white text-lg hover:text-blue-400 transition duration-300 ${activeSection === 'projects' ? 'border-b-2 border-blue-400' : ''}`}
         onClick={() => handleLinkClick('projects')}
        >
         Projects
        </AnchorLink>

        </li>
        <li>
          <AnchorLink
            href="#contact"
            className={`text-white text-lg hover:text-blue-400 transition duration-300 ${activeSection === 'contact' ? 'border-b-2 border-blue-400' : ''}`}
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>
      <div className="hidden md:block">
        <AnchorLink
          href="#contact"
          className="text-white py-4 px-4  mr-5 border-2 border-white rounded-full text-lg hover:bg-blue-600 hover:border-blue-600 transition-transform"
        >
          Connect With Me
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
