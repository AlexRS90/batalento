import React from 'react';

function CardEstamosListos({ currentCard, card }) {
  return (
    <>
      {card === 0 && (
        <div key={currentCard.id} className="square-wrapper">
          <div className="title-card">
            {currentCard.title.split('?').map((title) => (
              <p key={Math.random()} className="titulo-secciones">{title}</p>
            ))}
          </div>
          <div className="card-text content-card">
            {currentCard.text_info.split('?').map((text) => (
              <p key={Math.random()} className="texto-general">
                {text}
              </p>
            ))}
          </div>
        </div>
      )}
      {card === 1 && (
        <div key={currentCard.id} className="square-wrapper">
          <div className="title-card">
            {currentCard.title.split('?').map((title, id) => (
              <p
                key={Math.random()}
                className={id === 0 ? 'titulo-secciones' : 'texto-general'}
              >
                {title}
              </p>
            ))}
          </div>
          <div className="bullet-container content-card">
            {currentCard.text_info.split('?').map((text) => (
              <div key={Math.random()}>
                {text.split('¿').map((info, id) => (
                  <p
                    key={Math.random()}
                    className={id === 0 ? 'titulo-texto' : 'texto-general'}
                  >
                    {info}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
      {card === 2 && (
        <div key={currentCard.id} className="square-wrapper">
          <div className="title-card">
            <p className="titulo-secciones">{currentCard.title}</p>
          </div>
          <div className="content-card">
            <p className="titulo-texto">{currentCard.subtitle}</p>
            <ul className="industries-list">
              {currentCard.text_info.split('¿').map((info) => (
                <li key={Math.random()} className="texto-general">
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default CardEstamosListos;
