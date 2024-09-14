import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutContent = () => (
  <p className="text-lg md:text-xl mb-12 font-semibold">
    Design is my passion, and harmony is my compass. I navigate complex challenges by building strong foundations and orchestrating seamless user journeys. Timing is everything in design, and I believe in creating experiences that leave a lasting impact. My expertise extends into web development, where I blend aesthetic design with robust functionality to craft dynamic and engaging websites. I am skilled in modern web technologies, including responsive design principles, and ensure that every project not only looks stunning but also performs flawlessly across all devices. From optimizing user interfaces for maximum usability to integrating powerful backend solutions, I strive to create web applications that are both visually appealing and highly effective. My approach involves collaborating closely with clients to understand their vision and translate it into innovative, user-centric solutions that drive success.
  </p>
);

function About() {
  const [skills, setSkills] = useState({
    'UX': 90,
    'Website Design': 88,
    'App Design': 85,
    'Graphic Design': 90,
  });
  
  const [isDragging, setIsDragging] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const handleSliderChange = (skill, value) => {
    setSkills(prevSkills => ({
      ...prevSkills,
      [skill]: value,
    }));
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="bg-[#1E1E1E] min-h-screen py-6 flex items-center justify-center">
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="container mx-auto px-6 md:px-12 max-w-6xl"
      >
        <div className="flex flex-col items-center text-center">
          <div className="text-white">
            <h2 className="text-6xl md:text-7xl font-bold mb-14 text-white">About Me</h2>
            <AboutContent />
            <div className="space-y-6 max-w-3xl mx-auto">
              {Object.entries(skills).map(([skill, value]) => (
                <div key={skill} className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-xl">{skill}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="relative h-4 bg-gray-700 rounded-full">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-[#FD6F00] rounded-full"
                      style={{ width: `${value}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${value}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                    <motion.div
                      className={`absolute top-1/2 transform -translate-y-1/2 h-6 w-6 bg-[#FD6F00] rounded-full shadow-md flex items-center justify-center ${isDragging ? 'shadow-[0_0_15px_3px_rgba(253,111,0,0.6)]' : ''}`}
                      style={{ left: `${value}%` }}
                      initial={{ left: 0 }}
                      animate={{ left: `${value}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    >
                      <div className="h-4 w-4 bg-white rounded-full" />
                    </motion.div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={value}
                      onChange={(e) => handleSliderChange(skill, parseInt(e.target.value))}
                      onMouseDown={() => setIsDragging(true)}
                      onMouseUp={() => setIsDragging(false)}
                      onTouchStart={() => setIsDragging(true)}
                      onTouchEnd={() => setIsDragging(false)}
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
