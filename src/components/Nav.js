import React from 'react'
import logo from './logo192.png'

const Nav = () => {
  return (
    <nav className='navbar'>
      
      <div className="navbar_logo">
        <img src={logo} alt="" className="logo" />
        <span className='app-name'>My-app</span>
      </div>

      <ul className="navbar_links">

        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Accueil
          </a>
        </li>

        <li className="navbar_item">
          <a href="/" className="navbar_link">
            A propos
          </a>
        </li>

        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Galerie
          </a>
        </li>

        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Contact
          </a>
        </li>

        <li className="navbar_item">
          <a href="/" className="navbar_link">
            Entrainement
          </a>
        </li>

      </ul>
      <button className='navbar_burger'>
        <span className="burger-bar"></span>
      </button>
    </nav>
  )
}

export default Nav