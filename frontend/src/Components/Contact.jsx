import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FcBusinessContact } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import axios from 'axios';
import {forwardRef} from 'react'
 const Contact=forwardRef(( props,ref) =>{
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    message: ''
  })

  //change handle
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit =async (e)=>{
    e.preventDefault();
    console.log(formData);

    try {
      const resp = await axios.post('https://portfolio-backend-n9om.onrender.com/api/send-email', formData);
      console.log(resp);
      if(resp.data.success){
        setFormData({
          name:'',
          email: '',
          message: ''
        })
      }
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div id="contact" ref={ref} className="relative py-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url('./public/bg.jpg')" }}  // Replace with your image path
        // style={{
          
        //     backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f5f5f5'/%3E%3Ccircle cx='50' cy='50' r='40' fill='%23ff004f' fill-opacity='0.2'/%3E%3C/svg%3E")`,
          
        // }}
      ></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-center font-bold pt-16">
          <span className="text-4xl px-2 font-bold bg-[#000033] text-white rounded-md">
            Contact Me
          </span>
        </h1>

        {/* Flex Container for Contact Details & Form */}
        <div className="mt-8 flex flex-col md:flex-row gap-8">
          {/* Left Column: Contact Details */}
          <div className="md:basis-1/4 bg-white/15 backdrop-blur-lg p-8 rounded-md flex justify-center flex-col items-center shadow-[0_10px_15px_rgba(255,255,255,0.5)]">
          {/* <FcBusinessContact className="w-full h-[250px] mx-auto mix-blend-multiply text-[#000033]" /> */}
          <img src="./talk2-removebg-preview.png" alt="Profile" className="w-full mx-auto " />
            <p className="mt-2 flex items-center text-xl justify-center  text-blue-600  ">
              <MdEmail className="mr-2 text-2xl " />
              muhdsalman2510@gmail.com
            </p>
            <p className="mt-2 flex items-center text-xl justify-center text-blue-600">
              <FaPhoneAlt className="mr-2 text-2xl" />
              +91 9369432689
            </p>
            {/* Uncomment the following block if you wish to add social icons */}
            
            {/* <div className="social-icons mt-5 flex space-x-4">
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div> */}
            <div className="iconss flex gap-4 justify-center items-center  text-3xl">
         <FaTwitter className='hover:text-blue-500 cursor-pointer hover:scale-125 transition-all duration-300 text-blue-700'/>
         <FaFacebook className='hover:text-blue-600 cursor-pointer hover:scale-125 transition-all duration-300 text-blue-800'/>
         <IoLogoInstagram className='hover:text-pink-800 cursor-pointer hover:scale-125 transition-all duration-300 text-[#ff004f]'/>
            <FaGithub className='hover:text-blue-800 cursor-pointer hover:scale-125 transition-all duration-300 text-gray-900'/>
         </div>
            <button
                type="submit"
                onClick={() => window.open('https://drive.google.com/file/d/1SuKr3pR09gFie-hA2oi5bpeBa8tDJk48/view?usp=sharing', '_blank')}
                className="mt-4 w-fit px-12 py-3 border border-[#c] bg-[#ff004f] rounded-md text-white text-center transition duration-200 ease-in-out transform hover:bg-[#e60045] hover:scale-105 "
              >
                Download CV
              </button>
            
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:basis-3/4 bg-white/15 blur-0 backdrop-blur-sm p-8 rounded-md shadow-[0_10px_15px_rgba(255,255,255,0.5)]">
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange = {handleChange}
                placeholder="Your Name"
                className="w-full p-4 text-white text-lg bg-[#000033] border border-gray-300 rounded-md outline-none transition duration-200 ease-in-out focus:border-[#ff004f] focus:ring-2 focus:ring-[#ff004f]"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange = {handleChange}
                placeholder="Your Email"
                className="w-full p-4 text-white text-lg bg-[#000033] border border-gray-300 rounded-md outline-none transition duration-200 ease-in-out focus:border-[#ff004f] focus:ring-2 focus:ring-[#ff004f]"
                required
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                value={formData.message}
                onChange = {handleChange}
                className="w-full p-4 text-white text-lg bg-[#000033] border border-gray-300 rounded-md outline-none transition duration-200 ease-in-out focus:border-[#ff004f] focus:ring-2 focus:ring-[#ff004f]"
                required
              ></textarea>
              <button
                type="submit"
                className="mx-auto w-fit px-12 py-3 border border-[#ff004f] bg-[#ff004f] rounded-md text-white text-center transition duration-200 ease-in-out transform hover:bg-[#e60045] hover:scale-105"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
})

export default Contact;
