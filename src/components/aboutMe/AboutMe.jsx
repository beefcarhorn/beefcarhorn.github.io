import React from 'react'
import './aboutMe.css'

function AboutMe() {
  return (
    <div className='AboutMe' id='AboutMe'>
      <h1 className='about__header'>About</h1>
      <div className='about__image__container'>
        <div className='about__image'>
          <img className='code' src='./assets/friends.png' alt="" />
        </div>
        <div className='about__image'>
          <img className='travel' src='./assets/travel.png' alt="" />
        </div>
        <div className='about__image'>
          <img className='art' src='./assets/art.png' alt="" />
        </div>
      </div>
      <div className='about__hobby free__time'>
        <div className="hobby__desc">
          <h2>Free Time</h2>
          <h4>When I'm not studying or participating in extracurriculars, I like to hang out with friends, play soccer, and build computers.</h4>
        </div>
        <div className="hobby__desc travel">
          <h2 className='travel__header'>Travel</h2>
          <h4>I've always had a passion for experiencing new places and cultures. My current favorite trip I've taken is to Amsterdam.</h4>
        </div>
        <div className="hobby__desc art">
           <h2 className='art__header'>Art</h2>
          <h4></h4>
        </div>
      </div>
    </div>
  )
}

export default AboutMe