import React, { useState, useEffect } from 'react'
import './navbar.css'

function Navbar({ menuOpen, setMenuOpen }) {

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <div className={`navbar ${windowSize[0] > 980 ? 'revert__color' : ''}  ${menuOpen && 'active'}`}>
      <div className="nav__container">
        <div className='logo__container'>
          <img className='logo' src='./assets/logo.png' alt='Logo'></img>
          <h2 className='logo__desc'>Aidan</h2>
        </div>
        <ul className='nav__menu__list'>
          <a href="#intro">Home</a>
          <a href="#AboutMe">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#organizations">Organizations</a>
          <a href="#contact">Contact</a>
        </ul>
        <div className="nav__icon__container">
          <a href="https://github.com/beefcarhorn" target='_blank' rel='noopener noreferrer'>
            <img className='github' src="assets/github.png" alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/aidan-poor-ab520b24b/" target='_blank' rel='noopener noreferrer'>
            <img className='linkedin' src="assets/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
          <div className={`hamburger ${windowSize[0] < 980 ? 'pointer' : ''}`} onClick={ windowSize[0] < 980 ? () => setMenuOpen(!menuOpen) : null}>
            <span className={'line1 right__span ' + (menuOpen && 'ham__active')}></span>
            <span className={'line2 right__span ' + (menuOpen && 'ham__active')}></span>
            <span className={'line3 right__span ' + (menuOpen && 'ham__active')}></span>
          </div>
      </div>
    </div>
  )
}

export default Navbar