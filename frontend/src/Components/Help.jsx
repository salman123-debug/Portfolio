import React from 'react'
import { AiOutlineAntDesign } from "react-icons/ai";
import './Responsive.css'
import { forwardRef } from 'react'
import { FaCode  } from "react-icons/fa";
import { FaDatabase    } from "react-icons/fa";
const Help =forwardRef( (props,ref) =>{
  return (
    <div ref={ref}>
      <p className='text-center pt-16'><span className='text-3xl px-2 font-bold bg-[#000033] text-white '>What I do?</span></p>
      <p className="about-heading  text-4xl text-center font-serif font-bold">How I can help your next project</p>

      <div className="content-cards flex justify-around flex-wrap ml-20 py-3 items-center">

        <div className="cards min-h-52 w-80 flex flex-col justify-center items-center rounded-md border-0 py-3 px-3 shadow-lg mb-4 bg-[#000033] hover:bg-[#230c3a] hover:translate-y-2 transition-all duration-300 ">
          
          <div className="icon h-36 w-36">
            <AiOutlineAntDesign className='h-36 w-36 p-4 text-[#ff004f]'/>

            </div>
            <div className="details text-center leading-7 ">
              <h3 className='text-white'>Full Stack Development</h3>
              <p className='text-gray-500 text-lg'>
              MERN (MongoDB, Express.js, React, Node.js) is a full-stack JavaScript framework for building dynamic, scalable, and modern web applications.
              </p>
            </div>
        </div>
        <div className="cards min-h-52 w-80 flex flex-col justify-center items-center rounded-md border-0 py-3 px-3 shadow-lg mb-4 bg-[#000033] hover:bg-[#230c3a] hover:translate-y-2 transition-all duration-300">
         
          <div className="icon h-36 w-36">
            <FaCode    className='h-36 w-36 p-4 text-[#ff004f]'/>

            </div>
            <div className="details text-center leading-7 ">
              <h3 className='text-white'>Frontend Development</h3>
              <p className='text-gray-500 text-lg'>
              Frontend development focuses on building user interfaces using HTML, CSS, JavaScript, frameworks React, ensuring responsiveness, performance, and user experience. 
              </p>
            </div>
        
        </div>
        <div className="cards min-h-52 w-80 flex flex-col justify-center items-center rounded-md border-0 py-3 px-3 shadow-lg mb-4 bg-[#000033] hover:bg-[#230c3a] hover:translate-y-2 transition-all duration-300">
         
          <div className="icon h-36 w-36">
            <FaDatabase   className='h-36 w-36 p-4 text-[#ff004f]'/>

            </div>
            <div className="details text-center leading-7 ">
              <h3 className='text-white'>Backend <br/> Development</h3>
              <p className='text-gray-500 text-lg'>
              Backend development in MERN involves using Node.js, Express.js, and MongoDB to build scalable APIs, handle authentication, and manage databases.
              </p>
            </div>
        
        </div>
       
       
      </div>
    </div>
  )
})

export default Help
