import React from 'react'
import './aboutMe.css'

function AboutMe() {
  return (
    <div className='AboutMe' id='AboutMe'>
      <h1 className='about__header'>About</h1>
      <div className='about__image__container'>
        <div className='about__image'>
          <img className='code' src='./assets/programming.png' alt="" />
        </div>
        <div className='about__image'>
          <img className='travel' src='./assets/travel.png' alt="" />
        </div>
        <div className='about__image'>
          <img className='art' src='./assets/art.png' alt="" />
        </div>
      </div>
      <div className='about__hobby'>
        <div className="hobby__desc">
          <h2>Programming</h2>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus ullam consectetur corporis molestiae. Nobis quas molestiae accusantium architecto asperiores.</h4>
        </div>
        <div className="hobby__desc">
          <h2 className='travel__header'>Travel</h2>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit exercitationem neque, earum nostrum dolore dolorum nobis incidunt est vero? Magnam!</h4>
        </div>
        <div className="hobby__desc">
           <h2 className='art__header'>Art</h2>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum iusto deserunt nostrum voluptas minima perferendis praesentium debitis saepe dolor?</h4>
        </div>
      </div>
    </div>
  )
}

export default AboutMe