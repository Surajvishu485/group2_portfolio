import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
       <form method="POST" action="https://formspree.io/f/xleyogdn">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="username" name="username"></input>
        <label htmlFor="mail">Email</label>
        <input type="email" id="email" name="email"></input>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject"></input>
        <label htmlFor="message">Message</label>
        <textarea cols="30" rows="10" placeholder="Type Your Message Here"></textarea>
        <button className="btn">Submit</button>
       </form> 
    </div>
)
}

export default Form