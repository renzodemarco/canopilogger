import React from 'react'
import maiz from '../../assets/maiz-abajo.png'
import './Equipo.css'

function Equipo() {
  return (
    <div className="container-equipo">
        <div className="container-texto-equipo">
            <h2>Conoce nuestro equipo</h2>
            <p>Nos comprometemos a ofrecer servicios de la más alta calidad, respaldados por un equipo <span class="negrita">altamente calificado que integra parte del Ecosistema Agtech</span>.</p>
        </div>
        <img className="imagen-deco-equipo"src={maiz} alt="Imagen quienes somos"/>
    </div>
  )
}

export default Equipo
