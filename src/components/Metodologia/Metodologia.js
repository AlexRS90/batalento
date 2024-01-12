import React from 'react';
import { METODOLOGIA } from '../../data';

function Metodologia({ language }) {
  const [activeClass, setActiveClass] = React.useState(false);
  const {
    title,
    subtitle,
    cards,
    cierre,
  } = METODOLOGIA[0];
  const setId = language === 'ESPAÑOL' ? 'metodology' : 'metodologia';
  const hiddenDelay = activeClass ? 'active1' : 'hidden';

  function reveal() {
    const reveals = document.querySelectorAll('.reveal-met');
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
    <section className="met-container parallax-sections" id={setId}>
      <div className="met-title">
        <p className="titulo-secciones">{title}</p>
        <p className="subtitulo-secciones">{subtitle}</p>
      </div>
      <div className="met-cards reveal-met">
        {cards.map(({ id, title, info }) => (
          <div className={`met-card-wrapper reveal-card-${id} ${hiddenDelay}`} key={Math.random()}>
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
    </section>
  );
}

export default Metodologia;
