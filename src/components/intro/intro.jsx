import { Typewriter } from 'react-simple-typewriter';
import './intro.css'

function Intro() {

  return (
    <div className='intro' id='intro'>
      <div className="intro__container">
        <h2>Hi there, I'm</h2>
        <h1>Aidan Poor</h1>
        <h3>I'm a
        <span className='intro__jobs'>
          <Typewriter loop cursor cursorStyle="|" 
                      typeSpeed={70} deleteSpeed={50} delaySpeed={2000}
                      words={[' Software Engineer', ' Web Developer', ' Designer']} />
        </span>
        </h3>
      </div>
      <div className="me__container">
        <img className='me2' src="assets/me.png" alt="Me" />
      </div>
    </div>
  )
}

export default Intro