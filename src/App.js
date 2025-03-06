import React, { useState, useEffect } from 'react';
import './index.css';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skill';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import LoadingSpinner from './components/LoadingSpinner';

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
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkServerAndResources = async () => {
      try {
        // Check server health
        const healthCheck = await fetch('/api/health-check'); // Replace with your actual health check endpoint
        if (!healthCheck.ok) throw new Error('Server not responding');

        // Load essential resources
        await Promise.all([
          // Add your critical resources here
          // Example: fetch('/api/user-data'),
          // Example: fetch('/api/initial-content'),
          new Promise(resolve => {
            // Check if fonts are loaded
            document.fonts.ready.then(() => resolve());
          }),
          // Add a small minimum delay to prevent flash
          new Promise(resolve => setTimeout(resolve, 800))
        ]);

        setIsLoading(false);
      } catch (err) {
        console.error('Loading error:', err);
        setError(err.message);
        // Optionally set isLoading to false if you want to show an error state
        // setIsLoading(false);
      }
    };

    checkServerAndResources();
  }, []);

  if (error) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#1E1E1E',
        color: '#FD6F00',
        fontFamily: 'Poppins, sans-serif',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <h2>Something went wrong</h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{error}</p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#FD6F00',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="relative bg-[#1E1E1E] min-h-screen overflow-hidden">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col min-h-screen"
        >
          <Header />
          <main className="flex-1">
            <Home />
            <About />
            <Skills />
            <Project />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}