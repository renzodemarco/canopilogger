import React from 'react'
import fondo from '../../assets/duraznos-abajo.png'
import EnumServicios from '../EnumServicios/EnumServicios'
import asesoramiento from '../../assets/asesoramiento-color.svg'
import sensores from '../../assets/sensor-color.svg'
import reportes from '../../assets/reporte-color.svg'
import './Servicios.css'

function Servicios() {
  return (
    <div className="container-servicios" id="seccion-servicios">
      <div className="img-fondo-container">
        <img src={fondo}  alt="Imagen uvas"/>
      </div>
      <div className="container-titulo-servicios">
        <h2>NUESTROS SERVICIOS</h2>
      </div>
      <div className="container-subtitulo-servicios">
        <h3>Conocimiento agrometeorológico, decisiones inteligentes.</h3>
      </div>
      <div className="container-enum-servicios">
        <EnumServicios 
          img={asesoramiento} 
          title="Asesoramiento y Ensayos" 
          text="Realizamos diseños para evaluar situaciones específicas."/>
        <EnumServicios 
          img={sensores} 
          title="Equipos de Medición" 
          text="Utilizamos equipos de desarrollo tecnológico propio para medición de variables meteorológicas a campo."/>
        <EnumServicios 
          img={reportes} 
          title="Reportes Agrometeorológicos" 
          text="Para la trazabilidad de las variables meteorológicas y prácticas de manejo a nivel de predio."/>
      </div>
    </div>
  )
}

export default Servicios
