import React from 'react';
import Menu from '../Menu';

/* eslint-disable react/prop-types */

function InLineMenu({ menuSection, setMenuSection, menuOpt }) {
  return (
    <div className="toggle-inLine">
      {menuSection}
      <Menu setMenuSection={setMenuSection} menuOpt={menuOpt} />
    </div>
  );
}

export default InLineMenu;
