import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Experience from '../components/Experience';




function Home() {
  return (
    <div>
        <Navbar/>
        <HeroImg/>
        <Experience/>
        <Footer/>
    </div>
    
  )
}

export default Home