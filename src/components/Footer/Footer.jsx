import React from "react";
import './Footer.css'
import canopiLogo from '../../assets/logo-centrado.svg'
import iconIg from '../../assets/icon-ig.svg'
import iconFb from '../../assets/icon-fb.svg'
import iconLn from '../../assets/icon-ln.svg'
import iconYt from '../../assets/icon-yt.svg'

function Footer() {
    return (
        <div className="container-footer">
            <div className="container-footer-sup">
                <div className="container-footer-sup-left">
                    <img src={canopiLogo}></img>
                    <h2>¡SEGUINOS!</h2>
                </div>
                <div className="container-footer-sup-right">
                    <a href='http://www.facebook.com/' target="_blank">
                        <img src={iconFb}/>
                    </a>
                    <a href='http://www.instagram.com/' target="_blank">
                        <img src={iconIg}/>
                    </a>
                    <a href='http://www.linkedin.com/' target="_blank">
                        <img src={iconLn}/>
                    </a>
                    <a href='http://www.youtube.com/' target="_blank">
                        <img src={iconYt}/>
                    </a>
                </div>
            </div>
            <div className="container-footer-inf">
                <div className="container-footer-nav">
                    <ul>
                        <li>INICIO</li>
                        <li>QUIÉNES SOMOS</li>
                        <li>SERVICIOS</li>
                        <li>CONTACTO</li>
                    </ul>
                </div>
                <div className="container-footer-text">
                    <p>Copyright © 2023 CanopiLogger | All Rights Reserved | <span>Terms and Conditions</span> | <span>Privacy Policy</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer