import "./WorkCStyles.css";

import React from "react";
import { NavLink } from "react-router-dom";

function WorkCards (props){
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image1" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={props.view} className="btn">
            Source 1
          </NavLink>
         
        </div>
      </div>
    </div>
  );
};

export default WorkCards;
