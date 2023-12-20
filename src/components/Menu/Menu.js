import React from 'react';

/* eslint-disable react/prop-types */

function Menu({
  setMenuSection,
  menuOpt,
  isOpen,
  setIsOpen,
  language,
}) {
  const menuStyles = isOpen ? 'menu-styles burger-menu' : 'menu-styles inLine-menu';
  const menuLanguage = language === 'ESPAÑOL' ? menuOpt[1] : menuOpt[0];

  function closeMenu(element) {
    if (isOpen) {
      setIsOpen(!isOpen);
      document.body.style.overflow = null;
    }
    setMenuSection(element);
  }
  return (
    <div className="nav-links">
      <ul className="show-menu">
        {menuLanguage.map((element) => (
          <li key={Math.random()} className={menuStyles}>
            <a
              href={`#${element.toLowerCase()}`}
              onClick={() => closeMenu(element)}
              // onKeyPress={handleEnter(value, element)}
            >
              {element === 'METODOLOGIA' ? 'METODOLOGÍA' : element}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
