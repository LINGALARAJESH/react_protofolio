import React from 'react'
import "./About.css"
import { memo } from 'react'

const About = () => {
  return (
    <div>
          <section id="about">
    <div className="main-about">
    <div>
      <p className="section-text-p1">Get To Know More </p>
      <h1 className="title">About Me</h1>
    </div>
    <div className="section-container">
      <div className="about-pic-container">
        <img src="https://i.imgur.com/dLBPh9s.jpeg" alt=" "/>
      </div>
      <div className="text-container">
        <p>Hi everyone, my name is Rajesh Lingala. I am a Frontend Web Developer. I have been learning for the last 6
          months and currently, I am just a fresher who is very interested in web development. Now, I am working on
          Python and Django for Back-End development. There are many programming languages in the world, but I chose
          these to improve myself in this competitive world.</p>
        <span id="coding">
          <b>SkillS:</b> Python, Java Script, HTML, CSS, ReactJS, MySQl,Bootstrap.
        </span>
      </div>
    </div>
  </div>
  </section>
    </div>
  )
}

export default memo(About)