import React from 'react'
import './portfolio.css'

function portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <div className="header__container">
        <h1 className='port__header'>Skills</h1>
      </div>
      <div className='skills__grid'>
        <div className='skills__container'>
          <img src="assets/react.svg" alt="" />
          <li>1</li>
        </div>
        <div className='skills__container'>
          <img className='js' src="assets/js.png" alt="" />
          <li>1</li>
        </div>
        <div className='skills__container'>
          <img src="assets/C.png" alt="" />
          <li>1</li>
        </div>
        <div className='skills__container'>
          <img src="assets/py.png" alt="" />
          <li>1</li>
        </div>
      </div>
    </div>
  )
}

export default portfolio