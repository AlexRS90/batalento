import React from 'react';
import NavBar from '../NavBar';
import Home from '../Home/Home';
import Parallax from '../Parallax/Parallax';
import Footer from '../Footer/Footer';
import { MENU } from '../../data';

function App() {
  const [menuSection, setMenuSection] = React.useState('home');
  const [language, setLanguage] = React.useState('ENGLISH');

  function toggleLanguage() {
    return language === 'ENGLISH' ? setLanguage('ESPAÑOL') : setLanguage('ENGLISH');
  }
  return (
    <>
      <NavBar
        toggleLanguage={toggleLanguage}// eslint-disable-line
        menuOpt={MENU}
        menuSection={menuSection}
        setMenuSection={setMenuSection}
        language={language}
      />
      <Home language={language} />
      <Parallax />
      <Footer />
    </>
  );
}

export default App;
