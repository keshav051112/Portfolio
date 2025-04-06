import React from 'react';
import footer_logo from '../assets/logofix.png.jpg';
import user_icon from '../assets/user_icon.svg';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-gray-300 py-12'>
      <div className='container mx-auto px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-8'>
          <div className='flex flex-col items-center lg:items-start gap-4 lg:flex-grow'>
            
            <p className='text-lg text-center lg:text-left'>
              Thank you for your visit @keshavSuryawanshi
            </p>
          </div>
         
        </div>
        <hr className='my-8 border-gray-600' />
        <div className='flex flex-col lg:flex-row justify-between items-center text-sm'>
          <p className='text-center lg:text-left'>
            © 2024 Keshav Suryawanshi. All rights reserved
          </p>
          <div className='flex flex-wrap gap-6 mt-4 lg:mt-0'>
            <p className='cursor-pointer hover:text-blue-400'>Terms of Service</p>
            <p className='cursor-pointer hover:text-blue-400'>Privacy Policy</p>
            <p className='cursor-pointer hover:text-blue-400'>Connect with me</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
