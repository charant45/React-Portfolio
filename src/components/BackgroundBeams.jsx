import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:44px_44px]" />

      {/* Beams */}
      <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-orange-500 opacity-[0.15] blur-[80px] md:left-[10%]" />
      <div className="absolute right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[#4f4f4f] opacity-[0.15] blur-[80px] md:right-[10%]" />

      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E1E] via-transparent to-[#1E1E1E]" />

      {/* Moving Particles */}
      <Particles />
    </div>
  );
};

const Particles = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 bg-white rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}; 