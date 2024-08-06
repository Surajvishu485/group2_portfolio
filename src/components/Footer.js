import { FaHome, FaMailBulk, FaPhone, FaLinkedin } from "react-icons/fa";
import "./FooterStyles.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">

        <div className="left">

          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>Babu Banarasi Das University</p>
            &nbsp;
          <p>Lucknow.</p>

          </div>
          
          <div className="phone">
          <h4>
          <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            +91 &nbsp; 8299106444
          </h4>
        </div>

        <div className="email">
        <h4>
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            surajsv553@gmail.com
          </h4>
        </div>
        </div>

     

        <div className="right">
            <h3 style={{color:"#fff", marginBottom:"10px"}}>About..</h3>
            <p>This is me <b>Suraj</b>, a frontend developer, gradudated from Babu Banarasi Das University.  I am having special skills in discussing new projects and design challenges. So, what for you are waiting😊 should contact me..</p>
            <div className="social">
                <FaLinkedin
                to="https://www.linkedin.com/in/suraj-vishwakarma-86a50a227/"
                size={20}
                style={{color:"#fff", marginRight:"1rem"}}
                />
            </div> 
        </div>
      </div>
    </div>
  );
};

export default Footer;
