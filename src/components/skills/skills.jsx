import React from 'react'
import { useInView } from 'react-intersection-observer';
import './skills.css'

function Skills() {

  const { ref: skillsRef, inView: skillsVisible } = useInView()
  const { ref: reactRef, inView: reactVisible } = useInView()
  const { ref: jsRef, inView: jsVisible } = useInView()
  const { ref: cRef, inView: cVisible } = useInView()
  const { ref: pyRef, inView: pyVisible } = useInView()

  return (
    <div className='skills' id='skills'>
      <div className="header__container">
        <h1 className='skills__header'>Technical Skills</h1>
        <div ref={skillsRef} className={`skills__header__underline ${skillsVisible ? 'skills__visible' : ''}`}></div>
      </div>
      <div className='skills__grid'>
        <div ref={reactRef} className={`skills__container react__container ${reactVisible ? 'react__anim' : '' }`}>
          <img src="assets/react.svg" alt="" />
          <h2>Web Development</h2>
          <li>React, HTML, CSS, Node</li>
        </div>
        <div ref={jsRef} className={`skills__container js__container  ${jsVisible ? 'js__anim' : '' }`}>
          <img className='js' src="assets/js.png" alt="" />
          <h2>JavaScript</h2>
          <li>TypeScript, ES6, CommonJS</li>
        </div>
        <div ref={cRef} className={`skills__container c__container ${cVisible ? 'c__anim' : '' }`}>
          <img src="assets/C.png" alt="" />
          <h2>C</h2>
          <li>Data Structures, Algorithms</li>
        </div>
        <div ref={pyRef} className={`skills__container py__container ${pyVisible ? 'py__anim' : '' }`}>
          <img src="assets/py.png" alt="" />
          <h2>Python</h2>
          <li>Pygame, Pandas, NumPy</li>
        </div>
      </div>
    </div>
  )
}

export default Skills