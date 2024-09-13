import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Logo = () => (
  <a href="index.html" className="text-2xl font-bold uppercase text-white">
    Charan
  </a>
)

const NavItem = ({ href, children }) => (
  <li className="w-full">
    <a href={href} className="block py-2 px-4 text-white hover:bg-gray-700 transition-colors text-lg font-bold">
      {children}
    </a>
  </li>
)

const DownloadButton = () => (
  <a
    href="https://drive.google.com/file/d/1iQt8jrrcDmIDp28tFzIIh0jsAROGhZh0/view?usp=sharing"
    download
    className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded transition-colors text-center w-full md:w-auto font-bold"
  >
    Download CV
  </a>
)

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <motion.div
      className="relative w-16 h-16"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <motion.div className="absolute inset-0 border-4 border-white rounded-full" />
      <motion.div
        className="absolute inset-1 border-4 border-orange-500 rounded-full"
        style={{ borderRightColor: 'transparent', borderBottomColor: 'transparent' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
      />
      <motion.div className="absolute inset-3 bg-white rounded-full" />
    </motion.div>
  </div>
)

const MobileMenu = ({ isOpen, onClose }) => (
  <motion.div
    className="fixed inset-y-0 right-0 w-1/2 bg-[#1E1E1E] p-4 z-50"
    initial={{ x: "100%" }}
    animate={{ x: isOpen ? 0 : "100%" }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
  </motion.div>
)

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleOpenMobileMenu = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsMobileMenuOpen(true)
    }, 1500) // Show loading for 1.5 seconds
  }

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
            onClick={handleOpenMobileMenu}
            className="md:hidden text-white"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isLoading && <LoadingSpinner />}
      </AnimatePresence>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  )
}

export default Header