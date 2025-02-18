import React, { useState, useEffect, useRef } from 'react';
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import './Header.css';
import { FaPhoneVolume } from "react-icons/fa6";

function Header({ aboutRef, homeRef, skillRef, helpRef, educationRef, projectsRef, faqRef, contactRef }) {
  const [bgShow, setBgShow] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');
  const [scrolled, setScrolled] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setBgShow(!bgShow);
  };

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  }
  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      handleActiveTab(sectionRef.current.id);
      setBgShow(false);
    }
  };

  return (
    <div className='body'>
      <div className={`nav h-20 w-full fixed z-50 flex justify-around font-serif font-bold items-center transition-all duration-300 ${scrolled ? 'bg-[#000033] shadow-lg' : 'bg-transparent'}`}>
        <p className='text-3xl pt-3 text-white'>Salman</p>
        <div className='flex gap-2 items-center nav1'>
          <li className='text-xl text-white flex '>
          +91-9720012103</li>
          <button className='nav-toggle' onClick={toggleNav}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* Mobile Navigation Menu */}
          <div className={`fullscreen-nav ${bgShow ? 'open' : ''}`}>
            <button className='close-btn' onClick={toggleNav}>X</button>
            <ul className='nav-links'>
              <li onClick={() => scrollToSection(homeRef)} className={`${activeTab === "tab1" ? 'active-tab' : ''}`}>Home</li>
              <li onClick={() => scrollToSection(aboutRef)} className={`${activeTab === "tab2" ? 'active-tab' : ''}`}>About</li>
              <li onClick={() => scrollToSection(educationRef)} className={`${activeTab === "tab2" ? 'active-tab' : ''}`}>Education</li>
              <li onClick={() => scrollToSection(helpRef)} className={`${activeTab === "tab3" ? 'active-tab' : ''}`}>What I do</li>
              <li onClick={() => scrollToSection(skillRef)} className={`${activeTab === "tab4" ? 'active-tab' : ''}`}>Skills</li>
              <li onClick={() => scrollToSection(projectsRef)} className={`${activeTab === "tab5" ? 'active-tab' : ''}`}>Projects</li>
              <li onClick={() => scrollToSection(faqRef)} className={`${activeTab === "tab6" ? 'active-tab' : ''}`}>FAQ</li>
              <li onClick={() => scrollToSection(contactRef)} className={`${activeTab === "tab7" ? 'active-tab' : ''}`}>Contact</li>
            </ul>
            <div className="iconss flex gap-4 text-white text-3xl">
              <FaTwitter className='hover:text-blue-500 hover:scale-125 transition-all duration-300 cursor-pointer'/>
              <FaFacebook className='hover:text-blue-500 hover:scale-125 transition-all duration-300 cursor-pointer' />
              <IoLogoInstagram className='hover:text-pink-700 hover:scale-125 transition-all duration-300 cursor-pointer'/>
              <FaGithub className='hover:text-blue-900 hover:scale-125 transition-all duration-300 cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
