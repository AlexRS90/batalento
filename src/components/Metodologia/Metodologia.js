import React from 'react';
import { METODOLOGIA } from '../../data';

function Metodologia({ language }) {
  const {
    title,
    subtitle,
    cards,
    cierre,
  } = METODOLOGIA[0];
  const setId = language === 'ESPAÑOL' ? 'metodology' : 'metodologia';

  return (
    <section className="met-container" id={setId}>
      <div className="metodology-wrapper">
        <div className="met-title">
          <p className="titulo-secciones">{title}</p>
          <p className="subtitulo-secciones">{subtitle}</p>
        </div>
        <div className="met-cards">
          {cards.map(({ id, title, info }) => (
            <div className="met-card-wrapper" key={Math.random()}>
              <p className="titulo-texto met-card-num">{id}</p>
              <p className="titulo-texto">{title.toUpperCase()}</p>
              <ul className="met-card-list">
                {info.split('?').map((text) => (
                  <li key={Math.random()} className="texto-general">{text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="met-cierre">
          <p className="subtitulo-secciones">{cierre}</p>
        </div>
      </div>
    </section>
  );
}

export default Metodologia;
