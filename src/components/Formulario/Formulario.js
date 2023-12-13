import React from 'react';

function Formulario({ empleo }) {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [mobilNumber, setMobileNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [textArea, setTextArea] = React.useState('');

  function handleForm(event) {
    event.preventDefault();
    const data = {
      aplicacion: empleo,
      nombre: firstName,
      apellido: lastName,
      telefono: mobilNumber,
      email,
      mensaje: textArea,
    };
    setFirstName('');
    setLastName('');
    setMobileNumber('');
    setEmail('');
    setTextArea('');
    window.alert(JSON.stringify(data, null, 4));
  }
  return (
    <form className="form-container" onSubmit={handleForm}>
      <p className="titulo-form">{empleo === 'Aspirante' ? 'Aspirantes' : 'Reclutador'}</p>
      <div className="form-row">
        <div className="form-column">
          <label htmlFor="first-name" className="titulo-texto">
            Nombre(s)
            {' '}
            <span>(requerido)</span>
          </label>
          <input
            id="first-name"
            required
            type="text"
            className="input-text input-format"
            autoComplete="given-name"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </div>
        <div className="form-column">
          <label htmlFor="last-name" className="titulo-texto">
            Apellidos
            {' '}
            <span>(requerido)</span>
          </label>
          <input
            id="last-name"
            required
            type="text"
            autoComplete="family-name"
            className="input-text input-format"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="form-column">
        <label htmlFor="mobil-num" className="titulo-texto">
          Celular
        </label>
        <input
          id="mobil-num"
          type="number"
          className="input-text input-format"
          autoComplete="tel-national"
          value={mobilNumber}
          onChange={(event) => {
            setMobileNumber(event.target.value);
          }}
        />
      </div>
      <div className="form-column">
        <label htmlFor="email" className="titulo-texto">
          Email
          {' '}
          <span>(requerido)</span>
        </label>
        <input
          id="email"
          required
          type="email"
          className="input-text input-format"
          autoComplete="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className="form-column">
        <label htmlFor="expertice" className="titulo-texto">
          {empleo === 'Aspirante' ? 'Áreas de Experiencia' : 'Mensaje'}
          {' '}
          <span>(requerido)</span>
        </label>
        <textarea
          id="expertice"
          required
          type="text"
          className="input-text text-area input-format"
          value={textArea}
          onChange={(event) => {
            setTextArea(event.target.value);
          }}
        />
      </div>
      <button className="secondary-button">
        Enviar
      </button>
    </form>
  );
}

export default Formulario;
