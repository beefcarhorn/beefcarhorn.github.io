import React from 'react'
import './navbar.css'
import { MdPerson, MdOutlineEmail } from "react-icons/md"

function navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'navbar ' + (menuOpen && 'active')}>
      <div className="container">
        <div className="left">
          <a href="#intro" className='logo'>_</a>
          <div className="item__container">
            <MdPerson className='icon'/>
            <span className='left__span'>(317) 224 6441</span>
          </div>
          <div className="item__container">
            <MdOutlineEmail className='icon'/>
            <span className='left__span'>aidan.poor123@gmail.com</span>
          </div>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={'line1 right__span ' + (menuOpen && 'ham__active')}></span>
          <span className={'line2 right__span ' + (menuOpen && 'ham__active')}></span>
          <span className={'line3 right__span ' + (menuOpen && 'ham__active')}></span>
        </div>
      </div>
    </div>
  )
}

export default navbar