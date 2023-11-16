import React from 'react'
import Footer from '../components/Footer/Footer'
import Historia from '../components/Historia/Historia'
import VideoContainer from '../components/VideoContainer/VideoContainer'
import MisionVision from '../components/MisionVision/MisionVision'
import Equipo from '../components/Equipo/Equipo'

function QuienesSomosScreen() {
  return (
    <>
        <Historia></Historia>
        <VideoContainer></VideoContainer>
        <MisionVision></MisionVision>
        <Equipo></Equipo>
        <Footer/>
    </>
  )
}

export default QuienesSomosScreen
