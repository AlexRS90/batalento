import React from 'react';
import Menu from '../Menu';

/* eslint-disable react/prop-types */

function HamburgerMenu({
  menuSection, // eslint-disable-line
  setMenuSection,
  menuOpt,
  language,
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleMenu() {
    !isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = null; // eslint-disable-line
    setIsOpen(!isOpen);
  }

  return (
    <div className="toggle-hamburger">
      <label id="burger" className="hamburger-menu"> {/* eslint-disable-line */}
        <input id="burger" type="checkbox" checked={isOpen} onClick={toggleMenu} />
      </label>
      {isOpen
        && (
          <Menu
            setMenuSection={setMenuSection}
            menuOpt={menuOpt}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            language={language}
          />
        )}
    </div>
  );
}

export default HamburgerMenu;
