import React from 'react'
import maiz from '../../assets/maiz-abajo.png'
import IntEquipo from '../EnumEquipo/EnumEquipo'
import fotoRegina from '../../assets/fotoRegina.jpeg'
import fotoEva from '../../assets/fotoEva.jpg'
import fotoVane from '../../assets/fotoVane.jpg'
import './Equipo.css'

function Equipo() {
  return (
    <div className="container-equipo">
        <div className="container-texto-equipo">
            <h2>Conoce nuestro equipo</h2>
            <p>Nos comprometemos a ofrecer servicios de la más alta calidad, respaldados por un equipo altamente calificado que integra parte del Ecosistema Agtech.</p>
        </div>
        <div className='container-integrantes-equipo'>
        <IntEquipo 
            img={fotoRegina} 
            name="Regina Aguilera" 
            job="Master en Agrometeorología"/>
          <IntEquipo 
            img={fotoEva} 
            name="Eva Maure" 
            job="Ciencias de Datos"/>
          <IntEquipo 
            img={fotoVane} 
            name="Vanesa Hidalgo" 
            job="Agronegocios"/>
        </div>
        <img className="imagen-deco-equipo"src={maiz} alt="Imagen quienes somos"/>
    </div>
  )
}

export default Equipo
