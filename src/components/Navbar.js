import { Link } from "react-router-dom";
import "./NavStyle.css";

import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

   //for hamburger menu
   const [click,setClick ] = useState(0);
   const handleClick = () => setClick(!click);

   const [color, setColor] = useState(false);
   const changeColor = () => {
    if(window.scrollY >= 100){
        setColor(true);
    }else{
        setColor(false);
    }
   };

   window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg":"header"}>
        <Link to="/">
            <h1>Portfolio.</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>         
            <li>
                <Link to="/about">About-us</Link>
            </li> 
            <li>
                <Link to="/contact">Contact-us</Link>
            </li>    
        </ul>
        {/* hamburger menu for react icons in mob, tablet */}

        <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color:"#fff"}}/>) :
            <FaBars size={20} style={{color:"#fff"}}/>}
        </div>
    </div>
  )
}

export default Navbar