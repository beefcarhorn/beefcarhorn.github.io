import React from 'react'
import './menu.css'

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={'menu ' + (menuOpen && 'menu__active')}>
        <ul>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#AboutMe">About Me</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#Portfolio">Portfolio</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#testimonials">Testimonials</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#contacts">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu