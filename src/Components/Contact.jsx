import React from 'react';
import { motion } from 'framer-motion';

import mail_icon from '../assets/mail_icon.svg';
import location_icon from '../assets/location_icon.svg';
import call_icon from '../assets/call_icon.svg';
import insta from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter-circle.svg';
import Gmail from '../assets/gmail.svg';
import github from '../assets/github-light.svg';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "807144d7-b6d0-403e-b3e7-423fbfb4cd79");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <section id="contact" className="contact min-h-screen mt-10 flex items-center justify-center text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="contact-title text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold border-b-2 border-white inline-block pb-2 mb-4">Get in Touch</h1>
        </motion.div>
        <div className="contact-img flex justify-center mb-12">
          <a href="https://www.instagram.com/_keshavv_05/" className="mx-4">
            <img src={insta} alt="Instagram" className="w-12 h-12 object-contain" />
          </a>
          <a href="https://www.linkedin.com/in/keshav-suryawanshi-754aa5276/" className="mx-4">
            <img src={linkedin} alt="LinkedIn" className="w-12 h-12 object-contain" />
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2FKeshavSury29387" className="mx-4">
            <img src={twitter} alt="Twitter" className="w-12 h-12 object-contain" />
          </a>
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/keshavsuryawanshi671%40gmail.com?compose=new" className="mx-4">
            <img src={Gmail} alt="Gmail" className="w-12 h-12 object-contain" />
          </a>
          <a href="https://github.com/keshav051112" className="mx-4">
            <img src={github} alt="GitHub" className="w-12 h-12 object-contain" />
          </a>
        </div>
        <div className="contact-section flex flex-col lg:flex-row gap-12">
          <motion.div
            className="contact-left flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl font-bold mb-4 text-gradient">Let's Talk</h1>
            <p className="text-lg mb-6">I'm currently available to take on new projects.</p>
            <div className="contact-details">
              <div className="contact-detail flex items-center mb-4">
                <img src={mail_icon} alt="Email" className="mr-3 w-8 h-8" />
                <p>keshavsuryawanshi671@gmail.com</p>
              </div>
              <div className="contact-detail flex items-center mb-4">
                <img src={call_icon} alt="Phone" className="mr-3 w-8 h-8" />
                <p>+91-9657590975</p>
              </div>
              <div className="contact-detail flex items-center">
                <img src={location_icon} alt="Location" className="mr-3 w-8 h-8" />
                <p>Thane Maharashtra-421004, India</p>
              </div>
            </div>
          </motion.div>
          <motion.form
            onSubmit={onSubmit}
            className="contact-right flex-1 border-2 border-transparent rounded-3xl p-6 transition-transform hover:border-white  hover:scale-105"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <label htmlFor="name" className="block text-lg mb-2">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your Name" className="w-full p-3 mb-4 bg-gray-800 text-gray-300 rounded-md" />
            <label htmlFor="email" className="block text-lg mb-2">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your Email" className="w-full p-3 mb-4 bg-gray-800 text-gray-300 rounded-md" />
            <label htmlFor="message" className="block text-lg mb-2">Write your message here</label>
            <textarea id="message" name="message" rows="6" className="w-full p-3 mb-4 bg-gray-800 text-gray-300 rounded-md"></textarea>
            <button type="submit" className="contact-submit bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-full hover:scale-105 transition-transform">Submit Now</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
