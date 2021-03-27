import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  //my states, to handle toggle of classes
  //to active mobile menu, show and hide nav-items
  const [click, setClick] = useState(false);

  return (
    <Fragment>
      <nav className='navigation'>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-menu__item' onClick={() => setClick(false)}>
            <NavLink to='/' className='menu-link' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li className='nav-menu__item' onClick={() => setClick(false)}>
            <NavLink
              to='/career'
              className='menu-link'
              activeClassName='active'
            >
              Career
            </NavLink>
          </li>
          <li className='nav-menu__item' onClick={() => setClick(false)}>
            <NavLink to='/about' className='menu-link' activeClassName='active'>
              About
            </NavLink>
          </li>
        </ul>
        <div className={click ? 'nav-button-group active' : 'nav-button-group'}>
          <div className='nav-button'>
            <button>Partners</button>
          </div>
          <div className='nav-search'>
            <i className='icon-search' />
          </div>
        </div>
        <div className='nav-cart'>
          <i className={click ? 'icon-basket dark' : 'icon-basket'} />
        </div>
        <div className='mobile-menu' onClick={() => setClick(!click)}>
          {click ? <i className='icon-cancel' /> : <i className='icon-menu' />}
        </div>
      </nav>
    </Fragment>
  );
}
