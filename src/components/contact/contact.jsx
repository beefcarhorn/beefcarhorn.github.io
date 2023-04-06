import React from 'react'
import './contact.css'

function Contact() {

  return (
    <div className='contact' id='contact'>
      <div className="shadow"></div>
      <h1 className='contact__header'>Contact Me</h1>
      <div className="contact__container">
        <div className="contact__email">
          <h3>Email:</h3>
          <h2>aidan.poor123@gmail.com</h2>
        </div>
        <div className="media__container">
          <div className="contact__github">
            <h3>Github</h3>
            <a href="https://github.com/beefcarhorn" target='_blank' rel='noopener noreferrer'>
              <img className='github github__logo' src="assets/github.png" alt="Github" />
            </a>
          </div>
          <div className="contact__linkedIn">
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/aidan-poor-ab520b24b/" target='_blank' rel='noopener noreferrer'>
              <img className='linkedin linkedIn__logo' src="assets/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
      <p className='copyright'>Copyright © 2023 Aidan Poor. All Rights Reserved</p>
    </div>
  )
}

export default Contact