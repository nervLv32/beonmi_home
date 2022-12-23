import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="inner01">
        <div id="logo">
          <h1>
            <Link to="/" className="ir">
              BeOnMi
            </Link>
          </h1>
        </div>
        <div id="gnb">
          <ul>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink to="/our" className={({ isActive }) => (isActive ? 'active' : '')}>
                OUR
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                CONTACT
              </NavLink>
            </li>
          </ul>
          <div className="menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header