import React from 'react';
import Servicios from '../Servicios/Servicios';
import Equipo from '../Equipo/Equipo';
import Metodologia from '../Metodologia/Metodologia';
import Contacto from '../Contacto/Contacto';

function Parallax({ language }) {
  return (
    <div className="parallax-wrapper">
      <Servicios language={language} />
      <Equipo language={language} />
      <Metodologia language={language} />
      <Contacto language={language} />
    </div>
  );
}

export default Parallax;
