import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.waves.min';
import {motion} from 'framer-motion'
import './Hero.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import {forwardRef} from 'react'


const Hero = forwardRef((props, ref) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
    // const typedRef = useRef(null);
    const typedElement = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x20,
          shininess: 87.0,
          waveHeight: 12.5,
          waveSpeed: 0.85,
          zoom: 1.03,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  
  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Fullstack Developer", "Software Developer", "Python Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy(); // ✅ Cleanup on component unmount
    };
  }, []);

  // Function to scroll to the project section
  const handleScrollProject = () => {
    const projectSection = document.getElementById('projects');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to the contact section
  const handleScrollContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={ref}>
      <div ref={vantaRef} className="hero-section  z-10 grid grid-cols-1 md:grid-cols-2 min-h-screen px-8 gap-10  place-content-center place-items-center">
      
        <div className="hero-text relative z-10 mt-36 ">

          <div className="para1 text-5xl text-left transition-all duration-1000 text-white">I'm a Muhammad Salman,</div>
          <div className="d-para text-9xl h-[150px] w-[700px] font-bold text-left text-white pt-2">
            <span  className='typing' ref={typedElement}></span>
          </div>
          <div className="b-para text-3xl pt-2 text-left text-indigo-300">Based in GPM Mawana Meerut</div>
          <div className="bottom flex py-3">
            <button className="hero-btn bg-indigo-800 text-xl px-4 py-3 text-white rounded-md hover:bg-indigo-600 font-bold"
            onClick={handleScrollProject}
            >
              View my works
            </button>
            <p className="bottom-para text-2xl text-white  hover:opacity-60 cursor-pointer ml-5 mt-4 flex justify-center items-center" 
            onClick={handleScrollContact}
            >
              Contact me <FaLongArrowAltRight className='ml-2 mt-2'/>
            </p>
          </div>
        </div>
        <div className="hero-image relative z-10">
        <motion.img 
  src="./profile-pic (3).png" 
  alt="Hero Image"
  className="w-[350px] border-8 border-white rounded-full shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
  initial={{ y: 0 }}
  animate={{ y: [0, -10, 0] }} 
  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  whileHover={{ scale: 1.1, rotate: 2 }}
/>
        </div>
      {/* </motion.div> */}
      </div>

    </div>
  );
})

export default Hero;
