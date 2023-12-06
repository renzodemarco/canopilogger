import React from 'react'
import { Link } from 'react-router-dom';
import img from '../../assets/image-14.png'
import './QuienesSomos.css'

function QuienesSomos() {
  return (
    <div className="container-quienessomos">
      <div className='container-img-quienessomos'>
        <img src={img} alt='imagen ilustrtiva'></img>
      </div>
      <div className='container-text-quienessomos'>
        <div className="container-titulo-quienessomos">
            <h2>¿Quiénes somos?</h2>
        </div>
        <div className="container-subtitulo-quienessomos">
            <p>Somos una empresa que brinda servicios agrometeorológicos de vanguardia que permiten optimizar tus operaciones. Transformamos datos de alta calidad en información valiosa para tomar decisiones productivas y minimizar pérdidas debido al cambio climático.</p>
        </div>
        <button className="button-quienessomos">
          <Link to="/quienes-somos">Conocer más</Link>
        </button>
      </div>
    </div>
  )
}

export default QuienesSomos
