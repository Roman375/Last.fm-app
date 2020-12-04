import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="red darken-4">
      <div className="nav-wrapper mr1">
        <a href="https://www.last.fm" className="brand-logo">
          Last.fm
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/searchtrack">SearchTrack</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
