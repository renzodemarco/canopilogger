import React from 'react';
import pcImg from '../../assets/pc-inicio.svg'
import './Presentacion.css'

function Presentacion() {
  return (
    <div className="grid-presentacion">
      <div className='container-presentacion'>
        <div className="container-titulo-presentacion">
          <h1>Trazabilidad para que tu negocio pueda crecer.</h1>
        </div>
        <div className="container-subtitulo-presentacion">
          <h3>Somos un equipo experto en agrometeorología y sostenibilidad para ayudar a nuestros clientes a tomar decisiones basadas en información.</h3>
        </div>
        <div className="container-boton-presentacion">
          <a href="mailto:canopilogger@gmail.com"><button>Contacta a un asesor</button></a>
        </div>
      </div>
      <div className="container-imagen-presentacion">
        <img src={pcImg} alt="Imagen" />
      </div>
    </div>
  );
}

export default Presentacion;
