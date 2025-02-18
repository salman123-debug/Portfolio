import React from 'react'
import './Responsive.css'
import { forwardRef } from 'react'

const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h1 className='text-3xl text-center font-bold pt-16'>
        <span className='text-4xl px-2 font-bold bg-[#000033] text-white rounded-md'>My skills</span>
      </h1>
      
      <div className='cards flex justify-around flex-wrap mt-5 gap-3'>
        {/* Web Design Card */}
        <div className="card w-5/12 bg-base-100 border-0 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-2xl">
          <div className="card-body flex justify-between text-lg font-serif font-bold">
            <p>Web Design</p>
            <p>75%</p>
          </div>
          <div className="range w-full ml-4 bg-slate-300 rounded-md h-3 -mt-5">
            <div className="upper-range w-3/4 bg-[#000033] h-full rounded-l-md transition-all duration-300 hover:bg-[#ff004f]"></div>
          </div>
        </div>

        {/* HTML/CSS Card */}
        <div className="card w-5/12 bg-base-100 border-0 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-2xl">
          <div className="card-body flex justify-between text-lg font-serif font-bold">
            <p>HTML/CSS</p>
            <p>91%</p>
          </div>
          <div className="range w-full ml-4 bg-slate-300 rounded-md h-3 -mt-5">
            <div className="upper-range w-11/12 bg-[#000033] h-full rounded-l-md transition-all duration-300 hover:bg-[#ff004f]"></div>
          </div>
        </div>

        {/* JavaScript Card */}
        <div className="card w-5/12 bg-base-100 border-0 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-2xl">
          <div className="card-body flex justify-between text-lg font-serif font-bold">
            <p>JavaScript</p>
            <p>80%</p>
          </div>
          <div className="range w-full ml-4 bg-slate-300 rounded-md h-3 -mt-5">
            <div className="upper-range w-4/5 bg-[#000033] h-full rounded-l-md transition-all duration-300 hover:bg-[#ff004f]"></div>
          </div>
        </div>

        {/* React Js Card */}
        <div className="card w-5/12 bg-base-100 border-0 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-2xl">
          <div className="card-body flex justify-between text-lg font-serif font-bold">
            <p>React Js</p>
            <p>65%</p>
          </div>
          <div className="range w-full ml-4 bg-slate-300 rounded-md h-3 -mt-5">
            <div className="upper-range w-8/12 bg-[#000033] h-full rounded-l-md transition-all duration-300 hover:bg-[#ff004f]"></div>
          </div>
        </div>

        {/* Node js Card */}
        <div className="card w-5/12 bg-base-100 border-0 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-2xl">
          <div className="card-body flex justify-between text-lg font-serif font-bold">
            <p>Node js</p>
            <p>65%</p>
          </div>
          <div className="range w-full ml-4 bg-slate-300 rounded-md h-3 -mt-5">
            <div className="upper-range w-2/3 bg-[#000033] h-full rounded-l-md transition-all duration-300 hover:bg-[#ff004f]"></div>
          </div>
        </div>

        {/* Bootstrap Card */}
        <div className="card w-5/12 bg-base-100 border-0 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-2xl">
          <div className="card-body flex justify-between text-lg font-serif font-bold">
            <p>Bootstrap</p>
            <p>90%</p>
          </div>
          <div className="range w-full ml-4 bg-slate-300 rounded-md h-3 -mt-5">
            <div className="upper-range w-11/12 bg-[#000033] h-full rounded-l-md transition-all duration-300 hover:bg-[#ff004f]"></div>
          </div>
        </div>

        {/* Tailwind CSS Card */}
        <div className="card w-5/12 bg-base-100 border-0 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-2xl">
          <div className="card-body flex justify-between text-lg font-serif font-bold">
            <p>Tailwind CSS</p>
            <p>75%</p>
          </div>
          <div className="range w-full ml-4 bg-slate-300 rounded-md h-3 -mt-5">
            <div className="upper-range w-3/4 bg-[#000033] h-full rounded-l-md transition-all duration-300 hover:bg-[#ff004f]"></div>
          </div>
        </div>

        {/* Express.js Card */}
        <div className="card w-5/12 bg-base-100 border-0 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-2xl">
          <div className="card-body flex justify-between text-lg font-serif font-bold">
            <p>Express.js</p>
            <p>65%</p>
          </div>
          <div className="range w-full ml-4 bg-slate-300 rounded-md h-3 -mt-5">
            <div className="upper-range w-3/5 bg-[#000033] h-full rounded-l-md transition-all duration-300 hover:bg-[#ff004f]"></div>
          </div>
        </div>

        {/* MongoDB Card */}
        <div className="card w-5/12 bg-base-100 border-0 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-2xl">
          <div className="card-body flex justify-between text-lg font-serif font-bold">
            <p>MongoDB</p>
            <p>65%</p>
          </div>
          <div className="range w-full ml-4 bg-slate-300 rounded-md h-3 -mt-5">
            <div className="upper-range w-3/5 bg-[#000033] h-full rounded-l-md transition-all duration-300 hover:bg-[#ff004f]"></div>
          </div>
        </div>

        {/* SQL Card */}
        <div className="card w-5/12 bg-base-100 border-0 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-2xl">
          <div className="card-body flex justify-between text-lg font-serif font-bold">
            <p>SQL</p>
            <p>65%</p>
          </div>
          <div className="range w-full ml-4 bg-slate-300 rounded-md h-3 -mt-5">
            <div className="upper-range w-3/5 bg-[#000033] h-full rounded-l-md transition-all duration-300 hover:bg-[#ff004f]"></div>
          </div>
        </div>

        {/* Core Java Card */}
        <div className="card w-5/12 bg-base-100 border-0 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-2xl">
          <div className="card-body flex justify-between text-lg font-serif font-bold">
            <p>Core Java</p>
            <p>65%</p>
          </div>
          <div className="range w-full ml-4 bg-slate-300 rounded-md h-3 -mt-5">
            <div className="upper-range w-3/5 bg-[#000033] h-full rounded-l-md transition-all duration-300 hover:bg-[#ff004f]"></div>
          </div>
        </div>

        {/* OOPs Card */}
        <div className="card w-5/12 bg-base-100 border-0 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-2xl">
          <div className="card-body flex justify-between text-lg font-serif font-bold">
            <p>OOPs</p>
            <p>70%</p>
          </div>
          <div className="range w-full ml-4 bg-slate-300 rounded-md h-3 -mt-5">
            <div className="upper-range w-9/12 bg-[#000033] h-full rounded-l-md transition-all duration-300 hover:bg-[#ff004f]"></div>
          </div>
        </div>
      </div>

      {/* <div className="btn flex justify-center items-center">
        <a href="https://drive.google.com/file/d/11tyCoa7TMXfrsc1HU3WBOBCk3V3rl4yb/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className='py-3 px-4 bg-[#000033] text-white rounded-md font-bold hover:bg-[#ff004f] hover:text-white transition-all duration-300 mt-3 ml-10'>
            Download CV
          </button>
        </a>
      </div> */}
    </div>
  )
})

export default Skills
