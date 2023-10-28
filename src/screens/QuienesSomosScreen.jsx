import React from 'react'
import Footer from '../components/Footer/Footer'
import Historia from '../components/Historia/Historia'
import VideoContainer from '../components/VideoContainer/VideoContainer'
import MisionVision from '../components/MisionVision/MisionVision'
import Equipo from '../components/Equipo/Equipo'

function QuienesSomosScreen() {
  return (
    <div>
        <Historia></Historia>
        <VideoContainer></VideoContainer>
        <MisionVision></MisionVision>
        <Equipo></Equipo>
        <Footer/>
    </div>
  )
}

export default QuienesSomosScreen
