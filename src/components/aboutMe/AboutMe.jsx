import React, { useState, useEffect } from 'react'
import './aboutMe.css'
import Tilt from 'react-parallax-tilt'

function AboutMe() {

  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight])
  
  useEffect(() => {
    const handleWindowResize = () => { setWindowSize([window.innerWidth, window.innerHeight]) }
    window.addEventListener('resize', handleWindowResize)
    return () => { window.removeEventListener('resize', handleWindowResize); }
  })

  var isWidth710 = windowSize[0] <= 710

  return (
    <div className='AboutMe' id='AboutMe'>
      <h1 className='about__header'>About</h1>

      { isWidth710 && 
        <div className='main__width'>
          <Tilt className="freetime__container" tiltAxis='y' tiltMaxAngleY={5} glareEnable={true} glareColor='#ffffff' glarePosition='all' glareBorderRadius='100' glareMaxOpacity={0.05}>
            <img className='friends' src='./assets/friends.png' alt="" />
            <h2 className='freetime'>Free Time</h2>
            <h4>When I'm not studying or participating in extracurriculars, I like to hang out with friends, play soccer, and build computers.</h4>
          </Tilt>
          <Tilt className="travel__container" tiltAxis='y' tiltMaxAngleY={5} glareEnable={true} glareColor='#ffffff' glarePosition='all' glareBorderRadius='100' glareMaxOpacity={0.05}>
            <img className='travel travel__image' src='./assets/travel.png' alt="" />
            <h2 className='travel'>Travel</h2>
            <h4>I always love traveling when I get the chance. My favorite trips I've taken were Amsterdam and to Toulouse, France.</h4>
          </Tilt>
          <Tilt className="art__container" tiltAxis='y' tiltMaxAngleY={5} glareEnable={true} glareColor='#ffffff' glarePosition='all' glareBorderRadius='100' glareMaxOpacity={0.05}>
            <img className='art art__image' src='./assets/art.png' alt="" />
            <h2 className='art'>Art</h2>
            <h4>3D modeling has been a passion of mine for four years. Here are examples of my work.</h4>
          </Tilt>
        </div> }

        { !isWidth710 && 
        <div className='main__width'>
          <Tilt className="freetime__container" tiltAxis='y' tiltMaxAngleY={5} glareEnable={true} glareColor='#ffffff' glarePosition='all' glareBorderRadius='100' glareMaxOpacity={0.05}>
            <img className='friends' src='./assets/friends.png' alt="" />
            <h2 className='freetime'>Free Time</h2>
            <h4>When I'm not studying or participating in extracurriculars, I like to hang out with friends, play soccer, and build computers.</h4>
          </Tilt>
          <Tilt className="travel__container" tiltAxis='y' tiltMaxAngleY={5} glareEnable={true} glareColor='#ffffff' glarePosition='all' glareBorderRadius='100' glareMaxOpacity={0.05}>
            <img className='travel travel__image' src='./assets/travel.png' alt="" />
            <h2 className='travel__label'>Travel</h2>
            <h4>I always love traveling when I get the chance. My favorite trips I've taken were Amsterdam and to Toulouse, France.</h4>
          </Tilt>
          <Tilt className="art__container" tiltAxis='y' tiltMaxAngleY={5} glareEnable={true} glareColor='#ffffff' glarePosition='all' glareBorderRadius='100' glareMaxOpacity={0.05}>
            <img className='art art__image' src='./assets/art.png' alt="" />
            <h2 className='art__label'>Art</h2>
            <h4>3D modeling has been a passion of mine for four years. Here are examples of my work.</h4>
          </Tilt>
        </div> }

      {/* { !isWidth710 && 
      <div className='about__image__container'>
        <div className='about__image'>
          <img className='friends' src='./assets/friends.png' alt="" />
        </div>
        <div className='about__image'>
          <img className='travel' src='./assets/travel.png' alt="" />
        </div>
        <div className='about__image'>
          <img className='art' src='./assets/art.png' alt="" />
        </div>
      </div> }
      { !isWidth710 && 
      <div className='about__hobby'>
        <Tilt className='hobby__desc' tiltAxis='y' tiltMaxAngleY={5} glareEnable={true} glareColor='#ffffff' glarePosition='all' glareBorderRadius='100' glareMaxOpacity={0.05}>
          <h2>Free Time</h2>
          <h4>When I'm not studying or participating in extracurriculars, I like to hang out with friends, play soccer, and build computers.</h4>
        </Tilt>
        <Tilt className="hobby__desc travel" tiltAxis='y' tiltMaxAngleY={5} glareEnable={true} glareColor='#ffffff' glarePosition='all' glareBorderRadius='100' glareMaxOpacity={0.05}>
          <h2 className='travel__header'>Travel</h2>
          <h4>I always love traveling when I get the chance. My favorite trips I've taken were to Amsterdam and Toulouse, France.</h4>
        </Tilt>
        <Tilt className="hobby__desc art" tiltAxis='y' tiltMaxAngleY={5} glareEnable={true} glareColor='#ffffff' glarePosition='all' glareBorderRadius='100' glareMaxOpacity={0.05}>
           <h2 className='art__header'>Art</h2>
          <h4>3D modeling has been a passion of mine for four years. Here are examples of my work.</h4>
        </Tilt>
      </div> } */}
    </div>
  )
}

export default AboutMe