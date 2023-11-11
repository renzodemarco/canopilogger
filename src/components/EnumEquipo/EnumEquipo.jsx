import React from "react";
import "./EnumEquipo.css";

function IntEquipo({img, name, job}) {
    return (
        <div className="container-items-integrantes">
            <div className="container-img-item-integrantes">
                <img src={img} alt="integrante del equipo"></img>
            </div>
            <h4 className="container-name-item-integrantes">
                {name}
            </h4>
            <div className="container-job-item-integrantes">
                {job}
            </div>
        </div>
    );
}

export default IntEquipo;
