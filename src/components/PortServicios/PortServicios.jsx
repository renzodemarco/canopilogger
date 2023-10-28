import React from 'react'
import portadaServicios from '../../assets/portadaServicios.png'
import './PortServicios.css'

function PortServicios() {
  return (
    <div className="container-portservicios">
        <div className="container-intro-portservicios">
            <div className="container-titulo-portservicios">
                <h2>NUESTROS SERVICIOS</h2>
            </div>
            <div className="container-subtitulo-portservicios">
                <h3>Conocimiento agrometeorológico, decisiones inteligentes.</h3>
            </div>
        </div>
        <img className="imagen-portservicios" src={portadaServicios} alt="Portada servicios" />
    </div>
    
  )
}

export default PortServicios
