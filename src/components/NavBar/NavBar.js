import React from 'react';
import InLineMenu from '../InLineMenu';
import HamburgerMenu from '../HamburgerMenu';

function NavBar({
  toggleLanguage,
  menuOpt,
  menuSection,
  setMenuSection,
  language,
}) {
  return (
    <nav className="navbar" id="navbar">
      <div>
        <a href="#navbar" className="logo" />{/* eslint-disable-line */}
      </div>
      <div className="menu-language">
        <div>
          <InLineMenu
            menuSection={menuSection}
            setMenuSection={setMenuSection}
            menuOpt={menuOpt}
            language={language}
          />
          <HamburgerMenu
            menuSection={menuSection}
            setMenuSection={setMenuSection}
            menuOpt={menuOpt}
            language={language}
          />
        </div>
        <button type="button" className="language" onClick={() => toggleLanguage()}>{language}</button>
      </div>
    </nav>
  );
}

export default NavBar;
