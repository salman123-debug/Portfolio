import React from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Help from './Help'
import Skills from './Skills'
import Projects from './Projects'
import FAQ from './FAQ'
import Footer from './Footer'
import Contact from './Contact'
import Education from './Education'

function Home() {
  const aboutRef = React.useRef(null);
  const homeRef = React.useRef(null);
  const skillRef = React.useRef(null);
  const helpRef = React.useRef(null);
  const educationRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const faqRef = React.useRef(null);
  const contactRef = React.useRef(null);
  return (
    <div>
      
      <Header aboutRef={aboutRef} homeRef={homeRef} skillRef={skillRef} helpRef={helpRef} educationRef={educationRef} projectsRef={projectsRef} faqRef={faqRef} contactRef={contactRef}/>
      <Hero ref={homeRef}/>
      <About ref={aboutRef}/>
      <Education ref={educationRef}/>
      <Help ref={helpRef}/>
      <Skills ref={skillRef}/>
      <Projects ref={projectsRef}/>
      <FAQ ref={faqRef}/>
      <Contact ref={contactRef}/>
      <Footer/>
    </div>
  )
}

export default Home
