import React from 'react';
import { FOOTER } from '../../data';

function Footer() {
  const {
    logo,
    fbLogo,
    inLogo,
    horario,
    mail,
    telefono,
    fbURL,
    inURL,
  } = FOOTER[0];

  return (
    <div className="footer-container">
      <div className="footer-data">
        <img src={logo} alt="Abril Barrientos" />
        <p className="texto-footer">
          Horarios:
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
          <img src={fbLogo} />
        </a>
        <a
          className="footer-IN"
          href={inURL}
          target="_blank"
          rel="noreferrer"
        >
          <img src={inLogo} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
