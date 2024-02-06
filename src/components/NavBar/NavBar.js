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
  const flag = language === 'ESPAÑOL' ? 'mexico-flag' : 'us-flag';
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
        <button
          type="button"
          aria-label="Toggle Language"
          onClick={() => toggleLanguage()}
          onKeyDown={() => toggleLanguage()}
          className={`flags ${flag}`}
        />
      </div>
    </nav>
  );
}

export default NavBar;
