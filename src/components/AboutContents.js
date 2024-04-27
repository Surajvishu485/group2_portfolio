import "./AboutCStyles.css";

import React from 'react';
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

import {Link} from "react-router-dom";

const AboutContents = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who are we?</h1>
            <p>We are react front-end developers. Our aim is to create robust and efficient websites as per user's requirement in limited cost.</p>
            <Link to="/contact">
                <button className="btn">CONTACT-US</button>
            </Link>
        </div>
        
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContents