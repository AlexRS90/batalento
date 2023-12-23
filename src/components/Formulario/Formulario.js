import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Formulario({ empleo }) {
  const [flash, setFlash] = React.useState(false);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [mobilNumber, setMobileNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [textArea, setTextArea] = React.useState('');
  const [state, handleSubmit] = useForm(empleo === 'Aspirante' ? 'xvoepwwk' : 'xvoepwyg');

  React.useEffect(() => {
    if (state.succeeded) {
      setFlash(true);
      setFirstName('');
      setLastName('');
      setMobileNumber('');
      setEmail('');
      setTextArea('');
    }
  });

  React.useEffect(() => {
    setTimeout(() => {
      setFlash(false);
    });
  }, [flash]);

  return (
    <form
      className="form-container"
      onSubmit={handleSubmit}
    >
      <p className="titulo-form">{empleo === 'Aspirante' ? 'Candidatos' : 'Clientes'}</p>
      <div className="form-row">
        <div className="form-column">
          <label htmlFor="first-name" className="titulo-texto">
            Nombre(s)
            {' '}
            <span>(requerido)</span>
          </label>
          <input
            id="first-name"
            name="first-name"
            required
            type="text"
            minLength={2}
            maxLength={20}
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
            name="last-name"
            required
            type="text"
            minLength={5}
            maxLength={40}
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
        <label htmlFor="mobil-num" className="titulo-texto">{/* eslint-disable-line */}
          Celular
        </label>
        <input
          id="mobil-num"
          name="phone-number"
          type="number"
          className="input-text input-format"
          minLength={10}
          maxLength={10}
          autoComplete="tel-national"
          value={mobilNumber}
          onChange={(event) => {
            setMobileNumber(event.target.value.slice(0, 10));
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
          name="email"
          required
          type="email"
          className="input-text input-format"
          autoComplete="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <ValidationError
          prefix="Email"
          field="email"
          className="email-error"
          errors={state.errors}
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
          name="message"
          required
          maxLength={300}
          type="text"
          className="input-text text-area input-format"
          value={textArea}
          onChange={(event) => {
            setTextArea(event.target.value);
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div className="form-footer">
        <button
          type="submit"
          className="secondary-button"
          disabled={state.submitting}
        >
          Enviar
        </button>
        {flash
          && <p className="form-submition">Envío exitoso</p>}
      </div>
    </form>
  );
}

export default Formulario;
