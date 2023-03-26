import React from 'react'
import './menu.css'

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={'menu ' + (menuOpen && 'menu__active')}>
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
                <a href="#contacts">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu