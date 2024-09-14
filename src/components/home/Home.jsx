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
    <div id="home" className="bg-[#1E1E1E] min-h-screen text-white flex items-center justify-center">
      <div className="w-full max-w-8xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-center text-center md:text-left ml-6 md:ml-16">
        <div className="md:w-1/2 mb-6 md:mb-0 flex flex-col items-center md:items-start md:ml-16">
          <h4 className="text-2xl mb-2">Hi, I am</h4>
          <h1 className="text-4xl font-bold mb-4 text-[#FD6F00]">Charan T</h1>
          <div className="min-h-[4rem] mb-6">
            <h2 className="text-8xl font-semibold">{jobTitles[jobTitleIndex]}</h2>
          </div>
          <p className="mb-6 text-xl">
            I specialize in designing seamless experiences for web applications as a web developer, focusing on user-friendly and aesthetically pleasing designs. My work involves collaborating with cross-functional teams to refine and implement effective design solutions.
          </p>
          <button className="bg-orange-500 text-white text-lg px-10 py-4 rounded-md font-semibold hover:bg-orange-600 transition-colors">
            Hire Me
          </button>
        </div>
        <div className="md:w-1/2 flex flex-col items-center">
          <div className="w-96 h-96 rounded-full overflow-hidden mb-6 bg-gradient-to-r from-[#1E1E1E] via-[#1E1E1E] to-[#1E1E1E] shadow-lg transform transition-transform duration-300 hover:scale-105">
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
