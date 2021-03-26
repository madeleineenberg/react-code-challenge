import React, { useState } from 'react';

export default function ToggleClass({ children }) {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div
      onClick={() => setIsToggled(!isToggled)}
      className={
        isToggled ? 'bottom-nav-wrapper open' : 'bottom-nav-wrapper close'
      }
    >
      <i className={isToggled ? 'icon-angle-up' : 'icon-angle-down'}></i>
      {children}
    </div>
  );
}
