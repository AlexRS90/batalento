import React from 'react';
import { HOME, OFFICE_CARDS } from '../../data';
import CardEstamosListos from '../CardEstamosListos/CardEstamosListos';
import ArrowsNavigation from '../ArrowsNavigation/ArrowsNavigation';

function Home({ language }) {
  const [card, setCard] = React.useState(0);
  const [activeClass, setActiveClass] = React.useState(false);
  const maxCards = OFFICE_CARDS.length - 1;
  const currentCard = OFFICE_CARDS[card];
  const description = language === 'ENGLISH' ? HOME[0] : HOME[1];

  function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {/* eslint-disable-line */
      const windowHeight = window.innerHeight;/* eslint-disable-line */
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
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
        <div className="square-card revelate">
          <ArrowsNavigation card={card} setCard={setCard} maxCards={maxCards} section="home" />
          <CardEstamosListos currentCard={currentCard} card={card} activeClass={activeClass} />
        </div>
      </div>
    </div>
  );
}

export default Home;
