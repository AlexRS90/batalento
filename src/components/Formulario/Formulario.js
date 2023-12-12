import React from 'react';

function Formulario({ empleo }) {
  // const [firstName, setFirstName] = React.useState('');
  // const [lastName, setLastName] = React.useState('');
  // const [mobilNumber, setMobileNumber] = React.useState('');
  // const [email, setEmail] = React.useState('');
  // const [textArea, setTextArea] = React.useState('');

  return (
    <form className="form-container">
      <p className="titulo-form">{empleo === 'Aspirante' ? 'Aspirantes' : 'Reclutador'}</p>
      <div className="form-row">
        <div className="form-column">
          <label htmlFor="first-name" className="titulo-texto">
            Nombre(s)
            {' '}
            <span>(requerido)</span>
          </label>
          <input id="first-name" required type="text" className="input-text" />
        </div>
        <div className="form-column">
          <label htmlFor="last-name" className="titulo-texto">
            Apellidos
            {' '}
            <span>(requerido)</span>
          </label>
          <input id="last-name" required type="text" className="input-text" />
        </div>
      </div>
      <div className="form-column">
        <label htmlFor="mobil-num" className="titulo-texto">
          Celular
        </label>
        <input id="mobil-num" required type="number" className="input-text" />
      </div>
      <div className="form-column">
        <label htmlFor="email" className="titulo-texto">
          Email
          {' '}
          <span>(requerido)</span>
        </label>
        <input id="email" required type="email" className="input-text" />
      </div>
      <div className="form-column">
        <label htmlFor="expertice" className="titulo-texto">
          {empleo === 'Aspirante' ? 'Áreas de Experiencia' : 'Mensaje'}
          {' '}
          <span>(requerido)</span>
        </label>
        <textarea id="expertice" required type="text" className="input-text text-area" />
      </div>
      <input type="button" value="Enviar" className="secondary-button" />
    </form>
  );
}

export default Formulario;
