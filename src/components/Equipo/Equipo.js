import React from 'react';
import { EQUIPO } from '../../data';

function Equipo({ language }) {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const ref = React.useRef(null);
  const hiddenDelay = isIntersecting ? 'active' : 'hidden';
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
    <section className="equipo-wrapper" id={setId}>
      <div className="equipo-containter" ref={ref}>
        <div className="team-description">
          <div className={`appear-team-title ${hiddenDelay}`}>
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
