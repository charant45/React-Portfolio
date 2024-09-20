import { motion } from 'framer-motion';
import {useEffect, useState} from 'react';
import { Link as LinkIcon } from 'lucide-react';
import Crypto from '../../assests/crypto.svg';
import Spotify from '../../assests/Spotify.svg';
import Hirewave from '../../assests/hirewave.svg';
import Shoppe from '../../assests/Shoppe.svg';
import Travel from '../../assests/Travel.svg';
import Shoesnap from '../../assests/shoesnap.svg';

const projects = [
  {
    id: 1,
    title: "Crypto Tracker",
    image: Crypto,
    link: "https://cryptodashboard-sable-two.vercel.app/",
    role: "Web Development",
    tech: ["React", "Javascript", "Material UI", "CSS"]
  },
  {
    id: 2,
    title: "Spotify Landing Page Design",
    image: Spotify,
    link: "https://www.figma.com/design/EewmJETho6nHjAhAFAWSJw/Portfolio?node-id=0-1&node-type=canvas&t=4u3REVo9fCe4CXQc-0",
    role: "UI/UX Designing",
    tech: ["Figma"]
  },
  {
    id: 3,
    title: "Job Search Portal",
    image: Hirewave,
    link: "https://hire-wave-psi.vercel.app/",
    role: "Web Development",
    tech: ["React", "Tailwind CSS", "Express", "MongoDB", "Cloudinary"]
  },
  {
    id: 4,
    title: "Shoppe",
    image: Shoppe,
    link: "https://www.figma.com/design/XLh3fkxcdm9lUL5pG6dsAe/Shoppe-Design?node-id=0-1&node-type=canvas&t=16Y3cuWXC3dSZgZa-0",
    role: "UI/UX Designing",
    tech: ["Figma"]
  },
  {
    id: 5,
    title: "Shoesnap Static Website",
    image: Shoesnap,
    link: "https://charant45.github.io/ShoeSnap/",
    role: "Web Development",
    tech: ["HTML", "CSS", "Javascript"]
  },
  {
    id: 6,
    title: "Travel Application",
    image: Travel,
    link: "https://www.figma.com/design/m28i9Jza7MXZy3G7B00xmv/Travel-Application?t=4bYUwtL81drCI3tw-0",
    role: "UI/UX Designing",
    tech: ["Figma"]
  }
];

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects")
      if (projectsSection) {
        const sectionTop = projectsSection.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        if (sectionTop < windowHeight - 100) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check visibility on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const handleProjectClick = (projectId) => {
    if (isMobile) {
      setActiveProject(activeProject === projectId ? null : projectId)
    }
  }

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-b from-[#1E1E1E] to-[#2D2D2D] text-white p-4 md:p-8 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 lg:mb-14 text-white text-center"
        >
          My <span className="text-orange-500">Projects</span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mb-10 lg:mb-12 text-lg md:text-xl max-w-xs md:max-w-2xl text-center mx-auto"
        >
          Explore a curated collection of my design work. Each project represents a unique challenge that I've transformed into a compelling visual experience.
        </motion.p>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={isMobile ? {} : { scale: 1.05 }}
              className="bg-[#2A2A2A] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div 
                className="relative group h-[200px] sm:h-[250px]"
                onClick={() => handleProjectClick(project.id)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
                    isMobile
                      ? activeProject === project.id ? 'opacity-100' : 'opacity-0'
                      : 'opacity-0 group-hover:opacity-100'
                  }`}
                  whileHover={isMobile ? {} : { scale: 1.1 }}
                >
                  <LinkIcon 
                    className="w-12 h-12 text-white cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(project.link, '_blank')
                    }}
                  />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-orange-500 mb-2">{project.title}</h3>
                <p className="text-lg mb-4">{project.role}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-orange-500 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}