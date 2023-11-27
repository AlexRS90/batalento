import React from 'react';
import InLineMenu from '../InLineMenu';
import HamburgerMenu from '../HamburgerMenu';

function App() {
  const [menuSection, setMenuSection] = React.useState('home');
  const menuOpt = ['Servicios', 'Equipo', 'Metodología', 'Contacto'];
  return (
    <div>
      <nav>
        <div className="logo" />
        <InLineMenu menuSection={menuSection} setMenuSection={setMenuSection} menuOpt={menuOpt} />
        <HamburgerMenu
          menuSection={menuSection}
          setMenuSection={setMenuSection}
          menuOpt={menuOpt}
        />
      </nav>
    </div>
  );
}

export default App;
