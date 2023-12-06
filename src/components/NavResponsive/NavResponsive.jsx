import React from 'react';
import './NavResponsive.css';
import { Link } from 'react-router-dom';
import icon from '../../assets/hamburger-icon.svg'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavResponsive() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="hamburger-icon">
        <img src={icon}/>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={'end'} style={{ width: '260px' }}>
        <Offcanvas.Header className='nav-responsive-header' closeButton>
          <Offcanvas.Title className='nav-responsive-title'></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="nav-responsive-list">
            <li className="nav-responsive-item">
              <Link to='/' onClick={handleClose}>Inicio</Link>
            </li>
            <li className="nav-responsive-item">
              <Link to='/quienes-somos' onClick={handleClose}>Quiénes somos</Link>
            </li>
            <li className="nav-responsive-item">
              <Link to='/servicios' onClick={handleClose}>Servicios</Link>
            </li>
            <li className="nav-responsive-item nav-responsive-contact">
              <Link to='/contacto' onClick={handleClose}>Contacto</Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );

}

export default NavResponsive;
