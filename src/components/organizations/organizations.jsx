import React from 'react'
import './organizations.css'

const Organizations = () => {


  return (
    <div className='organizations' id='organizations'>
      <h1 className='organizations__header'>Organizations</h1>
      <div className='organizations__header__underline'></div>
      <div className="organizations__container">
        <div className='ieee'>
          <a href='https://purdueieee.org/' target='_blank' rel='noopener noreferrer'>
            <img className='ieee__logo' src="assets/ieee.png" alt="IEEE" />
          </a>
          <h3>The Purdue IEEE Computer Society is a team that focuses on projects that explore the world of modern,
              cutting edge hardware and computing. Since August 2022, I have been contributing to two main projects: </h3>
          <li>
            <h2>Smart Mirror</h2>
            <h3>The Smart Mirror project predominantly uses Python's OpenCV library to recognize faces and track hand movement through a camera.
                By using a two sided mirror and monitor, the user will be able to view media such as news, weather, a calendar, and play games
                through the implementation of various libraries and APIs.</h3>
            <h2>Raspberry Pi Online Server</h2>
            <h3>The goal of this ongoing project is to connect two or more users to a Raspberry Pi through an established
                router connection. The players will be able to play online games such as Tron, Snake, and chess.
            </h3>
          </li>
        </div>
        <div className='ecess'>
          <a href='https://www.purdue-ecess.org/' target='_blank' rel='noopener noreferrer'>
            <img className='ecess__logo' src="assets/ecess.png" alt="ECESS" />
          </a>
          <h3>The Electrical and Computer Engineering Student Society helps bring students together who have like-minded interests and goals.
              Since August 2022, I have been on the ECESS Web Development team.  
          </h3>
          <h2>Web Development Team</h2>
          <h3>Since I have joined the Web Development team, the ECESS website has not been updated since 2021.
              I am currently taking it upon myself to update the landing page to introducing more modern UI/UX components and allow
              for easier navigation for new, aspiring members. I then plan to modernize pages of ECESS subteams after the landing page.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Organizations