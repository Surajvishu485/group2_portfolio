import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import AboutContents from '../components/AboutContents';


const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="About." text="We are a friendly Front-End developer." />
      <AboutContents/>
      <Footer/>
    </div>
  )
}

export default About