import React, { useState, useEffect } from 'react';
import { Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import Profile from "../../assests/Group 2.svg";

const jobTitles = ["UI/UX Designer", "Web Developer"];

export default function HomePage() {
  const [jobTitleIndex, setJobTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setJobTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#1E1E1E] min-h-screen text-white flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h4 className="text-2xl mb-2">Hi, I am</h4>
          <h1 className="text-4xl font-bold mb-4 text-[#FD6F00]">Charan T</h1>
          <div className="min-h-[4rem] mb-6">
            <h2 className="text-8xl font-semibold">{jobTitles[jobTitleIndex]}</h2>
          </div>
          <p className="mb-6 text-xl">
          I specialize in designing seamless experiences for web applications as a web developer, focusing on user-friendly and aesthetically pleasing designs. My work involves collaborating with cross-functional teams to refine and implement effective design solutions.
          </p>
          <button className="bg-[#FD6F00] text-white text-lg px-10 py-4 rounded-md font-semibold hover:bg-[#E65F00] transition-colors">
            Hire Me
          </button>
        </div>
        <div className="md:w-1/2 flex flex-col items-center">
          <div className="w-85 h-85 rounded-full overflow-hidden mb-6">
            <img
              src={Profile}
              alt="Charan T"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex space-x-6">
            <a href="https://twitter.com" className="text-white hover:text-[#FD6F00] transition-colors">
              <Twitter size={30} />
            </a>
            <a href="https://facebook.com" className="text-white hover:text-[#FD6F00] transition-colors">
              <Facebook size={30} />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-[#FD6F00] transition-colors">
              <Linkedin size={30} />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-[#FD6F00] transition-colors">
              <Instagram size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}