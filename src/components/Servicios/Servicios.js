import React from 'react';
import { SERVICES_CARDS } from '../../data';
import ArrowsNavigation from '../ArrowsNavigation/ArrowsNavigation';

function Servicios({ language }) {
  const [card, setCard] = React.useState(0);
  const [activeClass, setActiveClass] = React.useState(false);
  const hiddenDelay = activeClass ? 'service-img active' : 'service-img hidden'; /* eslint-disable-line */
  const maxCards = SERVICES_CARDS.length - 1;
  const setId = language === 'ESPAÑOL' ? 'services' : 'servicios';

  function reveal() {
    const reveals = document.querySelectorAll('.reveal-services');
    for (let i = 0; i < reveals.length; i++) { /* eslint-disable-line */
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 500;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
        setActiveClass(true);
      } else {
        reveals[i].classList.remove('active');
        setActiveClass(false);
      }
    }
  }
  window.addEventListener('scroll', reveal);
  return (
    <section className="services-container parallax-sections" id={setId}>
      <div className="services-cards">
        <p className="titulo-secciones">Servicios</p>
        <p className="subtitulo-secciones">Explora nuestros servicios</p>
      </div>
      <div className="card-position-absolute reveal-services">
        <div className="services-info-container">
          <div className="services-img-container">
            <div className="mobil-arrows">
              <ArrowsNavigation card={card} setCard={setCard} maxCards={maxCards} section="servicios" />
            </div>
            <img
              className={`services-img ${hiddenDelay}`}
              src={SERVICES_CARDS[card].img}
              alt={SERVICES_CARDS[card].title}
            />
          </div>
          <div className="services-info-wrapper">
            <div className="desktop-arrows">
              <ArrowsNavigation card={card} setCard={setCard} maxCards={maxCards} section="servicios" />
            </div>
            <div className="services-bullets-wrapper">
              <div className={`${hiddenDelay} services-info`}>
                <p className="titulo-texto">{SERVICES_CARDS[card].title}</p>
                <ul className={card === 0 ? 'lower-alpha' : 'bullet-points'}>
                  {SERVICES_CARDS[card].info.split('?').map((bullets) => (
                    <li key={Math.random()} className="texto-general">{bullets}</li>
                  ))}
                </ul>
              </div>
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
