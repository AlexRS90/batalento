import React from 'react';

function ArrowsNavigation({ card, setCard, maxCards }) {
  return (
    <div className="arrow-buttons">
      <button type="button" onClick={() => setCard(card - 1)} disabled={card === 0} className={card === 0 ? 'hidden-arrow' : undefined}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="left-arrow">
          <path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z" />
        </svg>
      </button>
      <button type="button" onClick={() => setCard(card + 1)} disabled={card === maxCards} className={card === 2 ? 'hidden-arrow' : undefined}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="right-arrow">
          <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z" />
        </svg>
      </button>
    </div>
  );
}

export default ArrowsNavigation;
