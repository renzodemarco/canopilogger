import React from 'react';
import './Presentacion.css'

function Presentacion() {
  return (
    <div className="container">
      <div className="left-column">
        <h1>Un equipo experto en ciencias y agrometeorología</h1>
        <h2>Ayudamos a nuestros clientes a tomar decisiones basadas en información.</h2>
        <button>Contacta a un asesor</button>
      </div>
      <div className="right-column">
        <img src="imagen.jpg" alt="Imagen" />
      </div>
    </div>
  );
}

export default Presentacion;
