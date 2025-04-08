import React from 'react';

const Tooltip = ({ children, text }) => {
  return (
    <div className="tooltip-wrapper">
      {children}
      <div className="tooltip-box">{text}</div>
    </div>
  );
};

export default Tooltip;
