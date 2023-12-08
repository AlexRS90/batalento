import React from 'react';
import { EQUIPO } from '../../data';

function Equipo() {
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
  return (
    <div className="equipo-containter">
      <div className="team-description">
        <p className="card-text-title">{title}</p>
        <p className="card-text-subtitle">{subject}</p>
      </div>
      <div className="team-member">
        <div className="ceo-container">
          <img src={img} alt={`${id + ceo}`} />
          <div className="ceo-title">
            <p className="card-text-subtitle">{ceo}</p>
            <p className="regular-card-text">{position}</p>
          </div>
        </div>
        <div className="ceo-resume">
          <p className="regular-card-text">{text1}</p>
          <p className="regular-card-text">{text2}</p>
          <p className="regular-card-text">{text3}</p>
          <p className="regular-card-text pumas">{text4}</p>
        </div>
      </div>
    </div>
  );
}

export default Equipo;
