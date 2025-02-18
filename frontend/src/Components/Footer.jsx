import React from 'react';
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Responsive.css'; // Ensure your custom animations (if any) are defined here

function Footer() {
  return (
    <>
    <div className="footer bg-[#000033] pt-3 mt-5 flex justify-center">
      <div className="footer-left flex flex-col md:flex-row items-center md:items-start justify-center gap-8 p-10 animate-fadeInUp">
        {/* Text Section */}
        <div className="footer-text text-center md:text-left">
          <h1 className="text-5xl font-serif font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
            Let's get in touch
          </h1>
          <p className="text-xl text-blue-300 hover:text-white transition-colors duration-300">
            I enjoy discussing new projects and design challenges. Please share as much info as possible so we can get the most out of our first catch-up.
          </p>
        </div>
        {/* Contact Details */}
        <div className="living text-blue-300 text-center md:text-left">
          <h3 className="text-2xl font-semibold hover:text-white transition-colors duration-300">Living In:</h3>
          <p className="hover:text-white transition-colors duration-300">
            Jahurabad Ghazipur Uttar Pradesh, India <br /> Pin-233222
          </p>
          <h3 className="text-2xl font-semibold hover:text-white transition-colors duration-300 mt-2">Call:</h3>
          <p className="hover:text-white transition-colors duration-300 flex justify-center items-center"><FaPhoneAlt className='mr-2 mt-1'/>+91 9720012103</p>
          <p className="hover:text-white transition-colors duration-300 flex justify-center items-center"><MdEmail className='mr-2 mt-1'/>muhdsalman2510@gmail.com</p>
        </div>
        {/* Social Icons */}
        <div className="iconss flex flex-col justify-center items-center gap-6 text-3xl">
        <div className='text-2xl font-semibold hover:text-white transition-colors duration-300 text-blue-300'>
            <h3>Follow Us:</h3>
        </div>
          <div className='icons flex gap-6'>
            
            <div className='twitter bg-white/70 w-14 h-14 rounded-full flex justify-center items-center'>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          
          <FaTwitter className="hover:text-blue-500 hover:scale-110 transition-all duration-300" />
        </a>
            </div>
          <div className='facebook bg-white/60 w-14 h-14 rounded-full flex justify-center items-center'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="hover:text-blue-600 hover:scale-110 transition-all duration-300" />
        </a>
          </div>
        <div className='instagram bg-white/70 w-14 h-14 rounded-full flex justify-center items-center'>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <IoLogoInstagram className="hover:text-pink-500 hover:scale-110 transition-all duration-300" />
        </a>
        </div>
        <div className='github bg-white/70 w-14 h-14 rounded-full flex justify-center items-center'>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400 hover:scale-110 transition-all duration-300" />
        </a>
        </div>
        
          </div>
          
        </div>
      </div>
      
    </div>
    <div className='devloper-claim bg-[#000033]  w-full flex justify-center items-center '>
      <p className="text-lg text-blue-300">
    © {new Date().getFullYear()} Muhammad Salman. All rights reserved.
  </p>
      </div>
    </>
  );
}

export default Footer;
