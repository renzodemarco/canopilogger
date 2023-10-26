import React from "react";
import "./EnumServicios.css";

function Servicios({img, title, text}) {
    return (
        <div className="container-items-servicios">
            <div className="container-img-item-servicios">
                <img src={img}></img>
            </div>
            <h4 className="container-title-item-servicios">
                {title}
            </h4>
            <div className="container-text-item-servicios">
                {text}
            </div>
        </div>
    );
}

export default Servicios;
