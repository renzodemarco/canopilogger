import React from "react";
import './Footer.css'
import canopiLogo from '../../assets/logo-centrado.svg'
import iconIg from '../../assets/icon-ig.svg'
import iconFb from '../../assets/icon-fb.svg'
import iconLn from '../../assets/icon-ln.svg'
import iconYt from '../../assets/icon-yt.svg'
import rectangulo from '../../assets/rectFooter.png'

function Footer() {
    return (
        <div className="container-footer">
            <div className="container-footer-left">
                <img src={rectangulo} alt="rectangulo verde"/>
                <div className="container-logo">
                    <img className="img-canopilogo" src={canopiLogo} alt="logo"/>
                    <h2>¡SEGUINOS!</h2>
                </div>
            </div>
            <div className="container-footer-right">
                <a href='https://www.facebook.com/canopilogger' target="_blank" rel="noreferrer">
                    <img src={iconFb} alt="enlace facebook"/>
                </a>
                <a href='https://www.instagram.com/canopilogger/' target="_blank" rel="noreferrer">
                    <img src={iconIg} alt="enlace instagram"/>
                </a>
                <a href='https://www.linkedin.com/in/servicios-meteorol%C3%B3gicos-para-el-agro-y-el-ambiente-446908259/' target="_blank" rel="noreferrer">
                    <img src={iconLn} alt="enlace linkedin"/>
                </a>
                <a href='http://www.youtube.com/' target="_blank" rel="noreferrer">
                    <img src={iconYt} alt="enlace youtube"/>
                </a>
            </div>
        </div>
    )
}

export default Footer