import React from 'react'
import "./Contact.css"
import resume from "../../Assets/RAJESH RESUME.pdf"
import { memo } from 'react'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "39c76bb9-59e4-42c5-bb9a-f3bdda7e763b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert("submitted successfully")
        }
      };

  return (
    <div>
        <section id="contact">
    <div className="contact-container">
    <div>
      <p className="section-text-p1">Get In Touch</p>
      <h1 className="title">Contact Me</h1>
    </div>
    <div className="contact-info-upper-container">
      <div className="row">
        <div className="contact-left">
          <h1 className="subtitle">Contact-Me</h1>
          <div>
            <p><a target="_blank" rel="noreferrer" href="mailto:rajeshlingala08@gmail.com">
            <i class="bi bi-envelope-fill"></i></a>rajeshlingala08@gmail.com</p>
            <p><a target="_blank" rel="noreferrer" href="#contact"><i class="bi bi-telephone-fill"></i></a>+91 9346905812</p>
          </div>
          <div className="socila-icons">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lingala-rajesh-a3756621a/">
            <i class="bi bi-linkedin"></i></a>
            <a target="_blank" rel="noreferrer" href="https://github.com/LINGALARAJESH"><i class="bi bi-github"></i></a>
            <a target="_blank" rel="noreferrer" href="mailto:rajeshlingala08@gmail.com"><i class="bi bi-envelope-fill"></i></a>
            <a target="_blank"rel="noreferrer" href="https://twitter.com/Rajeshlingala4"><i class="bi bi-twitter"></i></a>
          </div>
          <button onClick={()=>{window.open(resume)} } className="btn  btn-color-2 btn2 shade">Download CV</button>
        </div>
        <div className="contact-right">
          <h1 className="subtitle">Get-In-Touch</h1>
          <form onSubmit={onSubmit} >
            <input type="text" name="Name" placeholder="Your Name" required/>
            <input type="email" name="Email" placeholder="Your Email" required/>
            <textarea name="Message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <button className="btn  btn-color-2 shade"  type="submit">Submit</button>
          </form>

        </div>
      </div>
    </div>
  </div>
  </section>
    </div>
  )
}

export default memo(Contact)