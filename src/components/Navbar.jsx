import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { portfolioData } from '../data/content';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Education', to: 'education' },
    { name: 'Tools', to: 'tools' },
    { name: 'Achievements', to: 'achievements' },
  ];

  return (
    <nav 
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-gradient-to-b from-white to-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <div className="text-2xl font-bold gradient-text">
                KM Mohiuddin
              </div>
            </ScrollLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className={clsx(
                  'cursor-pointer text-sm font-medium transition-colors duration-300',
                  isScrolled 
                    ? 'text-primary-700 hover:text-accent-500' 
                    : 'text-primary-600 hover:text-accent-500'
                )}
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>

          {/* CTA and Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href={portfolioData.personal.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'hidden md:inline-block px-6 py-2 rounded-lg font-semibold transition-all duration-300',
                isScrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50'
              )}
            >
              Download CV
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-primary-600"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-primary-100 py-4">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-primary-700 hover:text-accent-500 font-medium cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              ))}
              <a
                href={portfolioData.personal.cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold text-center hover:bg-primary-700 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Download CV
              </a>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4 border-t border-primary-100">
                <a
                  href={portfolioData.personal.profileLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-accent-500 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={portfolioData.personal.profileLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-accent-500 transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={portfolioData.personal.profileLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-accent-500 transition-colors"
                >
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
