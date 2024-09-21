import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function Footer() {
  const [isClicked, setIsClicked] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setIsClicked(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsClicked(true)
  }

  return (
    <footer className="bg-[#1E1E1E] text-white py-6 px-8 flex justify-between items-center shadow-md">
      <div className="text-left">
        <p className="text-lg font-light"> 
          Copyright © {currentYear} by
          <span className="font-medium text-orange-400"> @charan</span>
        </p>
        <p className="text-md text-gray-400 mt-1"> 
          All Rights Reserved.
        </p>
      </div>
      <button
        onClick={scrollToTop}
        className={`group p-3 rounded-full transition-all duration-300 ease-in-out ${
          isClicked ? 'bg-orange-500' : 'bg-white hover:bg-orange-500'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp
          className={`w-7 h-7 transition-all duration-300 ease-in-out ${
            isClicked
              ? 'text-white'
              : 'text-orange-500 group-hover:text-white'
          } group-hover:scale-110`}
        />
      </button>
    </footer>
  );
}