import React from 'react'
import './navbar.css'

function navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'navbar ' + (menuOpen && 'active')}>
      <div className="nav__container">
        <div className='logo__container'>
          <img className='logo' src='./assets/logo.png' alt='Logo'></img>
          <h2 className='logo__desc'>Aidan Poor</h2>
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