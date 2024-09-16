import React from 'react';
import profile from '../assets/profilenew.png.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../assets/resumeNew (2).pdf';
import insta from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter-circle.svg';
import Gmail from '../assets/gmail.svg';
import github from '../assets/github-light.svg';
import { useSpring, animated } from 'react-spring';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 500,
  });

  const imgProps = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    delay: 700,
  });

  return (
    <>
    <animated.div id="home" className="flex flex-col items-center gap-6 pt-8" style={props}>
      <animated.img
        className="mt-24 h-64 w-64 rounded-full object-cover mb-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:border-blue-600 border-2 border-transparent"
        src={profile}
        alt="Profile"
        style={imgProps}
      />
      <div className="flex space-x-5">
        <a href="https://www.instagram.com/_keshavv_05/" className="transition-transform duration-300 hover:scale-110">
          <img className="w-10 h-10" src={insta} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/keshav-suryawanshi-754aa5276/" className="transition-transform duration-300 hover:scale-110">
          <img className="w-10 h-10" src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://x.com/i/flow/login?redirect_after_login=%2FKeshavSury29387" className="transition-transform duration-300 hover:scale-110">
          <img className="w-10 h-10" src={twitter} alt="Twitter" />
        </a>
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/keshavsuryawanshi671%40gmail.com?compose=new" className="transition-transform duration-300 hover:scale-110">
          <img className="w-10 h-10" src={Gmail} alt="Gmail" />
        </a>
        <a href="https://github.com/keshav051112" className="transition-transform duration-300 hover:scale-110">
          <img className="w-10 h-10" src={github} alt="GitHub" />
        </a>
      </div>
      <animated.h1 className="text-center  text-5xl font-semibold bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent" style={props}>
        <span className='block '>I'm Keshav Suryawanshi,</span> 
        frontend developer based in INDIA.
      </animated.h1>
      <div className="flex gap-4 mb-8">
        <AnchorLink className="px-6 py-4 text-center  text-base font-medium text-white bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 rounded-full transition-transform duration-300 hover:scale-105 hover:border-2 border-white" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
        <a href={resume} className="px-6 py-4 text-base font-medium text-white border-2 border-white rounded-full transition-colors duration-300 hover:border-blue-600 hover:text-blue-600">
          My Resume
        </a>
      </div>
    </animated.div>
    <About/>
    <Projects/>
    <Contact/>
    </>
  );
};

export default Home;
