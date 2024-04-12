import React from 'react'
import './Education.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate,faBookOpenReader,faSchool } from '@fortawesome/free-solid-svg-icons'
import { memo } from 'react'

const Education = () => {
  return (
    <div>
         <section id="education"> 
    <div className="education-main-container">
    <div>
      <p className="section-text-p1">Get To Know about  </p>
      <h1 className="title">Education</h1>
    </div>
    <div className="education-continer">
      <div className="education-containerss">
      <div className="education-box">
         <FontAwesomeIcon className="icon1" id="ed-1" icon={faUserGraduate} />
      <div className="education-details">
        <h3> 2019 - July <br/>Kamala Institute of Technology & Science </h3>
        <p>B.Tech</p>
        <div>
        <p>Bachelors of Technology in Electronics and Communication Engineering</p>
        <h4>CGPA: 6.84</h4>
        </div>
      </div>
    </div>
    <div className="education-box">
    <FontAwesomeIcon className="icon1"  id="ed-2" icon={faBookOpenReader} />
      <div className="education-details">
        <h3>2017 - 2019  <br/>SR Nava Vignana Bharathi Junior College</h3>
        <p>MPC</p>
        <div>
        <p>Maths,Physics,chemistry</p>
        <h4>Marks: 833</h4>
        </div>
      </div>
    </div>
    <div  className="education-box">
    <FontAwesomeIcon className="icon1"  id="ed-3" icon={faSchool} />
      <div className="education-details">
        <h3>2016 - 2017<br/>St.Joseph’s High School </h3>
        <p>SSC</p>
        <div>
        <h4>GPA: 8.3</h4>
        </div>
      </div>
    </div>
    </div>
    </div>
  </div>
  </section>
    </div>
  )
}

export default memo(Education)