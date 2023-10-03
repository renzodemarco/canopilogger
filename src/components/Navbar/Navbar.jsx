import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  // Estado para gestionar si los elementos desplegables están abiertos o cerrados
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);

  // Función para alternar la visibilidad del primer desplegable
  const toggleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
  };

  // Función para alternar la visibilidad del segundo desplegable
  const toggleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>Logo</h2> {/* Aquí se coloca el componente de Logo */}
      </div>
      <ul className="nav-list">
        <li className="nav-item">Inicio</li>
        <li className="nav-item" onClick={toggleDropdown1}>
          Quiénes somos ▼
          {dropdown1Open && (
            <ul className="dropdown">
              <li>Sobre nosotras</li>
              <li>Conoce el equipo</li>
              <li>Misión y visión</li>
              <li>Nuestros pilares</li>
            </ul>
          )}
        </li>
        <li className="nav-item" onClick={toggleDropdown2}>
          Servicios ▼
          {dropdown2Open && (
            <ul className="dropdown">
              <li>Asesoramiento</li>
              <li>Sensores</li>
              <li>Reportes</li>
              <li>Ensayos I+D</li>
            </ul>
          )}
        </li>
        <li className="nav-item">Contacto</li>
      </ul>
    </nav>
  );
}

export default Navbar;
