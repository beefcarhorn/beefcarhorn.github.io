import React, { useState, useEffect } from 'react'
import './navbar.css'

function Navbar({ menuOpen, setMenuOpen }) {

  const [windowSize, setWindowSize] = useState([ window.innerWidth, window.innerHeight ])

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', handleWindowResize)
    return () => { window.removeEventListener('resize', handleWindowResize) }
  })

  return (
    <div className={`navbar ${windowSize[0] > 980 ? 'revert__color' : ''}  ${menuOpen && 'active'}`}>
      <div className="nav__container">
        <div className='logo__container'>
          <img className='logo' src='./assets/logo.png' alt='Logo'></img>
        </div>
        <div className="nav__icon__container">
          <h3 className="navbar__email">aidan.poor123@gmail.com</h3>
          <a href="https://github.com/beefcarhorn" target='_blank' rel='noopener noreferrer'>
            <img className='github' src="assets/github.png" alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/aidan-poor-ab520b24b/" target='_blank' rel='noopener noreferrer'>
            <img className='linkedin' src="assets/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar