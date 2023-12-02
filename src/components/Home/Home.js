import React from 'react';
import { OFFICE_CARDS } from '../../data';
import SquareCard from '../SquareCard/SquareCard';

function Home() {
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
        <SquareCard>
          <button className="arrow-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="right-arrow">
              <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" />
            </svg>
          </button>
          {OFFICE_CARDS.map((element) => (
            <div key={element.id} className="square-wrapper">
              <div><p className="card-text-title">{element.title}</p></div>
              <div className="card-text">
                {element.text_info.split('.').map((text) => (
                  <p key={Math.random()}>
                    {text}
                    .
                  </p>
                ))}
              </div>
            </div>
          ))}
        </SquareCard>
      </section>
    </div>
  );
}

export default Home;
