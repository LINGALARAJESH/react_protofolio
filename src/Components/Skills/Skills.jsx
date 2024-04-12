import React from 'react'
import "./Skills.css"
import Html from "../../Assets/Html.png"
import Css from "../../Assets/Css.png"
import Js from "../../Assets/Js.png"
import rjs from "../../Assets/React.png"
import Boot from "../../Assets/Bootstrap.png"
import python from "../../Assets/Pythpn.png"
import Git from "../../Assets/icons8-git-64.png"
import sql from "../../Assets/sql.png"
import { memo } from 'react'

const Skills = () => {
  return (
    <section id="skills">
    <div>
      <p className="section-text-p1">Explore My</p>
      <h1 className="title">Skills</h1>
    </div>
    <div className="skills-details-containers">
      <div className="about-containers">
        <div className="details-containers">
          <h2 className="skills-sub-title">Frontend Development</h2>
          <div className="article-container">
            <article>
            <img src={Html} alt="" />
              <div>
                <h3>HTML</h3>
                <p>Experience</p>
              </div>
            </article>
            <article>
            <img src={Css} alt="" />
              <div>
                <h3>CSS</h3>
                <p>Experience</p>
              </div>
            </article>
            <article>
          <img src={Js} alt="" />
              <div>
                <h3>JavaScript</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={rjs} alt="" />
              <div>
                <h3>React Js</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
            <img src={Boot} alt="" />
              <div>
                <h3>Bootstrap</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>
        <div className="details-containers">
          <h2 className="skills-sub-title">Backend Development</h2>
          <div className="article-container">
            <article>
             <img src={python} alt="" />
              <div>
                <h3>Python</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
            <img src={sql} alt="" />
              <div>
                <h3>MySQL</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
            <img src={Git} alt="" />
              <div>
                <h3>Git</h3>
                <p>Basic</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default memo(Skills)