import React from 'react';
import { METODOLOGIA } from '../../data';

function Metodologia({ language }) {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const ref = React.useRef(null);
  const hiddenDelay = isIntersecting ? 'active' : 'hidden';
  const {
    title,
    subtitle,
    cards,
    cierre,
  } = METODOLOGIA[language === 'ENGLISH' ? 0 : 1][0];
  const setId = language === 'ESPAÑOL' ? 'methodology' : 'metodologia';
  const appearOptions = {
    rootMargin: '0px 0px -100px 0px',
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      appearOptions,
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  React.useEffect(() => {
    if (isIntersecting) {
      ref.current.classList.add('active');
    } else {
      ref.current.classList.remove('active');
    }
  }, [isIntersecting]);

  return (
    <section className="met-container" id={setId}>
      <div className="metodology-wrapper">
        <div className="met-title">
          <p className="titulo-secciones">{title}</p>
          <p className="subtitulo-secciones">{subtitle}</p>
        </div>
        <div className={`met-cards ${hiddenDelay}`} ref={ref}>
          {cards.map(({ id, title, info }) => (
            <div className={`met-card-wrapper reveal-card-${id}`} key={Math.random()}>
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
