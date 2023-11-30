import React from 'react';
import Menu from '../Menu';

/* eslint-disable react/prop-types */

function HamburgerMenu({ menuSection, setMenuSection, menuOpt }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const burger1 = isOpen ? 'openHamburger1' : 'closeHamburger1';
  const burger2 = isOpen ? 'openHamburger2' : 'closeHamburger2';

  return (
    <div className="toggle-hamburger">
      {/* <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={`burger ${burger1}`} />
        <div className={`burger ${burger2}`} />
      </div> */}
      <button className="burger" onClick={() => setIsOpen(!isOpen)} />
      {isOpen
        && (
          <Menu setMenuSection={setMenuSection} menuOpt={menuOpt} isOpen={isOpen} />
        )}
    </div>
  );
}

export default HamburgerMenu;
