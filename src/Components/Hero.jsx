import React from 'react'
import Typed from 'typed.js';
import { useEffect, useState } from 'react'
import './Responsive.css'

function Hero() {
    const phrases = ["Developer", "Designer", "Creator"];
  const [currentText, setCurrentText] = useState(phrases[0]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setCurrentText(phrases[index]);
  }, [index]);

  return (
    <div>
      <div className="hero-section bg-[#2eddcf] flex justify-around items-center flex-wrap py-32  px-5">
        <div className="hero-text">
            <p className='para1 text-7xl text-left transition-all duration-1000'>I'm a Freelancer,</p>
            <p className='d-para text-8xl font-bold text-left'>{currentText}</p>
            <p className='b-para text-3xl text-left'>Based in GPM Mawana Meerut</p>
            <div className='bottom flex py-3'>
            <button className='hero-btn bg-slate-800 text-xl px-4 py-3 text-white rounded-md hover:bg-gray-700 font-bold'>
                view my works
            </button>
            <p className='bottom-para text-2xl border-b-2 border-black hover:opacity-60 cursor-pointer ml-5 mt-4'>Contact me</p>
            </div>
        </div>
        <div className="hero-image">
            <img src="./profile-pic (3).png" alt="Hero Image" className='w-[350px] border-8 border-white rounded-full'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
