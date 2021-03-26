import React, { Fragment } from 'react';
import BottomNav from './BottomNav';
import FooterImg from './FooterImg';
import Form from './Form';
import Social from './Social';

export default function Footer() {
  return (
    <Fragment>
      <footer>
        <Form />
        <BottomNav />
        <FooterImg />
      </footer>
      <Social />
    </Fragment>
  );
}
