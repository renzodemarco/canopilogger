import React from "react";
import "./Clientes.css";
import cliente1 from '../../assets/salentein.png'
import cliente2 from '../../assets/drupas.png'
import cliente3 from '../../assets/fepedi.png'

function Clientes() {
    return (
        <div className="container-clientes">
            <h2>CONFÍAN EN NOSOTROS</h2>
            <div className="clientes">
                <img src={cliente1} alt="Cliente Salentein"/>
                <img src={cliente2} alt="Cliente Dupras"/>
                <img src={cliente3} alt="Cliente Fepedi"/>
            </div>
        </div>
    );
}

export default Clientes;
