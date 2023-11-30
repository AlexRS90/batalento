import React from 'react';

/* eslint-disable react/prop-types */

function Menu({ setMenuSection, menuOpt, isOpen }) {
  const menuStyles = isOpen ? 'menu-styles burger-menu' : 'menu-styles inLine-menu';
  return (
    <div className="nav-links">
      <ul className="show-menu">
        {menuOpt.map((element) => (
          <li key={Math.random()} className={menuStyles}>
            <a
              href="#"
              onClick={() => setMenuSection(element)}
              // onKeyPress={handleEnter(value, element)}
            >
              {element}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
