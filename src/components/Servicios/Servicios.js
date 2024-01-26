import React from 'react';
import { SERVICES_CARDS } from '../../data';
import ArrowsNavigation from '../ArrowsNavigation/ArrowsNavigation';

function Servicios({ language }) {
  const [card, setCard] = React.useState(0);
  const ref = React.useRef(null);
  const [activeClass, setActiveClass] = React.useState(false);
  const hiddenDelay = activeClass ? 'active' : 'hidden';
  const maxCards = SERVICES_CARDS.length - 1;
  const setId = language === 'ESPAÑOL' ? 'services' : 'servicios';
  const appearOptions = {
    rootMargin: '0px 0px -100px 0px',
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setActiveClass(entry.isIntersecting);
      },
      appearOptions,
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [activeClass]);

  React.useEffect(() => {
    if (activeClass) {
      ref.current.classList.add('active');
    } else {
      ref.current.classList.remove('active');
    }
  }, [activeClass]);

  return (
    <section className="services-container" id={setId}>
      <div className="services-wrapper">
        <div className="services-cards">
          <p className="titulo-secciones">Servicios</p>
          <p className="subtitulo-secciones">Explora nuestros servicios</p>
        </div>
        <div className="card-position-absolute" ref={ref}>
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
                  className={`primary-button mobil-service-button ${hiddenDelay}`}
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
      </div>
    </section>
  );
}

export default Servicios;
