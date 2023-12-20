import React from 'react';
import Menu from '../Menu';

/* eslint-disable react/prop-types */

function InLineMenu({
  menuSection, // eslint-disable-line
  setMenuSection,
  menuOpt,
  language,
}) {
  return (
    <div className="toggle-inLine">
      <Menu setMenuSection={setMenuSection} menuOpt={menuOpt} language={language} />
    </div>
  );
}

export default InLineMenu;
