import React from 'react';
import { HOME, OFFICE_CARDS } from '../../data';
import CardEstamosListos from '../CardEstamosListos/CardEstamosListos';
import ArrowsNavigation from '../ArrowsNavigation/ArrowsNavigation';

function Home({ language }) {
  const [card, setCard] = React.useState(0);
  const maxCards = OFFICE_CARDS.length - 1;
  const currentCard = OFFICE_CARDS[card];
  const description = language === 'ENGLISH' ? HOME[0] : HOME[1];

  function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {/* eslint-disable-line */
      const windowHeght = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeght - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }

  window.addEventListener('scroll', reveal);

  return (
    <div className="home-wrapper">
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
        <div className="square-card reveal">
          <ArrowsNavigation card={card} setCard={setCard} maxCards={maxCards} section="home" />
          <CardEstamosListos currentCard={currentCard} card={card} />
        </div>
      </div>
    </div>
  );
}

export default Home;
