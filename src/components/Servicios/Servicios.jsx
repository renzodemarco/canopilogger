import React from 'react'
import fondoSemillas from '../../assets/fondo-semillas.svg'
import EnumServicios from '../EnumServicios/EnumServicios'
import asesoramiento from '../../assets/asesoramiento-color.svg'
import sensores from '../../assets/sensor-color.svg'
import reportes from '../../assets/reporte-color.svg'
import ensayos from '../../assets/ensayos-color.svg'
import './Servicios.css'

function Servicios() {
  return (
    <div className="container-servicios">
      <div className="img-fondo-container">
        <img src={fondoSemillas}/>
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
          title="Asesoramiento" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <EnumServicios 
          img={sensores} 
          title="Sensores" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <EnumServicios 
          img={reportes} 
          title="Reportes" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <EnumServicios 
          img={ensayos} 
          title="Ensayos I+D" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
      </div>
    </div>
  )
}

export default Servicios
