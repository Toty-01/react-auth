import {Link, Routes, Route} from "react-router-dom"
import Accueil from "./pages/Accueil.js"
import About from "./pages/About.js"
import Galerie from "./pages/Galerie.js"
import Contact from "./pages/Contact.js"
import Entrainement from "./pages/Entrainement.js"
import './App.css'
import logo from './logo192.png'
import {useState} from 'react';

function App() {

  const [ShowLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!ShowLinks)
  }

  return (
      <div className="App">
      <nav className={`navbar ${ShowLinks ? "show-nav" : "hide-nav"} `}>
        <div className="navbar_logo">
          <img src={logo} alt="" className="logo" />
          <span className='app-name'>My-app</span>
        </div>
          <ul className="navbar_links">
            <li className="navbar_item slideInDown-2">
              <Link to="/" className="navbar_link">Accueil</Link>
            </li>
            <li className="navbar_item slideInDown-1">
              <Link to="/About" className="navbar_link">About</Link>
            </li>
            <li className="navbar_item slideInDown-2">
              <Link to="/Galerie" className="navbar_link">Galerie</Link>
            </li>
            <li className="navbar_item slideInDown-1">
              <Link to="/Contact" className="navbar_link">Contact</Link>
            </li>
            <li className="navbar_item slideInDown-2">
              <Link to="/Entrainement" className="navbar_link">Entrainement</Link>
            </li>
          </ul>
          <button className="navbar_burger" onClick={handleShowLinks}>
            <span className="burger-bar"></span>
          </button>
      </nav>
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Galerie" element={<Galerie />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Entrainement" element={<Entrainement />}></Route>
      </Routes>
      </div>
  )
}

export default App