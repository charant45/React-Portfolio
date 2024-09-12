import React from 'react'
import image from "../../assests/Group 3.svg"

const About = () => {
  return (
    <div className='bg-[#1E1E1E] min-h-screen'>
      <div className="md:w-1/2 flex flex-col items-center">
          <div className="w-85 h-85 rounded-full overflow-hidden mb-6">
            <img
              src={image}
              alt="Charan T"
              className="w-full h-full object-cover"
            />
          </div>
          <div className=''>
            About Me  
          </div>
      </div>
    </div>
  )
}

export default About