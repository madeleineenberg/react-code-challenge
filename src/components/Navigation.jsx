import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default function navigation() {
  return (
    <Fragment>
      <nav className='navigation'>
        <ul className='nav-menu'>
          <li className='nav-menu__item'>
            <NavLink to='/' className='menu-link' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li className='nav-menu__item'>
            <NavLink
              to='/career'
              className='menu-link'
              activeClassName='active'
            >
              Career
            </NavLink>
          </li>
          <li className='nav-menu__item'>
            <NavLink to='/about' className='menu-link' activeClassName='active'>
              About
            </NavLink>
          </li>
        </ul>
        <div className='nav-button-group'>
          <div className='nav-button'>
            <button>Partners</button>
          </div>
          <div className='nav-search'>
            <i className='icon-search' />
          </div>
        </div>
        <div className='nav-cart'>
          <i className='icon-basket' />
        </div>
      </nav>
    </Fragment>
  );
}
