import React from "react";
import Presentacion from "../components/Presentacion/Presentacion";
import Servicios from "../components/Servicios/Servicios";
import QuienesSomos from "../components/QuienesSomos/QuienesSomos";
import VideoContainer from "../components/VideoContainer/VideoContainer";
import Footer from "../components/Footer/Footer";

function Inicio() {
  return (
    <>
      <main>
        <Presentacion />
        <Servicios />
        <QuienesSomos />
        <VideoContainer />
      </main>
      <Footer />
    </>
  );
}

export default Inicio;
