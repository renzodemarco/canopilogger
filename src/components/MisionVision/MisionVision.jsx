import React from 'react'
import misionvision from '../../assets/misionvision.png'
import rectangulo from '../../assets/rectQuienesSomos.png'
import './MisionVision.css'

function MisionVision() {
  return (
        <div className="container-misionvision" id="mision-y-vision">
            <img className="imagen-rectangulo" src={rectangulo} alt="Rectangulo verde"/>
            <img className="imagen-misionvision" src={misionvision} alt="Decorativo" />

            <div className="misionvision">
                <div className="container-texto">
                    <h2>MISIÓN</h2>
                    <p>Transformar la agricultura con conocimiento microclimático sólido y preciso para la toma de decisiones.</p>
                </div>
                <div className="container-texto">
                    <h2>VISIÓN</h2>
                    <p>Ser referentes en el análisis de datos agrometeorológicos, brindando soluciones prácticas para la agricultura sostenible y climáticamente inteligente.</p>
                </div>
            </div>
        </div>

    
  )
}

export default MisionVision
