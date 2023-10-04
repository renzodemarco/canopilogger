import React from 'react'
import Presentacion from '../components/Presentacion/Presentacion'
import Servicios from '../components/Servicios/Servicios'
import QuienesSomos from '../components/QuienesSomos/QuienesSomos'
import Equipo from '../components/Equipo/Equipo'

function Inicio() {
  return (
    <div>
        <Presentacion/>
        <Servicios/>
        <QuienesSomos/>
        <Equipo/>
    </div>
  )
}

export default Inicio
