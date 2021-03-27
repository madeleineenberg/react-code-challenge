import React, { Fragment } from 'react';
import ToggleClass from './ToggleClass';

export default function BottomNav() {
  //renders bottom navigation
  //and toggles a classname with <ToggleClass> to get
  //the resposive design.

  return (
    <Fragment>
      <ToggleClass>
        <h3>Browse</h3>
        <ul>
          <li>Home</li>
          <li>Career</li>
          <li>Text 1</li>
          <li>Text 2</li>
          <li>Text 3</li>
        </ul>
      </ToggleClass>
      <ToggleClass>
        <h3>About</h3>
        <ul>
          <li>About</li>
          <li>Contact Us</li>
          <li>Partner With Us</li>
          <li>Reviews</li>
          <li>Sign in</li>
        </ul>
      </ToggleClass>
      <ToggleClass>
        <h3>Support</h3>
        <ul>
          <li>Help Center</li>
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>FAQ</li>
        </ul>
      </ToggleClass>
    </Fragment>
  );
}
