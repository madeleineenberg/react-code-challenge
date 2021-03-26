import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function navigation() {
  return (
    <Fragment>
      <nav className='navigation'>
        <ul className='nav-menu'>
          <li className='nav-menu__item'>
            <Link to='/' className='menu-link'>
              Home
            </Link>
          </li>
          <li className='nav-menu__item'>
            <Link to='/career' className='menu-link'>
              Career
            </Link>
          </li>
          <li className='nav-menu__item'>
            <Link to='/about' className='menu-link'>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}
