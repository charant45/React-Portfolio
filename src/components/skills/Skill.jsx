import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { id: 1, src: 'path/to/skill1.svg', alt: 'Skill 1' },
  { id: 2, src: 'path/to/skill2.svg', alt: 'Skill 2' },
  { id: 3, src: 'path/to/skill3.svg', alt: 'Skill 3' },
  { id: 4, src: 'path/to/skill4.svg', alt: 'Skill 4' },
  { id: 5, src: 'path/to/skill5.svg', alt: 'Skill 5' },
  { id: 6, src: 'path/to/skill6.svg', alt: 'Skill 6' },
  { id: 7, src: 'path/to/skill7.svg', alt: 'Skill 7' },
  { id: 8, src: 'path/to/skill8.svg', alt: 'Skill 8' },
  { id: 9, src: 'path/to/skill9.svg', alt: 'Skill 9' },
  { id: 10, src: 'path/to/skill10.svg', alt: 'Skill 10' },
];

const Skills = () => {
  return (
    <div id="skills" className="bg-[#1E1E1E] min-h-screen text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-10">Skills</h1>
      <div className="mt-6"></div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-6">
        {skills.map(skill => (
          <motion.div
            key={skill.id}
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <img src={skill.src} alt={skill.alt} className="w-24 h-24" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
