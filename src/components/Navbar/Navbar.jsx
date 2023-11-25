import React from 'react';
import './Navbar.css';
import Logo from '../LogoNav/LogoNav';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Logo/>
      </div>
      <div className="navbar-right">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to='/'>Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to='/quienes-somos'>Quiénes somos</Link>
          </li>
          <li className="nav-item">
            <Link to='/servicios'>Servicios</Link>
          </li>
          <li className="nav-item nav-contact">
            <Link to='/contacto'>Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
