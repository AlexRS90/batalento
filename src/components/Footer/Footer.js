import React from 'react';
import { FOOTER } from '../../data';

function Footer({ language }) {
  const {
    logo,
    fbLogo,
    inLogo,
    horario,
    mail,
    telefono,
    fbURL,
    inURL,
  } = FOOTER[language === 'ENGLISH' ? 0 : 1];

  return (
    <div className="footer-container">
      <div className="footer-data">
        <img src={logo} alt="Abril Barrientos" />
        <p className="texto-footer">
          {language === 'ENGLISH' ? 'Horarios:' : 'Working Hours:'}
          <br />
          {horario}
        </p>
        <p className="texto-footer">
          Mail:
          <br />
          {mail}
        </p>
        <p className="texto-footer">
          WhatsApp:
          <br />
          {telefono}
        </p>
      </div>
      <div className="social-media">
        <a
          className="footer-FB"
          href={fbURL}
          target="_blank"
          rel="noreferrer"
        >
          <img src={fbLogo} alt="Open Facebook" />
        </a>
        <a
          className="footer-IN"
          href={inURL}
          target="_blank"
          rel="noreferrer"
        >
          <img src={inLogo} alt="Open LinkedIn" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
