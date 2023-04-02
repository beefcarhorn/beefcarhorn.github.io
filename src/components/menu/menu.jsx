import React, { useState, useEffect } from 'react'
import './menu.css'

const Menu = ({ menuOpen, setMenuOpen }) => {

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

      if (windowSize[0] > 980) { setMenuOpen(false) }

  return (
    <div className={`menu  ${windowSize[0] > 980 ? 'invisible' : ''} ${menuOpen && 'menu__active'}`}>
        <ul className='menu__list'>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#AboutMe">About Me</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#skills">Skills</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#projects">Projects</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#organizations">Organizations</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu