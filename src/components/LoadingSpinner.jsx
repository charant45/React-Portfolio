import React from 'react';
import { motion } from 'framer-motion';

const spinnerVariants = {
  animate: {
    rotate: [0, 360],
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: 'linear',
    },
  },
};

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#1E1E1E]">
    <motion.div
      className="w-16 h-16 border-4 border-t-orange-500 border-white rounded-full"
      variants={spinnerVariants}
      animate="animate"
    />
  </div>
);

export default LoadingSpinner;