import React from 'react';
import NavBar from '../NavBar';
import Home from '../Home/Home';
import Parallax from '../Parallax/Parallax';

function App() {
  const [menuSection, setMenuSection] = React.useState('home');
  const menuOpt = ['Servicios', 'Equipo', 'Metodología', 'Contacto'];
  // const [language, setLanguage] = React.useState('English');

  // function toggleLanguage() {
  //  return language === 'English' ? setLanguage('Español') : setLanguage('English');
  // }
  return (
    <>
      <NavBar
        // toggleLanguage={toggleLanguage}
        menuOpt={menuOpt}
        menuSection={menuSection}
        setMenuSection={setMenuSection}
        // language={language}
      />
      <Home />
      <Parallax />
    </>
  );
}

export default App;
