import React from 'react'
import './Responsive.css'

function Skills() {
  return (
    <div>
      <h1 className='text-4xl text-center font-bold pt-16'>My skills</h1>
      
      <div className='cards flex justify-around flex-wrap mt-5 gap-3'>
      <div className="card w-5/12 bg-base-100 border-0">
        <div className="card-body flex justify-between text-lg font-serif font-bold">
            <p>Web Design</p>
            <p>75%</p>
        </div>
       
        <div className="range w-full ml-4 bg-slate-300 rounded-md   h-3 -mt-5">
            <div className="upper-range w-3/4 bg-[#2eddcf] h-full rounded-l-md">

            </div>
        </div>
      </div>
      <div className="card w-5/12 bg-base-100 border-0">
        <div className="card-body flex justify-between text-lg font-serif font-bold">
            <p>HTML/CSS</p>
            <p>91%</p>
        </div>
       
        <div className="range w-full ml-4 bg-slate-300 rounded-md   h-3 -mt-5">
            <div className="upper-range w-11/12 bg-[#2eddcf] h-full rounded-l-md">

            </div>
        </div>
      </div>
      <div className="card w-5/12 bg-base-100 border-0">
        <div className="card-body flex justify-between text-lg font-serif font-bold">
            <p>JavaScript</p>
            <p>80%</p>
        </div>
       
        <div className="range w-full ml-4 bg-slate-300 rounded-md   h-3 -mt-5">
            <div className="upper-range w-4/5 bg-[#2eddcf] h-full rounded-l-md">

            </div>
        </div>
      </div>
      <div className="card w-5/12 bg-base-100 border-0">
        <div className="card-body flex justify-between text-lg font-serif font-bold">
            <p>React Js</p>
            <p>65%</p>
        </div>
       
        <div className="range w-full ml-4 bg-slate-300 rounded-md   h-3 -mt-5">
            <div className="upper-range w-8/12 bg-[#2eddcf] h-full rounded-l-md">

            </div>
        </div>
      </div>
      <div className="card w-5/12 bg-base-100 border-0">
        <div className="card-body flex justify-between text-lg font-serif font-bold">
            <p>Node js</p>
            <p>65%</p>
        </div>
       
        <div className="range w-full ml-4 bg-slate-300 rounded-md   h-3 -mt-5">
            <div className="upper-range w-2/3 bg-[#2eddcf] h-full rounded-l-md">

            </div>
        </div>
      </div>
      <div className="card w-5/12 bg-base-100 border-0">
        <div className="card-body flex justify-between text-lg font-serif font-bold">
            <p>Bootstrap</p>
            <p>90%</p>
        </div>
       
        <div className="range w-full ml-4 bg-slate-300 rounded-md   h-3 -mt-5">
            <div className="upper-range w-11/12 bg-[#2eddcf] h-full rounded-l-md">

            </div>
        </div>
      </div>
      <div className="btn flex justify-center items-center">
      <button className='py-3 px-4 bg-[#2eddcf]  font-bold hover:bg-black hover:text-white transition-all duration-300 mt-3 ml-10  ' >Download CV</button>
      </div>
      </div>
    </div>
  )
}

export default Skills
