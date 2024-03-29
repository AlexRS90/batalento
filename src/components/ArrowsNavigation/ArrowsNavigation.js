import React from 'react';

function ArrowsNavigation({
  card,
  setCard,
  maxCards,
  section,
}) {
  const margin = section === 'home' ? 'arrows-margin-home' : 'arrows-margin-servicios';
  function carrusel(direction) {
    if (direction === 'left') {
      card === 0 ? setCard(maxCards) : setCard(card - 1); // eslint-disable-line
    } else {
      card === maxCards ? setCard(0) : setCard(card + 1); // eslint-disable-line
    }
  }
  return (
    <div className={`arrow-buttons ${margin}`}>
      <button type="button" onClick={() => carrusel('left')}> {/* eslint-disable-line */}
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" className="left-arrow">
          <path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z" />
        </svg>
      </button>
      <button type="button" onClick={() => carrusel('right')}> {/* eslint-disable-line */}
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" className="right-arrow">
          <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" />
        </svg>
      </button>
    </div>
  );
}

export default ArrowsNavigation;
