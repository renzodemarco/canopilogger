import React from 'react'
import Presentacion from '../components/Presentacion/Presentacion'
import Servicios from '../components/Servicios/Servicios'
import QuienesSomos from '../components/QuienesSomos/QuienesSomos'
import VideoContainer from '../components/VideoContainer/VideoContainer'
import Footer from '../components/Footer/Footer'

function Inicio() {
  return (
    <div className='inicio-container'>
        <Presentacion/>
        <Servicios/>
        <QuienesSomos/>
        <VideoContainer/>
        <Footer/>
    </div>
  )
}

export default Inicio
