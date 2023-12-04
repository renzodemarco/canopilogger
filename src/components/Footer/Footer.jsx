import React, { useState, useEffect } from "react";
import "./Footer.css";
import canopiLogo from "../../assets/logo-centrado.svg";
import logoRedondo from "../../assets/logoRedondo.png";
import iconIg from "../../assets/icon-ig.svg";
import iconFb from "../../assets/icon-fb.svg";
import iconLn from "../../assets/icon-ln.svg";
import rectangulo from "../../assets/rectFooter.png";

function Footer() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [imagenSrc, setImagenSrc] = useState("ruta-a-tu-imagen-normal");

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth > 580) {
            setImagenSrc(canopiLogo);
        } else {
            setImagenSrc(logoRedondo);
        }
    }, [windowWidth]);

    return (
        <div className="container-footer">
            <div className="container-footer-left">
                <img
                    className="img-deco-rectangulo"
                    src={rectangulo}
                    alt="rectangulo verde"
                />
                <div className="container-logo">
                    <img className="img-canopilogo" src={imagenSrc} alt="logo" />
                    <h2>¡SEGUINOS!</h2>
                </div>
            </div>
            <div className="container-footer-right">
                <a
                    href="https://www.facebook.com/canopilogger"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={iconFb} alt="enlace facebook" />
                </a>
                <a
                    href="https://www.instagram.com/canopilogger/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={iconIg} alt="enlace instagram" />
                </a>
                <a
                    href="https://www.linkedin.com/in/servicios-meteorol%C3%B3gicos-para-el-agro-y-el-ambiente-446908259/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={iconLn} alt="enlace linkedin" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
