import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Logo = () => (
  <a href="#home" className="text-3xl font-bold text-white hover:text-orange-400 transition-colors">
    Charan
  </a>
);

const NavItem = ({ href, isActive, children }) => (
  <li>
    <a
      href={href}
      className={`relative px-4 py-2 text-base font-medium transition-colors ${
        isActive 
          ? 'text-orange-400' 
          : 'text-gray-100 hover:text-orange-400'
      }`}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 w-full bg-orange-400"
          layoutId="underline"
        />
      )}
    </a>
  </li>
);

const DownloadButton = () => (
  <a
    href="https://drive.google.com/file/d/1iQt8jrrcDmIDp28tFzIIh0jsAROGhZh0/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center px-6 py-2 text-base font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors duration-200"
  >
    Download CV
  </a>
);

const MobileMenu = ({ isOpen, onClose, activeSection }) => (
  <motion.div
    initial={{ opacity: 0, x: '100%' }}
    animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
    transition={{ duration: 0.2 }}
    className="fixed inset-y-0 right-0 w-full sm:w-80 bg-[#1E1E1E] shadow-2xl p-6 z-50"
  >
    <button onClick={onClose} className="absolute top-6 right-6 text-white">
      <X className="h-7 w-7" />
    </button>
    <nav className="mt-16">
      <ul className="space-y-6">
        {['home', 'about', 'skills', 'projects', 'certificates', 'contact'].map((section) => (
          <NavItem 
            key={section} 
            href={`#${section}`} 
            isActive={activeSection === section}
          >
            <span className="text-lg">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
          </NavItem>
        ))}
      </ul>
      <div className="mt-8">
        <DownloadButton />
      </div>
    </nav>
  </motion.div>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Add scroll-padding to document when component mounts
    document.documentElement.style.setProperty('scroll-padding-top', '100px');

    const handleScroll = () => {
      // Update header background
      setIsScrolled(window.scrollY > 20);

      // Update active section
      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up scroll-padding when component unmounts
      document.documentElement.style.removeProperty('scroll-padding-top');
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled ? 'bg-[#1E1E1E]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Logo />
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8 font-bold">
              {['home', 'about', 'skills', 'projects', 'certificates', 'contact'].map((section) => (
                <NavItem 
                  key={section} 
                  href={`#${section}`} 
                  isActive={activeSection === section}
                >
                  <span className="text-base">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                </NavItem>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-6">
            <div className="hidden md:block">
              <DownloadButton />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-white hover:text-orange-400 transition-colors"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </header>
  );
}
