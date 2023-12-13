import React from 'react';
import { SERVICES_CARDS } from '../../data';
import ArrowsNavigation from '../ArrowsNavigation/ArrowsNavigation';

function Servicios() {
  const [card, setCard] = React.useState(0);
  const maxCards = SERVICES_CARDS.length - 1;

  return (
    <div className="services-container" id="servicios">
      <div className="services">
        <p className="titulo-secciones">Servicios</p>
        <p className="subtitulo-secciones">Explora nuestros servicios</p>
      </div>
      <div className="services-cards" />
      <div className="card-position-absolute">
        <div className="services-info-container">
          <div className="services-img-container">
            <img src={SERVICES_CARDS[card].img} alt={SERVICES_CARDS[card].title} />
          </div>
          <div className="services-info-wrapper">
            <ArrowsNavigation card={card} setCard={setCard} maxCards={maxCards} section="servicios" />
            <div>
              <p className="titulo-texto">{SERVICES_CARDS[card].title}</p>
              <ul className={card === 0 ? 'lower-alpha' : 'bullet-points'}>
                {SERVICES_CARDS[card].info.split('?').map((bullets) => (
                  <li key={Math.random()} className="texto-general">{bullets}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <a
          href="https://www.google.com"
          target="_blank"
          className="primary-button"
          rel="noreferrer"
        >
          VER MÁS
        </a>
      </div>
    </div>
  );
}

export default Servicios;
