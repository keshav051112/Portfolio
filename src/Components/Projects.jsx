import React from 'react';
import { motion } from 'framer-motion';
import { FaBroadcastTower } from 'react-icons/fa';
import project1 from '../assets/Screenshot (572).png';
import project2 from '../assets/Screenshot (412).png';
import Weather from '../assets/Screenshot (408).png';
import Imagegallery from '../assets/Screenshot (413).png';
import github from '../assets/github-light.svg';

const projectsdata = [
  {
    name: 'Job-Portal Web Application',
    description:
      'A full-stack platform connecting job seekers and employers. Features include profile creation, resume uploads, job search, application tracking, and real-time notifications.',
    image: project1,
    liveUrl: 'https://job-portal-app-fullstack-client.vercel.app/',
    githubUrl: 'https://github.com/keshav051112/job-portal-fullstack',
  },
  {
    name: 'CryptoPlace',
    description:
      'A go-to website for real-time cryptocurrency rates and price updates, providing accurate and live data for informed trading decisions.',
    image: project2,
    liveUrl:
      'https://cryptoplace-git-main-keshavsuryawanshi671-gmailcoms-projects.vercel.app/',
    githubUrl: 'https://github.com/keshav051112/CryptoPlace',
  },
  {
    name: 'WeatherApp',
    description:
      'A user-friendly weather app that provides real-time, accurate forecasts and detailed weather insights to keep you informed and prepared.',
    image: Weather,
    githubUrl: 'https://github.com/keshav051112/Weather-app',
  },
  {
    name: 'ImageGallery',
    description:
      'An interactive image gallery project that dynamically fetches and displays high-quality images in real-time.',
    image: Imagegallery,
    githubUrl: 'https://github.com/keshav051112/image-gallery',
  },
];

const Projects = () => {
  return (
    <>
      <div id="projects" className="text-white py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            My Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projectsdata.map((project, index) => (
              <motion.div
                key={index}
                className="group relative bg-gray-800 border border-gray-600 rounded-xl overflow-hidden shadow-md transition-transform"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
               
                <div className="absolute inset-0 rounded-xl pointer-events-none border-[2px] border-transparent group-hover:border-white group-hover:animate-borderShine"></div>

                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-600 transition"
                      >
                        <FaBroadcastTower />
                        Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-black transition"
                      >
                        <img src={github} alt="GitHub" className="w-5 h-5" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-8">
        <motion.a
          href="https://github.com/keshav051112"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-8 rounded-full shadow-lg transition-all"
        >
          Show More on GitHub
        </motion.a>
      </div>

      {/* Shine animation style */}
      <style>
        {`
          @keyframes borderShine {
            0% {
              border-color: transparent;
              box-shadow: 0 0 0px rgba(255,255,255,0);
            }
            50% {
              border-color: rgba(255,255,255,0.5);
              box-shadow: 0 0 12px rgba(255,255,255,0.5);
            }
            100% {
              border-color: transparent;
              box-shadow: 0 0 0px rgba(255,255,255,0);
            }
          }
          .animate-borderShine {
            animation: borderShine 1.5s linear infinite;
          }
        `}
      </style>
    </>
  );
};

export default Projects;
