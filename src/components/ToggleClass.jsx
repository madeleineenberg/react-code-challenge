import React, { useState } from 'react';

//component to isolate my toggle of class
//the component are wrapped around my div and takes children as a prop
//this is used to get the navigation in footer
//to show and hide in collapsing divs
//this is only used for the responsive design

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
