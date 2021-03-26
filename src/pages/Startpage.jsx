import React, { Fragment } from 'react';
import Categories from '../components/Categories';
import Hero from '../components/Hero';

export default function Startpage() {
  return (
    <Fragment>
      <Hero />
      <Categories />
    </Fragment>
  );
}
