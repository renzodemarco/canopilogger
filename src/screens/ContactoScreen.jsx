import React from 'react'
import Clientes from '../components/Clientes/Clientes'
import Contacto from '../components/Contacto/Contacto'
import footer from '../assets/footerContacto.png'

function ContactoScreen() {
  return (
    <div>
        <Clientes/>
        <Contacto/>
        <img className="img-footer" src={footer} alt="rectangulo verde"/>
    </div>
  )
}

export default ContactoScreen