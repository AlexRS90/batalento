import React from 'react';
import Formulario from '../Formulario/Formulario';

function Contacto() {
  return (
    <div className="contacto-container">
      <div className="contacto-titulo">
        <p className="titulo-secciones">Contacto</p>
        <p className="subtitulo-secciones">Escribenos y con gusto nos ponemos en contacto</p>
      </div>
      <div className="forms-wrapper">
        <Formulario empleo="Aspirante" />
        <Formulario empleo="Reclutador" />
      </div>
    </div>
  );
}

export default Contacto;
