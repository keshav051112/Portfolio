import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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

      {/* Mobile Toggle */}
      <button
        className="text-white md:hidden text-sm px-2 py-1 border border-white rounded-md hover:bg-blue-600 transition duration-300"
        onClick={toggleMenu}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Half-Screen Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-1/2 h-screen bg-black z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        {/* Close Button */}
        <button
          className="text-white text-3xl absolute top-5 right-5"
          onClick={toggleMenu}
        >
          &times;
        </button>

        {/* Vertical Menu */}
        <ul className="flex flex-col justify-center items-start h-full px-6 space-y-8">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <AnchorLink
                href={`#${section}`}
                className={`text-white text-xl hover:text-blue-400 transition duration-300 ${
                  activeSection === section ? 'border-b-2 border-blue-400' : ''
                }`}
                onClick={() => handleLinkClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex md:items-center md:space-x-6">
        {['home', 'about', 'projects', 'contact'].map((section) => (
          <li key={section}>
            <AnchorLink
              href={`#${section}`}
              className={`text-white text-lg hover:text-blue-400 transition duration-300 ${
                activeSection === section ? 'border-b-2 border-blue-400' : ''
              }`}
              onClick={() => handleLinkClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </AnchorLink>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <div className="hidden md:block">
        <AnchorLink
          href="#contact"
          className="text-white py-3 px-4 mr-5 border-2 border-white rounded-full text-lg hover:bg-blue-600 hover:border-blue-600 transition-transform"
        >
          Connect With Me
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
