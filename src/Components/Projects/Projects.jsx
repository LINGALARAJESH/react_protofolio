import React from 'react'
import "./Projects.css"
import { memo } from 'react'

const Projects = () => {
  return (
    <div>
        <section id="projects">
    <div className="main-container">
    <div>
      <p className="section-text-p1">Browse My Reference</p>
      <h1 className="title">Projects</h1>
    </div>
    <div className="skills-details-container">
  
      <div className="project-container">
        <div className="project-img">
          <img src="https://i.imgur.com/uBFcQFe.png" alt=""/>
        </div>
        <div className='content'>
        <h3 className="project-title">Real time -Weather<br/>Project using<br/>-HTML,CSS &JS</h3>
        <div className="project-buttons">
          <button className="btn1 btn-color-1"
            onClick={()=>{window.location.href='https://github.com/LINGALARAJESH/weather-API-mini-project'} }>Github</button>
          <button className="btn1 btn-color-2 "
            onClick={()=>{window.location.href='https://rajesh-weather-report-project-js.netlify.app' }}>Live Demo</button>
        </div>
        </div>
      </div>
 
      <div className="project-container">
        <div className="project-img">
          <img src="https://i.imgur.com/aigkUZ5.png" alt=""/>
        </div>
        <div className='content'>
        <h3 className="project-title">A single Tourisum <br/>Project using <br/>-HTML,CSS & JS</h3>
        <div className="project-buttons">
          <button className="btn1 btn-color-1"
            onClick={()=>{window.location.href='https://github.com/LINGALARAJESH/Travel-Tourisum' }}>Github</button>
          <button className="btn1 btn-color-2" onClick={()=>{window.location.href='https://rajesh-tourisum-website.netlify.app' }}>Live
            Demo</button>
        </div>
        </div>
      </div>

      <div className="project-container">
        <div className="project-img">
          <img src="https://i.imgur.com/PKiwTXR.png" alt=""/>
        </div>
        <div className='content'>
        <h3 className="project-title">A Shopper Responsive<br/>Project using <br/>-HTML,CSS,JS & ReactJS </h3>
        <div className="project-buttons">
          <button className="btn1 btn-color-1 "
            onClick={()=>{window.location.href='https://github.com/LINGALARAJESH/SHOPPER-ECOMMERCE-WEBSITE' }}>Github</button>
          <button className="btn1 btn-color-2 btn1" onClick={()=>{window.location.href='http://shopper-responsive.netlify.app'}}>Live
            Demo</button>
        </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  </div>
 
 
  )
}

export default memo(Projects)