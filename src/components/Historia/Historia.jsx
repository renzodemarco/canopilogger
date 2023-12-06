import React from 'react'
import img from '../../assets/historia.png'
import './Historia.css'

function Historia() {
  return (

    <div className='container-historia'>
        <div className="container-canopilogger">
            <div className='container-img-historia'>
                <img src={img} alt="Imagen quienes somos"/>
            </div>
            <div className='container-text-canopilogger'>
                <div className="container-titulo-canopilogger">
                    <h2>¿Por qué CANOPILOGGER?</h2>
                </div>
                <div className="container-subtitulo-canopilogger">
                    <p>Nuestra identidad surge de la unión de la palabra CANOPIA, que es el conjunto verde de la planta de vid, lo que en los árboles se denomina copa y LOGGER, que se refiere al registrador.</p>
                </div>
            </div>
        </div>
        <div className='container-ntra-historia'>
                <h2>Nuestra historia</h2>
                <p>Nuestro recorrido comienza en el ámbito de la docencia e investigación generando conocimiento y desarrollos tecnológicos para la medición de variables agrometeorológicas a campo. Canopilogger nace de la convicción de que es posible aportar valor al sector agrícola mediante <span>trazabilidad meteorológica con sostenibilidad ambiental</span>.</p>
         </div>
    </div>
  )
}

export default Historia
