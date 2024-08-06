import "./WorkCStyles.css";
import WorkCards from "./WorkCards";
import WorkCData from "./WorkCData"

import React from 'react';
const Work = () => {
  return (
    <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {WorkCData.map((val, index) => {
                    return(
                        <WorkCards
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                        />
                    )
                })}
            </div>

    </div>
  )
}

export default Work
