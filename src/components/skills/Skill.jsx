import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { SkillsBeams } from '../SkillsBeams';

const skills = [
  { id: 1, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726462191/skills/HTML_sad4wf.jpg', alt: 'HTML' },
  { id: 2, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726462145/skills/Bootstrap_ipbdlx.jpg', alt: 'Bootstrap' },
  { id: 3, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726463047/skills/tailwind_qebw5d.webp', alt: 'Tailwind CSS' },
  { id: 4, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726462191/skills/Javascript_nghidf.jpg', alt: 'JavaScript' },
  { id: 5, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726462191/skills/React_vhi3h0.jpg', alt: 'React' },
  { id: 6, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726462191/skills/NodeJS_logo_lxhz1d.jpg', alt: 'Node.js' },
  { id: 7, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726462166/skills/CSS_dddkbt.jpg', alt: 'CSS' },
  { id: 8, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726462191/skills/MonogoDB_jrhjgy.jpg', alt: 'MongoDB' },
  { id: 9, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726462193/skills/SQl_ebrr0z.jpg', alt: 'SQL' },
  { id: 10, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726463423/skills/logo_firebase_f74juk.png', alt: 'Firebase' },
  { id: 11, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726462189/skills/ExpressJS_pepct7.jpg', alt: 'Express.js' },
  { id: 12, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726462190/skills/Figma_gj4pnp.jpg', alt: 'Figma' },
  { id: 13, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726462191/skills/Photoshop_image_fqjfm5.png', alt: 'Photoshop' },
  { id: 14, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726464682/skills/wordpress_gnro3e.png', alt: 'WordPress' },
  { id: 16, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726678027/skills/php_hck3sh.png', alt: 'PHP' },
  { id: 17, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726677307/skills/laravel_wdl1lq.webp', alt: 'Laravel' },
  { id: 18, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726678177/skills/flutterflow1_mkjraf.png', alt: 'Flutter Flow' },
  { id: 19, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726677308/skills/postman_tcpphp.png', alt: 'Postman' },
  { id: 20, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726677308/skills/postgresql_yjhhga.jpg', alt: 'PostgreSQL' },
  { id: 21, 
    src: 'https://res.cloudinary.com/dhja9jrwn/image/upload/v1726677307/skills/Typescript_krlhiz.png', alt: 'Typescript' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring",
      stiffness: 260,
      damping: 20,
      duration: 0.5 
    } 
  },
};


const useNavClick = () => {
  const [navClicked, setNavClicked] = useState(false);

  useEffect(() => {
    const handleNavClick = () => {
      setNavClicked(true);
      setTimeout(() => setNavClicked(false), 100); 
    };

    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {
      document.querySelectorAll('nav a').forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  return navClicked;
};

const Skills = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.1 });
  const navClicked = useNavClick();

  useEffect(() => {
    if (inView || navClicked) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView, navClicked]);

  return (
    <section id="skills" className="relative min-h-screen bg-[#1E1E1E] overflow-hidden">
      {/* Background Effects */}
      <SkillsBeams />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          id="skills"
          ref={ref}
          className="text-white flex flex-col items-center py-20"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-14 text-white"
            variants={itemVariants}
          >
            My <span className="text-orange-500">Skills</span>
          </motion.h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 p-6">
            {skills.map(skill => (
              <motion.div
                key={skill.id}
                className="flex justify-center items-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-sm"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;