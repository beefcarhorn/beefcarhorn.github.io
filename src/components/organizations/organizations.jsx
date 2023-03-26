import React from 'react'
import './organizations.css'

const Organizations = () => {
  return (
    <div className='organizations' id='organizations'>
        <h1 className='organizations__header'>Organizations</h1>
        <div className="ieee">
          <a href='https://purdueieee.org/' target='_blank' rel='noopener noreferrer'>
            <img className='ieee__logo' src="assets/ieee.png" alt="IEEE" />
          </a>
          <h3>The Purdue IEEE Computer Society is a team that focuses on projects that explore the world of modern,
              cutting edge hardware and computing. Since August of 2022, I have been contributing to two main projects: </h3>
          <li>
            <h2>Smart Mirror</h2>
            <h3>The Smart Mirror project predominantly uses Python's OpenCV library to recognize faces and track hand movement through a camera.
                By using a two sided mirror and monitor, the user will be able to view media such as news, weather, a calendar, and games
                through the implementation of various libraries and APIs.</h3>
            <h2>Raspberry Pi Online Server</h2>
            <h3>The goal of this ongoing project is to connect two or more users to a Raspberry Pi through an established
                router connection. The players will be able to play online games such as Tron, Snake, and chess.
            </h3>
          </li>
        </div>
        <div className="ecess">
          <a href='https://www.purdue-ecess.org/' target='_blank' rel='noopener noreferrer'>
            <img className='ecess__logo' src="assets/ecess.png" alt="ECESS" />
          </a>
          
        </div>
    </div>
  )
}

export default Organizations