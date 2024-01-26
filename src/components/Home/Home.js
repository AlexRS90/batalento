import React from 'react';
import { HOME, OFFICE_CARDS } from '../../data';
import CardEstamosListos from '../CardEstamosListos/CardEstamosListos';
import ArrowsNavigation from '../ArrowsNavigation/ArrowsNavigation';

function Home({ language }) {
  const [card, setCard] = React.useState(0);
  const [activeClass, setActiveClass] = React.useState(false);
  const ref = React.useRef(null);
  const maxCards = OFFICE_CARDS.length - 1;
  const currentCard = OFFICE_CARDS[card];
  const description = language === 'ENGLISH' ? HOME[0] : HOME[1];
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
      ref.current.classList.add('appear-on-scroll');
    } else {
      ref.current.classList.remove('appear-on-scroll');
    }
  }, [activeClass]);

  return (
    <div className="home-wrapper parallax-wrapper">
      <div className="mountains">
        <p className="subtitulo-secciones white-space">
          {description.text1}
        </p>
        <p className="subtitulo-secciones">
          {description.text2}
        </p>
        <p className="subtitulo-secciones">
          {description.text3}
        </p>
      </div>
      <div className="office">
        <div className="square-card" ref={ref}>
          <ArrowsNavigation card={card} setCard={setCard} maxCards={maxCards} section="home" />
          <CardEstamosListos currentCard={currentCard} card={card} activeClass={activeClass} />
        </div>
      </div>
    </div>
  );
}

export default Home;
