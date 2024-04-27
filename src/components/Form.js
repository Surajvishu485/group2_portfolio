import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
       <form action="">
        <label htmlFor="">Your Name</label>
        <input type="text"></input>
        <label htmlFor="">Email</label>
        <input type="email"></input>
        <label htmlFor="">Subject</label>
        <input type="text"></input>
        <label htmlFor="">Message</label>
        <textarea cols="30" rows="10" placeholder="Type Your Message Here"></textarea>
        <button className="btn">Submit</button>
        
       </form> 
    </div>
)
}

export default Form