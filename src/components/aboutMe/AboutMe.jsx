import React from 'react'
import { useNavigate } from 'react-router-dom'
import './aboutMe.css'

function AboutMe() {

  const nav = useNavigate()
  
  return (
    <div className='AboutMe' id='AboutMe'>
      <h1 className='about__header'>About</h1>
      <div className='about__header__underline'></div>
        <div className='main__width'>
          <div className='about__container freetime__container'>
            <img className={`friends`} src='./assets/friends.png' alt="" />
            <h2 className='freetime'>Free Time</h2>
            <h4>When I'm not studying or participating in extracurriculars, I like to hang out with friends, play soccer, and build computers.</h4>
          </div>
          <div className='about__container travel__container'>
            <img className='travel travel__image' src='./assets/travel.png' alt="" />
            <h2 className='travel'>Travel</h2>
            <h4>I always love traveling when I get the chance. My favorite trips I've taken were Amsterdam and to Toulouse, France.</h4>
          </div>
          <div className='about__container art__container'>
            <img className='art art__image' src='./assets/art.png' alt="" />
            <h2 className='art'>Art</h2>
            <h4 className='art__desc'>Rendering and 3D modeling have been passions of mine for years. Click to see examples of my work.</h4>
            <button className='gallery__button' onClick={() => nav('/gallery')}>Gallery</button>
          </div>
        </div> 
    </div>
  )
}

export default AboutMe