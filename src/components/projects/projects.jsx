import React, { useState } from 'react'
import './projects.css'
import { countryArr } from './countryArray'
import Tilt from 'react-parallax-tilt'

var rand = Math.floor(Math.random() * countryArr.length); // init
var img = countryArr[rand]

const updateCountry = () => {
  rand = Math.floor(Math.random() * countryArr.length)
  img = countryArr[rand]
}

const Projects = () => {
  const [input, setInput] =  useState()
  const [country, setCountry] = useState(`assets/countries/${img}`)

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const keyDownHandler = (event) => {
    if (event.key === 'Enter' && `${input}.png`.toLowerCase() === img.toLowerCase()) {
      updateCountry()
      setCountry(`assets/countries/${img}`)
      setInput('')
    }
  }

  return (
    <div className='projects' id='projects'>
      <h1 className='projects__header'>Projects</h1>
      <Tilt className='projects__country' tiltAxis='y' tiltMaxAngleY={1} glareEnable={true} glareColor='#313b60' glarePosition='all' glareBorderRadius='100' glareMaxOpacity={0.2}>
        <div className='country__desc'>
          <h2 className='country__header'>CountryGuessr</h2>
          <h4 className='country__howto'>A game where you guess the name of a random country or territory!</h4>
          <div className='country__specs'>
            <img className='country__js' src='assets/js.png' alt='JavaScript'></img>
            <img className='html' src='assets/html.ico' alt='HTML'></img>
            <img className='css' src='assets/css.png' alt='CSS'></img>
          </div>
        </div>
        <div className='answer__container'>
          <img src={country} alt='Country'></img>
          <input className='answer__input' type="text" value={input} placeholder='Enter Guess' onChange={handleChange} onKeyDown={keyDownHandler} />
        </div>
      </Tilt>
    </div>
  )
}

export default Projects