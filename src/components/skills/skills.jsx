import React from 'react'
import './skills.css'

function Skills() {

  return (
    <div className='skills' id='skills'>
      <div className="header__container">
        <h1 className='skills__header'>Technical Skills</h1>
        <div className='skills__header__underline'></div>
      </div>
      <div className='skills__grid'>
        <div className='skills__container react__container'>
          <img src="assets/react.svg" alt="" />
          <h2>Web Development</h2>
          <li>React, HTML, CSS, Node</li>
        </div>
        <div className='skills__container js__container'>
          <img className='js' src="assets/js.png" alt="" />
          <h2>JavaScript</h2>
          <li>TypeScript, ES6, ExpressJS, CommonJS</li>
        </div>
        <div className='skills__container c__container'>
          <img src="assets/C.png" alt="" />
          <h2>C</h2>
          <li>Data Structures, Algorithms</li>
        </div>
        <div className='skills__container py__container'>
          <img src="assets/py.png" alt="" />
          <h2>Python</h2>
          <li>Pygame, Pandas, NumPy</li>
        </div>
      </div>
    </div>
  )
}

export default Skills