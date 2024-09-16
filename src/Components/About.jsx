import React from 'react';
import { motion } from 'framer-motion';
import profile_img from '../assets/profilenew.png.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-12 py-5 px-3 md:px-12 text-white shadow-lg rounded-2xl border-2 border-transparent transition-transform duration-200 ease-in-out hover:border-white hover:scale-105 max-w-4xl mx-auto mb-10 mt-20"
    >
      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>
      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profile_img}
            alt="Profile"
            className="w-64 h-auto rounded-xl shadow-md transition-transform transform hover:scale-105"
          />
        </motion.div>
        
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-base md:text-lg leading-relaxed">
            I’m Keshav Suryawanshi, a passionate Front-End Developer with a strong focus on creating visually appealing and user-friendly web interfaces.
             I enjoy bringing ideas to life through clean, efficient code and staying up-to-date with the latest trends in web development.
          </p>
          
          <div className="flex flex-col gap-3">
            <SkillBar skill="HTML & CSS" progress="50%" />
            <SkillBar skill="React JS" progress="70%" />
            <SkillBar skill="JavaScript" progress="50%" />
            <SkillBar skill="JAVA" progress="75%" />
          </div>
        </motion.div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6">
        <Achievement title="20+" description="Projects Completed" />
        <Achievement title="100+" description="DSA Questions Solved" />
      </div>
    </section>
  );
};

const SkillBar = ({ skill, progress }) => (
  <div className="flex items-center gap-3">
    <p className="text-base font-semibold">{skill}</p>
    <div className="flex-1 bg-gray-600 h-1.5 rounded-full">
      <div className="bg-gradient-to-r from-blue-400 to-indigo-600 h-full rounded-full" style={{ width: progress }}></div>
    </div>
  </div>
);

const Achievement = ({ title, description }) => (
  <motion.div
    className="flex flex-col items-center gap-1"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">{title}</h2>
    <p className="text-base">{description}</p>
  </motion.div>
);

export default About;
