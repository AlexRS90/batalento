import React from 'react';
import Menu from '../Menu';

/* eslint-disable react/prop-types */

function HamburgerMenu({ menuSection, setMenuSection, menuOpt }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="toggle-hamburger">
      <label id="burger" className="hamburger-menu">
        <input id="burger" type="checkbox" onClick={() => setIsOpen(!isOpen)} />
      </label>
      {isOpen
        && (
          <Menu setMenuSection={setMenuSection} menuOpt={menuOpt} isOpen={isOpen} />
        )}
    </div>
  );
}

export default HamburgerMenu;
