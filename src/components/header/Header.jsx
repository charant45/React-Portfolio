import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Logo = () => (
  <a href="index.html" className="text-2xl font-bold uppercase text-white">
    Charan
  </a>
);

const NavItem = ({ href, children }) => (
  <li className="w-full">
    <a href={href} className="block py-2 px-4 text-white hover:bg-gray-700 transition-colors text-lg font-bold">
      {children}
    </a>
  </li>
);

const DownloadButton = () => (
  <a
    href="https://drive.google.com/file/d/1iQt8jrrcDmIDp28tFzIIh0jsAROGhZh0/view?usp=sharing"
    download
    className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded transition-colors text-center w-full md:w-auto font-bold"
  >
    Download CV
  </a>
);

const MobileMenu = ({ isOpen, onClose }) => (
  <div
    className={`fixed inset-y-0 right-0 w-1/2  bg-[#1E1E1E] p-4 transform ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    } transition-transform duration-300 ease-in-out md:hidden z-50`}
  >
    <button onClick={onClose} className="absolute top-4 right-4 text-white z-50">
      <X className="h-6 w-6" />
      <span className="sr-only">Close menu</span>
    </button>
    <nav className="flex flex-col gap-2 mt-12">
      <ul className="space-y-2 list-none p-0">
        <NavItem href="#home">Home</NavItem>
        <NavItem href="#about">About</NavItem>
        <NavItem href="#skills">Skills</NavItem>
        <NavItem href="#services">Services</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#testimonials">Testimonials</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </ul>
      <div className="mt-4">
        <DownloadButton />
      </div>
    </nav>
  </div>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#1E1E1E] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          <nav className="hidden md:block">
            <ul className="flex space-x-4 list-none">
              <NavItem href="#home">Home</NavItem>
              <NavItem href="#about">About</NavItem>
              <NavItem href="#skills">Skills</NavItem>
              <NavItem href="#services">Services</NavItem>
              <NavItem href="#projects">Projects</NavItem>
              <NavItem href="#testimonials">Testimonials</NavItem>
              <NavItem href="#contact">Contact</NavItem>
            </ul>
          </nav>
          <div className="hidden md:block">
            <DownloadButton />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}
