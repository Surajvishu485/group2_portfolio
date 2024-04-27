import "./ExperienceStyle.css";

import React from 'react'

const Experience = () => {
  return (
    <div>
        <section class="experience" id="experience">
        <div class="max-width">
            <h2 class="title">Experience</h2>
            <div class="expe-content">
                <div class="card">
                    <div class="box">
                        <i class="fas fa-paint-brush"></i>
                        <div class="text">Web Development Intern</div>
                        <span>LearnSmasher</span>
                        <p>I have Completed a Web Development Internship, and it was a good learning experience. I have
                            completed all the task which was provided by the organization.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <i class="fas fa-chart-line"></i>
                        <div class="text">Training in Java</div>
                        <span>IBM Trainee</span>
                        <p>I have successfully completed "IBM Software Training Program" in Java. Along with HTML, CSS,
                            JavaScript, JSP, MySQL.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Experience