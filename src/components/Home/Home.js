import React from 'react';
import { OFFICE_CARDS } from '../../data';
import CardEstamosListos from '../CardEstamosListos/CardEstamosListos';
import ArrowsNavigation from '../ArrowsNavigation/ArrowsNavigation';

function Home() {
  const [card, setCard] = React.useState(0);
  const maxCards = OFFICE_CARDS.length - 1;
  const currentCard = OFFICE_CARDS[card];

  return (
    <div className="home-wrapper">
      <section className="mountains">
        <p>
          Somos una firma de consultoría de Talento en
          donde consideramos a las personas como la base
          fundamental para conducir a una organización a
          la excelencia y al éxito.
        </p>
      </section>
      <section className="office">
        <div className="square-card">
          <ArrowsNavigation card={card} setCard={setCard} maxCards={maxCards} />
          <CardEstamosListos currentCard={currentCard} card={card} />
        </div>
      </section>
    </div>
  );
}

export default Home;
