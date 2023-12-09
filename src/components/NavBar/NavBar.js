import React from 'react';
import InLineMenu from '../InLineMenu';
import HamburgerMenu from '../HamburgerMenu';

function NavBar({
  // toggleLanguage,
  menuOpt,
  menuSection,
  setMenuSection,
  // language,
}) {
  return (
    <nav className="navbar" id="navbar">
      <div>
        <a href="#navbar" className="logo" />
      </div>
      <div>
        <InLineMenu menuSection={menuSection} setMenuSection={setMenuSection} menuOpt={menuOpt} />
        <HamburgerMenu
          menuSection={menuSection}
          setMenuSection={setMenuSection}
          menuOpt={menuOpt}
        />
      </div>
      {/* <a href="#" className="language" onClick={() => toggleLanguage()}>{language}</a> */}
    </nav>
  );
}

export default NavBar;
