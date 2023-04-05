import { Typewriter } from 'react-simple-typewriter';
import './intro.css'

function Intro() {

  return (
    <div className='intro' id='intro'>
      <div className="intro__left">
          <div className="image__container">
            <img className='me' src="assets/me2.png" alt="Me." />
          </div>
      </div>
      <div className="intro__right">
        <div className="intro__right__container">
          <h2 className='intro__h2'>Hi there, I'm</h2>
          <h1 className='intro__h1'>Aidan</h1>
          <h3 className='intro__h3'>I'm a
            <span className='intro__jobs'>
              <Typewriter loop cursor cursorStyle="|" 
                          typeSpeed={70} deleteSpeed={50} delaySpeed={2000}
                          words={[' Software Engineer', ' Web Developer', ' Designer']} />
            </span>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Intro