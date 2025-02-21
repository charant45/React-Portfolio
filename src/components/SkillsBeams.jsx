import React from 'react';
import { motion } from 'framer-motion';

export const SkillsBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fd6f0030_1px,transparent_1px),linear-gradient(to_bottom,#fd6f0030_1px,transparent_1px)] bg-[size:44px_44px]" />

      {/* Beams */}
      <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-orange-500 opacity-[0.15] blur-[100px] md:left-[10%]" />
      <div className="absolute right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-orange-400 opacity-[0.15] blur-[100px] md:right-[10%]" />

      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] via-transparent to-[#1E1E1E]" />

      {/* Moving Particles */}
      <Particles />
    </div>
  );
};

const Particles = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 bg-orange-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}; 