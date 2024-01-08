import React from 'react';
import { SERVICES_CARDS } from '../../data';
import ArrowsNavigation from '../ArrowsNavigation/ArrowsNavigation';

function Servicios({ language }) {
  const [card, setCard] = React.useState(0);
  const maxCards = SERVICES_CARDS.length - 1;
  const setId = language === 'ESPAÑOL' ? 'services' : 'servicios';
  return (
    <section className="services-container parallax-sections" id={setId}>
      <div className="services-cards">
        <p className="titulo-secciones">Servicios</p>
        <p className="subtitulo-secciones">Explora nuestros servicios</p>
      </div>
      <div className="card-position-absolute">
        <div className="services-info-container">
          <div className="services-img-container">
            <div className="mobil-arrows">
              <ArrowsNavigation card={card} setCard={setCard} maxCards={maxCards} section="servicios" />
            </div>
            <img src={SERVICES_CARDS[card].img} alt={SERVICES_CARDS[card].title} />
          </div>
          <div className="services-info-wrapper">
            <div className="desktop-arrows">
              <ArrowsNavigation card={card} setCard={setCard} maxCards={maxCards} section="servicios" />
            </div>
            <div className="services-bullets-wrapper">
              <p className="titulo-texto">{SERVICES_CARDS[card].title}</p>
              <ul className={card === 0 ? 'lower-alpha' : 'bullet-points'}>
                {SERVICES_CARDS[card].info.split('?').map((bullets) => (
                  <li key={Math.random()} className="texto-general">{bullets}</li>
                ))}
              </ul>
              <a
                href="https://www.google.com"
                target="_blank"
                className="primary-button mobil-service-button"
                rel="noreferrer"
              >
                VER MÁS
              </a>
            </div>
          </div>
        </div>
        <a
          href="https://www.google.com"
          target="_blank"
          className="primary-button desktop-service-button"
          rel="noreferrer"
        >
          VER MÁS
        </a>
      </div>
    </section>
  );
}

export default Servicios;
