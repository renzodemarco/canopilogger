import React from "react";
import iconIg from '../../assets/icon-ig.svg'
import iconFb from '../../assets/icon-fb.svg'
import iconLn from '../../assets/icon-ln.svg'
import rectangulo from '../../assets/rectContacto.png'
import deco from '../../assets/decoContacto.png'
import logo from '../../assets/logoRedondo.png'
import "./Contacto.css";

function Contacto() {
    return (
        <div className="container-contacto">
            <div className="left">
                <img className="img-rectangulo" src={rectangulo} alt="rectangulo verde"/>
                <img className="img-vid" src={deco} alt="ilustracion vid"/>
                <img className="img-logo" src={logo} alt="logo Canopi"/>
            </div>
            <div className="right">
                <h4>Contáctanos hoy</h4>
                <p className="texto1">Escríbenos a:</p>
                <p className="texto2">vcanopilogger@gmail.com</p>
                <div className="container-redes">
                    <a href='https://www.facebook.com/canopilogger' target="_blank" rel="noreferrer">
                        <img src={iconFb} alt="enlace facebook"/>
                    </a>
                    <a href='https://www.instagram.com/canopilogger/' target="_blank" rel="noreferrer">
                        <img src={iconIg} alt="enlace instagram"/>
                    </a>
                    <a href='https://www.linkedin.com/in/servicios-meteorol%C3%B3gicos-para-el-agro-y-el-ambiente-446908259/' target="_blank" rel="noreferrer">
                        <img src={iconLn} alt="enlace linkedin"/>
                    </a>
                </div>
            </div>
        </div>

    );
}

export default Contacto;