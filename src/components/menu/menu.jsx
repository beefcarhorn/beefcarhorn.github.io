import React, { useState, useEffect } from 'react'
import './menu.css'

const Menu = ({ menuOpen, setMenuOpen }) => {

  const [windowSize, setWindowSize] = useState([ window.innerWidth, window.innerHeight ])
    
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', handleWindowResize)
    return () => { window.removeEventListener('resize', handleWindowResize) }
  })

  if (windowSize[0] > 980) { setMenuOpen(false) }

  return (
    <div >

    </div>
  )
}

export default Menu