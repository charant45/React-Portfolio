import React from 'react';
import { motion } from 'framer-motion';

export const ContactBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Orange Drops */}
      <Drops 
        count={30} 
        color="#FD6F00" 
        size="2" 
        opacity="0.4"
      />
      
      {/* White Drops */}
      <Drops 
        count={20} 
        color="#FFFFFF" 
        size="1.5" 
        opacity="0.15"
      />
      
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] via-transparent to-[#1E1E1E] opacity-80" />
    </div>
  );
};

const Drops = ({ count, color, size, opacity }) => {
  return (
    <div className="absolute inset-0">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            background: color,
            opacity: opacity
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: -10,
            opacity: 0,
            scale: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 20,
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeIn",
            delay: Math.random() * 2,
            repeatDelay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
}; 