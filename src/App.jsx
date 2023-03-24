import { useState } from "react"
import './App.css'
import { Contacts, Intro, Navbar, Skills, Projects, AboutMe, Menu } from './components'

function App() {

  
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <AboutMe />
        <Skills />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
