import React from 'react'
import { AiOutlineAntDesign } from "react-icons/ai";
import './Responsive.css'

function Help() {
  return (
    <div>
      <p className="about-heading  text-2xl text-center font-bold pt-11">What I do?</p>
      <p className="about-heading  text-4xl text-center font-serif font-bold">How I can help your next project</p>

      <div className="content-cards flex justify-around flex-wrap ml-20 py-3 items-center">

        <div className="card h-96 w-80 border-0 py-3 px-3 shadow-lg mb-4">
          <div className="content flex flex-col justify-center items-center ">
            <div className="icon h-36 w-36">
            <AiOutlineAntDesign className='h-36 w-36 p-4 text-[#2eddcf]'/>

            </div>
            <div className="details text-center leading-7 ">
              <h3>Web Development</h3>
              <p className='text-gray-500 text-lg'>
                I can build websites using HTML, CSS, JavaScript, React, and Node.js
              </p>
            </div>
          </div>
        </div>
        <div className="card h-96 w-80 border-0 py-3 px-3 shadow-lg mb-4">
          <div className="content flex flex-col justify-center items-center ">
            <div className="icon h-36 w-36">
            <AiOutlineAntDesign className='h-36 w-36 p-4 text-[#2eddcf]'/>

            </div>
            <div className="details text-center leading-7 ">
              <h3>Graphic Design</h3>
              <p className='text-gray-500 text-lg'>
                I can build websites using HTML, CSS, JavaScript, React, and Node.js
              </p>
            </div>
          </div>
        </div>
        <div className="card h-96 w-80 border-0 py-3 px-3 shadow-lg mb-4">
          <div className="content flex flex-col justify-center items-center ">
            <div className="icon h-36 w-36">
            <AiOutlineAntDesign className='h-36 w-36 p-4 text-[#2eddcf]'/>

            </div>
            <div className="details text-center leading-7 ">
              <h3>UI/UX Developer</h3>
              <p className='text-gray-500 text-lg'>
                I can build websites using HTML, CSS, JavaScript, React, and Node.js
              </p>
            </div>
          </div>
        </div>
        <div className="card h-96 w-80 border-0 py-3 px-3 shadow-lg mb-4">
          <div className="content flex flex-col justify-center items-center ">
            <div className="icon h-36 w-36">
            <AiOutlineAntDesign className='h-36 w-36 p-4 text-[#2eddcf]'/>

            </div>
            <div className="details text-center leading-7 ">
              <h3>App Design </h3>
              <p className='text-gray-500 text-lg'>
                I can build websites using HTML, CSS, JavaScript, React, and Node.js
              </p>
            </div>
          </div>
        </div>
        <div className="card h-96 w-80 border-0 py-3 px-3 shadow-lg mb-4">
          <div className="content flex flex-col justify-center items-center ">
            <div className="icon h-36 w-36">
            <AiOutlineAntDesign className='h-36 w-36 p-4 text-[#2eddcf]'/>

            </div>
            <div className="details text-center leading-7 ">
              <h3>Business Analysis</h3>
              <p className='text-gray-500 text-lg'>
                I can build websites using HTML, CSS, JavaScript, React, and Node.js
              </p>
            </div>
          </div>
        </div>
        <div className="card h-96 w-80 border-0 py-3 px-3 shadow-lg mb-4">
          <div className="content flex flex-col justify-center items-center ">
            <div className="icon h-36 w-36">
            <AiOutlineAntDesign className='h-36 w-36 p-4 text-[#2eddcf]'/>

            </div>
            <div className="details text-center leading-7 ">
              <h3>SEO Marketing</h3>
              <p className='text-gray-500 text-lg'>
                I can build websites using HTML, CSS, JavaScript, React, and Node.js
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Help
