import React from 'react';
import { SERVICES_CARDS } from '../../data';
import ArrowsNavigation from '../ArrowsNavigation/ArrowsNavigation';

function Servicios() {
  const [card, setCard] = React.useState(0);
  const maxCards = SERVICES_CARDS.length - 1;

  return (
    <div className="services-container">
      <div className="services">
        <p className="card-text-title">Servicios</p>
        <p className="card-text-subtitle">Explora nuestros servicios</p>
      </div>
      <div className="services-cards" />
      <div className="services-info-container">
        <div className="services-img-container">
          <img src={SERVICES_CARDS[card].img} alt={SERVICES_CARDS[card].title} />
        </div>
        <div className="services-info-wrapper">
          <ArrowsNavigation card={card} setCard={setCard} maxCards={maxCards} />
          <p className="card-text-subtitle">{SERVICES_CARDS[card].title}</p>
          <ul className={card === 0 ? 'lower-alpha' : 'bullet-points'}>
            {SERVICES_CARDS[card].info.split('?').map((bullets) => (
              <li key={Math.random()} className="regular-card-text">{bullets}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
