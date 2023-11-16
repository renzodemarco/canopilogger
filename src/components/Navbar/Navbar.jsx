import React from 'react';
import './Navbar.css';
import Logo from '../LogoNav/LogoNav';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
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
          <li className='dropdown-button nav-item'>
            <Dropdown as={ButtonGroup}>
              <Button>
                <Link className='dropdown-button-split' to='/quienes-somos'>Quiénes somos</Link>
              </Button>
              <Dropdown.Toggle splitid="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item><Link to='/quienes-somos#sobre-nosotras'>Sobre nosotras</Link></Dropdown.Item>
                <Dropdown.Item><Link to='/quienes-somos#mision-y-vision'>Misión y visión</Link></Dropdown.Item>
                <Dropdown.Item><Link to='/quienes-somos#conoce-el-equipo'>Conocé el equipo</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="nav-item">
            <Link to='/#seccion-servicios'>Servicios</Link>
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
