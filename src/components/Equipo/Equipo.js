import React from 'react';
import { EQUIPO } from '../../data';

function Equipo({ language }) {
  const [activeClass, setActiveClass] = React.useState(false);
  const hiddenDelay = activeClass ? 'active' : 'hidden';
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

  function reveal() {
    const reveals = document.querySelectorAll('.reveal-team');
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
    <section className="equipo-wrapper" id={setId}>
      <div className="equipo-containter reveal-team">
        <div className="team-description">
          <div className={`${hiddenDelay} team-description-hidden`}>
            <p className="titulo-secciones">{title}</p>
            <p className="subtitulo-secciones">{subject}</p>
          </div>
        </div>
        <div className="team-member">
          <div className={`ceo-container ${hiddenDelay}`}>
            <img src={img} alt={`${id + ceo}`} />
            <div className="ceo-title">
              <p className="titulo-texto">{ceo}</p>
              <p className="texto-general">{position}</p>
            </div>
          </div>
          <div className={`ceo-resume ${hiddenDelay}`}>
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
