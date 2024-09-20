import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  { id: 1, url: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726853403/Certificates/HTML.jpg' },
  { id: 2, url: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726853402/Certificates/UI-UX.jpg' },
  { id: 3, url: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726853402/Certificates/Javascript.jpg' },
  { id: 4, url: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726853401/Certificates/Reactjs.jpg' },
  { id: 5, url: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726853402/Certificates/Angular.jpg' },
  { id: 6, url: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726853403/Certificates/DBMS.jpg' },
  { id: 7, url: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726853404/Certificates/Nodejs.jpg' },
  { id: 8, url: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726853406/Certificates/Frontend.jpg' },
  { id: 9, url: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726853406/Certificates/Photoshop.jpg' },
  { id: 10, url: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726853406/Certificates/AMCAT.jpg' },
];

function Certificates() {
  return (
    <div id="home" className="bg-[#1E1E1E] min-h-screen text-white flex flex-col items-center justify-start py-10 px-4 sm:py-16 md:py-20">
      <motion.h2 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-10 md:mb-14 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My <span className="text-orange-500">Certificates</span>
      </motion.h2>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-[#2A2A2A]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={cert.url}
                alt={`Certificate ${cert.id}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                className="rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificates;