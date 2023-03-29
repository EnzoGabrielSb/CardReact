import React from "react";
import "../Styles/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        src={require(`../images/${props.imagen}.png`)}
        alt="FotoPerfil"
        className="classImage"
      />
      <div className="carta-presentacion">
        <p className="titulo-carta">
          <strong>{props.name}</strong> en {props.pais}
        </p>
        <p className="subtitulo-carta">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="informacion-carta">{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonio;
