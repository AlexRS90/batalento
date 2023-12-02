import React from 'react';
import Menu from '../Menu';

/* eslint-disable react/prop-types */

function HamburgerMenu({ menuSection, setMenuSection, menuOpt }) {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleMenu() {
    !isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = null;
    setIsOpen(!isOpen);
  }

  return (
    <div className="toggle-hamburger">
      <label id="burger" className="hamburger-menu">
        <input id="burger" type="checkbox" onClick={toggleMenu} />
      </label>
      {isOpen
        && (
          <Menu setMenuSection={setMenuSection} menuOpt={menuOpt} isOpen={isOpen} />
        )}
    </div>
  );
}

export default HamburgerMenu;
