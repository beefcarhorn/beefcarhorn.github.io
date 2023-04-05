import React, { useState } from 'react'
import { countryArr } from './countryArray'
import { isCorrect } from './isCorrect'
import './projects.css'

var img = countryArr[Math.floor(Math.random() * countryArr.length)]
const countryProps = { img: img, prevImg: img }

const updateCountry = () => {
  while ((img = countryArr[Math.floor(Math.random() * countryArr.length)]) !== countryProps.img)
  countryProps.img = img
}

const capitalizeLetters = (str) => {
  const words = str.split(" ")
  const articles = ['and', 'the', 'of']
  for (let i = 0; i < words.length; i++) {
      if (i >= 0 && !articles.includes(words[i])) { words[i] = words[i][0].toUpperCase() + words[i].slice(1) }
  }
  return words.join(" ")
}

const revealedAnswer = (str) => {
  const answer = capitalizeLetters(str)
  return answer.replace('.png', '')
}

const Projects = () => {
  const [input, setInput] =  useState('')
  const [country, setCountry] = useState(`assets/countries/${countryProps.img}`)
  const [downAnim, setDownAnim] = useState(false)
  const [upAnim, setUpAnim] = useState(false)
  const [score, setScore] = useState(0);
  const [reveal, setReveal] = useState(false)

  const handleChange = (event) => { setInput(event.target.value) }
  const animate = (event) => { event === 'mouseDown' ? setDownAnim(!downAnim) : setUpAnim(!upAnim) }
  const nextCountry = (event) => {
    if (event === 'giveUp') {
      countryProps.prevImg = countryProps.img
      setReveal(true)
      setScore(0) 
    }
    updateCountry()
    setCountry(`assets/countries/${countryProps.img}`)
    setInput('')
  }

  const checkGuess = (event) => {
    console.log('entered checkGuess')
    if (event.key !== 'Enter') { return }
    console.log('key == enter')
    if (!isCorrect(`${input}.png`.toLowerCase().replace('.png', ''), countryProps.img.toLowerCase().replace('.png', ''))) { return }
    setReveal(false)
    setScore(score + 1)
    nextCountry()
  }

  return (
    <div className='projects' id='projects'>
      <div className="shadow__top"></div>
      <h1 className='projects__header'>Projects</h1>
      <div className='projects__header__underline'></div>
      <div className='projects__country'>
        <div className='country__desc'>
          <h2 className='country__header'>CountryGuessr</h2>
          <h4 className='country__howto'>Guess the name of a random country or territory!</h4>
          <div className='country__specs'>
            <img className='country__js' src='assets/js.png' alt='JavaScript'></img>
            <img className='html' src='assets/html.ico' alt='HTML'></img>
            <img className='css' src='assets/css.png' alt='CSS'></img>
          </div>
        </div>
        <div className='answer__container'>
          <img src={country} alt='Country'></img>
          <input className='answer__input' type="text" value={input} placeholder='Enter Guess' onChange={handleChange} onKeyDown={checkGuess} />
          <div className="country__data__container">
            <button className={`answer__skip ${ downAnim ? 'down__anim' : null } 
                                           ${ upAnim ? 'up__anim' : null }`} 
                                           onClick={() => nextCountry('giveUp')} 
                                           onMouseDown={() => { animate('mouseDown'); setUpAnim(false) }} 
                                           onMouseUp={() => { animate('mouseUp'); setDownAnim(false) }} 
                                           onMouseLeave={() => setDownAnim(false)}>Give Up</button>
              <div className="score__container">
                <h2 className="country__score">Streak: {score}</h2>
              </div>
          </div>
          <div className={`answer__reveal__container ${ reveal ? 'reveal' : 'unreveal' }`}>
            <h2>The country was</h2>
            <h1 className='answer'>{`${revealedAnswer(countryProps.prevImg)}!`}</h1>
          </div>
        </div>
      </div>
      <div className="shadow__bottom"></div>
    </div>
  )
}

export default Projects