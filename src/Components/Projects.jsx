import React from 'react';
import { motion } from 'framer-motion';
import project1 from '../assets/Screenshot (409).png'
import project2 from '../assets/Screenshot (412).png'
import Weather from '../assets/Screenshot (408).png'
import Imagegallery from '../assets/Screenshot (413).png'

const projectsdata = [
  { 
    name: 'StudyShare', 
    description: 'Crowdsource Study Resource Sharing Platform is an innovative solution designed to revolutionize the way students and educators access and share academic resources.', 
    image: project1
  },
  { 
    name: 'CryptoPlace', 
    description: 'go-to website for real-time cryptocurrency rates and price updates, providing accurate and live data for informed trading decisions.', 
    image: project2,
    url :'https://github.com/keshav051112/Cryptoplace.git'
  },
  { 
    name: 'WeatherApp', 
    description: ' A user-friendly weather app that provides real-time, accurate forecasts and detailed weather insights to keep you informed and prepared for any condition, anywhere',
    image: Weather,
    url:'https://github.com/keshav051112/Weather-app.git'
  },
  { 
    name: 'ImageGallery', 
    description: 'n interactive image gallery project that dynamically fetches and displays high-quality images in real-time, offering a seamless and engaging experience for browsing and discovering visual content.', 
    image:Imagegallery,
    url:'https://github.com/keshav051112/image-gallery.git'
  },
];

const Projects = () => {
  return (
    <>
    <div id='projects' className=" text-white py-16">
      <div className="container mx-auto px-4">

<motion.h2
  className="text-3xl font-bold mb-8"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  My Projects
</motion.h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {projectsdata.map((projectdata, index) => (
    <motion.a 
      href={projectdata.url}
      key={index}
      className="bg-gray-700 border-2 border-transparent bg-opacity-50 backdrop-blur-md p-6 rounded-lg overflow-hidden hover:border-white"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}  
      transition={{ duration: 0.2}}
    >
      <img 
        src={projectdata.image} 
        alt={projectdata.name} 
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold">{projectdata.name}</h3>
      <p className="mt-2">{projectdata.description}</p>
    </motion.a>
  ))}
</div>

         
       
      </div>
    </div>
    <div className='flex items-center justify-center'>
     <button className='bg-gradient-to-r   from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-full hover:scale-105 transition-transform'><a href="https://github.com/keshav051112">Show more</a></button>
     </div>
     </>
  );
};

export default Projects;
