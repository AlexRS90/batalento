import React from 'react';
import Formulario from '../Formulario/Formulario';

function Contacto({ language }) {
  const setId = language === 'ESPAÑOL' ? 'contact' : 'contacto';
  const title = language === 'ESPAÑOL' ? 'Contact' : 'Contacto';
  const subTitle = language === 'ESPAÑOL' ? "If you are looking for new professional challenges or talent, write us and we'll be in touch soon." : 'Escríbenos y nos pondremos en contacto a la brevedad.';
  return (
    <section className="contacto-container" id={setId}>
      <div className="contacto-titulo">
        <p className="titulo-secciones">{title}</p>
        <p className="subtitulo-secciones">{subTitle}</p>
      </div>
      <div className="forms-wrapper">
        <Formulario language={language} contacto="Candidatos" />
        <Formulario language={language} contacto="Clientes" />
      </div>
      <a
        href="https://www.linkedin.com/company/abril-barrientos-talent-expert/jobs/?viewAsMember=true"
        target="_blank"
        rel="noreferrer"
        className="primary-button"
      >
        {language === 'ENGLISH' ? 'VER VACANTES' : 'OPEN POSITIONS'}
      </a>
    </section>
  );
}

export default Contacto;
