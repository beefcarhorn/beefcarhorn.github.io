import React, { useRef, useEffect, useState } from 'react'
import './aboutMe.css'
import Tilt from 'react-parallax-tilt'

function AboutMe() {

  const myRef = useRef()
  const [isVisible, setIsVisible] = useState(false)
  console.log(isVisible)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setIsVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current)
  }, [])


  return (
    <div className='AboutMe' id='AboutMe'>
      <h1 ref={myRef} className='about__header'>About</h1>
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
        </div> 
    </div>
  )
}

export default AboutMe