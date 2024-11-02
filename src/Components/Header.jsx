import React from 'react'
import { useState } from 'react'
import './Header.css'

function Header() {
  const [bgShow, setBgShow] = useState(false)

  const toggleNav = () => {
    setBgShow(!bgShow)
  }


  return (
    <div className='body'>
      <div className="nav h-20 w-full fixed z-50 bg-[#2eddcf] flex justify-around font-serif font-bold items-center">
        <p className='text-3xl pt-3'>Salman</p>
        <div className='flex gap-2 items-center nav1'>
          <li className='text-xl'>+91-9720012103</li>
          <button className='nav-toggle' onClick={toggleNav}>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <div className={`fullscreen-nav ${bgShow ? 'open' : ''}`}>
            <button className='close-btn' onClick={toggleNav}>X</button>
            <ul className='nav-links'>
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
