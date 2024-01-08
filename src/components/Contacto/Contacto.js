import React from 'react';
import Formulario from '../Formulario/Formulario';

function Contacto({ language }) {
  const setId = language === 'ESPAÑOL' ? 'contact' : 'contacto';
  return (
    <section className="contacto-container" id={setId}>
      <div className="contacto-titulo">
        <p className="titulo-secciones">Contacto</p>
        <p className="subtitulo-secciones">Escríbenos y nos pondremos en contacto a la brevedad.</p>
      </div>
      <div className="forms-wrapper">
        <Formulario empleo="Aspirante" />
        <Formulario empleo="Reclutador" />
      </div>
      <a
        href="https://www.linkedin.com/company/abril-barrientos-talent-expert/jobs/?viewAsMember=true"
        target="_blank"
        rel="noreferrer"
        className="primary-button"
      >
        VER VACANTES
      </a>
    </section>
  );
}

export default Contacto;
