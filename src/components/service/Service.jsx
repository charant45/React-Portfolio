import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import ui from "../../assests/ui.svg";
import web from "../../assests/web.svg";
import app from "../../assests/app.svg";
import graphic from "../../assests/graphic.svg";

const ServiceCard = ({ icon, title, description, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
      }}
      className="bg-white rounded-lg p-8 flex flex-col items-start h-full hover:bg-orange-200 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-start mb-6">
        <img src={icon} alt={`${title} icon`} className="w-20 h-20 mb-4" />
        <h3 className="text-2xl font-bold text-black">{title}</h3>
      </div>
      <p className="text-gray-700 text-left flex-grow text-lg">{description}</p>
    </motion.div>
  );
};

function Service() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  const services = [
    { icon: ui, title: "UX Design", description: "We create intuitive and engaging user experiences that delight your customers and keep them coming back for more." },
    { icon: graphic, title: "Graphic Design", description: "Our graphic design services bring your brand to life with stunning visuals that capture attention and communicate your message effectively." },
    { icon: app, title: "App Design", description: "We design beautiful and functional mobile applications that provide seamless experiences across all devices and platforms." },
    { icon: web, title: "Website Design", description: "Our website designs are not only visually appealing but also optimized for performance, accessibility, and search engine visibility." }
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.1
          }
        }
      }}
      id="services"
      className="bg-[#1E1E1E] min-h-screen py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className="text-6xl md:text-7xl font-bold text-center text-orange-500 mb-12"
        >
          Services
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
          }}
          className=" text-xl text-white text-center max-w-3xl mx-auto mb-12"
        >
          We offer a comprehensive suite of design services tailored to elevate your brand and captivate your audience. Our expertise spans from crafting intuitive user experiences to creating visually stunning designs across various platforms.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Service;
