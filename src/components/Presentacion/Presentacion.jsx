import React from 'react';
import './Presentacion.css'

function Presentacion() {
  return (
    <div className="grid-presentacion">
      <div className='container-presentacion'>
        <div className="container-titulo-presentacion">
          <h1>Un equipo experto en ciencias y agrometeorología</h1>
        </div>
        <div className="container-subtitulo-presentacion">
          <h3>Ayudamos a nuestros clientes a tomar decisiones basadas en información.</h3>
        </div>
        <div className="container-boton-presentacion">
          <button>Contacta a un asesor</button>
        </div>
      </div>
      <div className="container-imagen-presentacion">
        <img src="imagen.jpg" alt="Imagen" />
      </div>
    </div>
  );
}

export default Presentacion;
