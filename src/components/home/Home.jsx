import React, { useEffect, useState } from 'react';
import { Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import Profile from "../../assests/Group 2.svg";

const jobTitles = ["UI/UX Designer", "Web Developer"];

function HomePage() {
  const [jobTitleIndex, setJobTitleIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setJobTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
        setIsTransitioning(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="bg-[#1E1E1E] min-h-screen text-white flex items-center justify-center">
      <div className="w-full max-w-8xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-center text-center md:text-left ml-6 md:ml-16">
        <motion.div
          className="md:w-1/2 mb-6 md:mb-0 flex flex-col items-center md:items-start md:ml-16"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-2xl mb-2">Hi, I am</h4>
          <h1 className="text-4xl font-bold mb-4 text-[#FD6F00]">Charan T</h1>
          <motion.div
            className="min-h-[4rem] mb-6"
            key={isTransitioning ? jobTitleIndex : undefined}
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isTransitioning ? -20 : 0,
              opacity: isTransitioning ? 0 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-6xl md:text-10xl font-bold ">{jobTitles[jobTitleIndex]}</h2>
          </motion.div>
          <p className="mb-6 text-xl md:text-xl max-w-xs md:max-w-none">
            I specialize in designing seamless experiences for web applications as a web developer, focusing on user-friendly and aesthetically pleasing designs. My work involves collaborating with cross-functional teams to refine and implement effective design solutions.
          </p>
          <button className="bg-orange-500 text-white text-lg px-10 py-4 rounded-md font-semibold hover:bg-orange-600 transition-colors">
            Hire Me
          </button>
        </motion.div>
        <motion.div
          className="md:w-1/2 flex flex-col items-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden mb-6 bg-gradient-to-r from-[#1E1E1E] via-[#1E1E1E] to-[#1E1E1E] shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={Profile}
              alt="Charan T"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="flex space-x-6">
            <SocialIcon href="https://twitter.com" icon={<Twitter size={30} />} />
            <SocialIcon href="https://facebook.com" icon={<Facebook size={30} />} />
            <SocialIcon href="https://linkedin.com" icon={<Linkedin size={30} />} />
            <SocialIcon href="https://instagram.com" icon={<Instagram size={30} />} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <motion.a
      href={href}
      className="text-white hover:text-[#FD6F00] transition-colors"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
}

export default HomePage;
