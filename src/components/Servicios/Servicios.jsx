import React from 'react'
import './Servicios.css'

function Servicios() {
  return (
    <div class="container-servicios">
        <div class="container-titulo-servicios">
            <h2>Nuestros servicios</h2>
        </div>
        <div class="container-subtitulo-servicios">
            <h3>Conocimiento agrometeorológico, decisiones inteligentes.</h3>
        </div>
        <div class="container-video-servicios">
            <img className="imagen-servicios" src="imagen.jpg" alt="Imagen" />
        </div>
    </div>
  )
}

export default Servicios
