import React from 'react';
import { EQUIPO } from '../../data';

function Equipo({ language }) {
  const setId = language === 'ESPAÑOL' ? 'team' : 'equipo';
  const {
    id,
    title,
    subject,
    ceo,
    position,
    resume,
    img,
  } = EQUIPO[0];
  const {
    text1,
    text2,
    text3,
    text4,
  } = resume;

  return (
    <section className="equipo-wrapper" id={setId}>
      <div className="equipo-containter">
        <div className="team-description">
          <div>
            <p className="titulo-secciones">{title}</p>
            <p className="subtitulo-secciones">{subject}</p>
          </div>
        </div>
        <div className="team-member">
          <div className="ceo-container">
            <img src={img} alt={`${id + ceo}`} />
            <div className="ceo-title">
              <p className="titulo-texto">{ceo}</p>
              <p className="texto-general">{position}</p>
            </div>
          </div>
          <div className="ceo-resume">
            <p className="texto-general">{text1}</p>
            <p className="texto-general">{text2}</p>
            <p className="texto-general">{text3}</p>
            <p className="texto-general white-space">{text4}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Equipo;
