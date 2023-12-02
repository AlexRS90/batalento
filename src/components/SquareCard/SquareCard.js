import React from 'react';

function SquareCard({ status, children }) {
  return <div className={`${status} square-card`}>{children}</div>;
}

export default SquareCard;
