import React from 'react'
import pro from "../../Assets/Picsart_24-03-27_20-54-23-124.png"
import "./Protofolio.css"
import resume from "../../Assets/RAJESH RESUME.pdf"
import { memo } from 'react'
const Protofolio = () => {
  

  return (
    
    <section id="profile">
    <div className="main-profile">
    <div className="section-pic-container">
      <img src={pro} alt='' />
    </div>
    <div className="section-text">
      <p className="section-text-p1">Hello, I'am</p>
      <h1 className="title">Rajesh </h1>
      <p className="section-text-p2">Frontend Developer</p>
      <div className="btn-container">
           <button className="btn  btn-color-2" onClick={()=>{window.open(resume)} }>Download
          CV</button>
          <a href="#contact"><button href="#contact" className="btn  btn-color-1" >Contact</button></a>
      </div>
      <div className="socials-container">
        <a target="_blank" href="https://www.linkedin.com/in/lingala-rajesh-a3756621a/" rel="noreferrer">
        <i className="bi bi-linkedin "></i></a>
        <a target="_blank" href="https://github.com/LINGALARAJESH" rel="noreferrer"><i className="bi bi-github  "></i></a>
      </div>
    </div>
  </div>
    </section>
  )
}

export default memo(Protofolio)