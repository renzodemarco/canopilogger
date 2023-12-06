import React from "react";
import Footer from "../components/Footer/Footer";
import Historia from "../components/Historia/Historia";
import VideoContainer from "../components/VideoContainer/VideoContainer";
import MisionVision from "../components/MisionVision/MisionVision";
import Equipo from "../components/Equipo/Equipo";

function QuienesSomosScreen() {
  return (
    <>
      <main>
        <Historia></Historia>
        <VideoContainer></VideoContainer>
        <MisionVision></MisionVision>
        <Equipo></Equipo>
      </main>
      <Footer />
    </>
  );
}

export default QuienesSomosScreen;
