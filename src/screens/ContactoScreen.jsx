import React from 'react'
import Clientes from '../components/Clientes/Clientes'
import Contacto from '../components/Contacto/Contacto'
import footer from '../assets/footerContacto.png'
import Footer from '../components/Footer/Footer'

function ContactoScreen() {
  return (
    <>
      <main>
          <Clientes/>
          <Contacto/>
          <img className="img-footer" src={footer} alt="rectangulo verde"/>
      </main>
      <div className="footer-responsive">
        <Footer/>
      </div>
    </>
  )
}

export default ContactoScreen
