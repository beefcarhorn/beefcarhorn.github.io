import { useState } from "react"
import './App.css'
import { Navbar, Menu, Intro, AboutMe, Skills, Projects, Organizations, Contact } from './components'

function App() {

  
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <AboutMe className='diagonal' />
        <Skills />
        <Projects />
        <Organizations />
        <Contact />
      </div>
    </div>
  );
}

export default App;
