import React from 'react';
import Servicios from '../Servicios/Servicios';
import Equipo from '../Equipo/Equipo';
import Metodologia from '../Metodologia/Metodologia';
import Contacto from '../Contacto/Contacto';

function Parallax() {
  return (
    <div>
      <Servicios />
      <Equipo />
      <Metodologia />
      <Contacto />
    </div>
  );
}

export default Parallax;
