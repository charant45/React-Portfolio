import React from 'react'
import { motion } from 'framer-motion'
import ui from "../../assests/ui.svg"
import web from "../../assests/web.svg"
import app from "../../assests/app.svg"
import graphic from "../../assests/graphic.svg"

const ServiceCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white rounded-md p-6 flex flex-col items-center h-full hover:bg-orange-500 transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex flex-col items-center mb-4">
      <img src={icon} alt={`${title} icon`} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-bold text-black text-center">{title}</h3>
    </div>
    <p className="text-gray-700 text-center flex-grow">{description}</p>
  </motion.div>
)

function Service() {
  const services = [
    {
      icon: ui,
      title: "UX Design",
      description: "We create intuitive and engaging user experiences that delight your customers and keep them coming back for more."
    },
    {
      icon: graphic,
      title: "Graphic Design",
      description: "Our graphic design services bring your brand to life with stunning visuals that capture attention and communicate your message effectively."
    },
    {
      icon: app,
      title: "App Design",
      description: "We design beautiful and functional mobile applications that provide seamless experiences across all devices and platforms."
    },
    {
      icon: web,
      title: "Website Design",
      description: "Our website designs are not only visually appealing but also optimized for performance, accessibility, and search engine visibility."
    }
  ]

  return (
    <section id="services" className="bg-[#1E1E1E] min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-7xl font-bold text-center text-white mb-12">Services</h2>
        <p className="font-semibold text-xl text-white text-center max-w-3xl mx-auto mb-12">
          We offer a comprehensive suite of design services tailored to elevate your brand and captivate your audience. Our expertise spans from crafting intuitive user experiences to creating visually stunning designs across various platforms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service
