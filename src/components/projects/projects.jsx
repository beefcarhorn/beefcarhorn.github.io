import React from 'react'
import './projects.css'

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <div className="shadow__top"></div>
      <h1 className='projects__header'>Projects</h1>
      <div className='projects__header__underline'></div>
      <div className='projects__country'>
        <video className='country__guessr' src="assets/countryGuessr.mp4" muted={true} 
                                                                          controls={true} 
                                                                          autoPlay={true} 
                                                                          loop={true} 
                                                                          playsInline={true} />
      </div>
      <div className="shadow__bottom"></div>
    </div>
  )
}

export default Projects