import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Link as LinkIcon } from 'lucide-react';
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
    tech: ["React","Tailwind CSS","Express","MonogoDB","Cloudinary"]
  },
  { 
    id: 4, 
    title: "Shoppe", 
    image: Shoppe, 
    link:"https://www.figma.com/design/XLh3fkxcdm9lUL5pG6dsAe/Shoppe-Design?node-id=0-1&node-type=canvas&t=16Y3cuWXC3dSZgZa-0",
    role: "UI/UX Designing",
    tech: ["Figma"]
  },
  { 
    id: 5, 
    title: "Shoesnap Static Website", 
    image: Shoesnap, 
    link: "https://charant45.github.io/ShoeSnap/",
    role: "Web Development",
    tech: ["HTML","CSS","Javascript"]
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
  const [startIndex, setStartIndex] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [projectsPerPage, setProjectsPerPage] = useState(3);

  useEffect(() => {
    const updateProjectsPerPage = () => {
      if (window.innerWidth < 768) {
        setProjectsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setProjectsPerPage(2);
      } else {
        setProjectsPerPage(3);
      }
    };

    window.addEventListener("resize", updateProjectsPerPage);
    updateProjectsPerPage();

    return () => {
      window.removeEventListener("resize", updateProjectsPerPage);
    };
  }, []);

  useEffect(() => {
    setVisibleProjects(projects.slice(startIndex, startIndex + projectsPerPage));
  }, [startIndex, projectsPerPage]);

  const nextProjects = () => {
    
    if (startIndex + projectsPerPage >= projects.length) {
      setStartIndex(0); 
    } else {
      setStartIndex(startIndex + projectsPerPage);
    }
  };

  const prevProjects = () => {
    
    if (startIndex === 0) {
      
      const remainder = projects.length % projectsPerPage;
      setStartIndex(remainder === 0 ? projects.length - projectsPerPage : projects.length - remainder);
    } else {
      setStartIndex((prevIndex) => Math.max(0, prevIndex - projectsPerPage));
    }
  };

  return (
    <div id="projects" className="min-h-screen bg-[#1E1E1E] text-white p-8">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 lg:mb-14 text-white text-center">
        My <span className="text-orange-500">Projects</span>
      </h2>

      <p className="mb-10 lg:mb-12 text-lg md:text-xl max-w-xs md:max-w-2xl text-center mx-auto">
        Explore a curated collection of my design work. Each project represents a unique challenge that I've transformed into a compelling visual experience.
      </p>

      <div className="relative flex justify-center items-center flex-wrap gap-8 mb-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-0 hidden md:block p-2 rounded-full bg-white text-gray-900 hover:bg-orange-500 hover:text-white transition-colors duration-300 z-10"
          onClick={prevProjects}
          aria-label="Previous projects"
        >
          <ChevronLeft className="w-8 h-8" />
        </motion.button>

        <div className="flex justify-center items-center flex-wrap md:flex-nowrap gap-8 w-full overflow-x-auto scrollbar-hidden scroll-smooth md:overflow-visible">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center w-full sm:w-[45%] md:w-[30%] min-w-[300px] scroll-snap-align-start"
            >
              <div className="relative group w-full h-[200px] sm:h-[250px] md:h-[300px]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <LinkIcon className="w-12 h-12 text-white" />
                </motion.div>
              </div>

              <h3 className="mt-4 text-xl md:text-2xl font-bold text-center text-orange-500">
                {project.title}
              </h3>
              
              <p className="mt-2 text-base md:text-lg text-center">{project.role}</p> 

              <div className="mt-2 flex flex-wrap justify-center gap-2">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-700 rounded-full text-xs md:text-sm hover:bg-orange-500 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-0 hidden md:block p-2 rounded-full bg-white text-gray-900 hover:bg-orange-500 hover:text-white transition-colors duration-300 z-10"
          onClick={nextProjects}
          aria-label="Next projects"
        >
          <ChevronRight className="w-8 h-8" />
        </motion.button>
      </div>
    </div>
  );
}
