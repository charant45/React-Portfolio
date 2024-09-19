import React, { useState, useEffect } from 'react';
import './index.css';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Service from './components/service/Service';
import Skills from './components/skills/Skill';

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-[#1E1E1E] flex items-center justify-center z-50">
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-24 h-24 border-t-4 border-b-4 border-orange-500 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{
          scale: { duration: 0.3, ease: 'easeOut' },
          rotate: { duration: 1, repeat: Infinity, ease: 'linear' },
        }}
      />
      <motion.h2
        className="mt-4 text-2xl font-bold text-white"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        Loading...
      </motion.h2>
      <motion.div
        className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <motion.div
          className="h-full bg-orange-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  </div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#1E1E1E] min-h-screen flex flex-col">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex-1"
        >
          <Header />
          <main className="flex-1">
            <Home />
            <About />
            <Skills />
            <Service />
          </main>
        </motion.div>
      )}
    </div>
  );
}
