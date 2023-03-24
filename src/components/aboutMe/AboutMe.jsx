import React from 'react'
import './aboutMe.css'
import Tilt from 'react-parallax-tilt'

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
        <Tilt className='hobby__desc' tiltAxis='y' tiltMaxAngleY={5} glareEnable={true} glareColor='#313b60' glarePosition='all' glareBorderRadius='100' glareMaxOpacity={0.7}>
          <h2>Free Time</h2>
          <h4>When I'm not studying or participating in extracurriculars, I like to hang out with friends, play soccer, and build computers.</h4>
        </Tilt>
        <Tilt className="hobby__desc travel" tiltAxis='y' tiltMaxAngleY={5} glareEnable={true} glareColor='#313b60' glarePosition='all' glareBorderRadius='100' glareMaxOpacity={0.7}>
          <h2 className='travel__header'>Travel</h2>
          <h4>I always love traveling when I get the chance. My favorite trips I've taken are to Amsterdam and to Toulouse.</h4>
        </Tilt>
        <Tilt className="hobby__desc art" tiltAxis='y' tiltMaxAngleY={5} glareEnable={true} glareColor='#313b60' glarePosition='all' glareBorderRadius='100' glareMaxOpacity={0.7}>
           <h2 className='art__header'>Art</h2>
          <h4>hello</h4>
        </Tilt>
      </div>
    </div>
  )
}

export default AboutMe