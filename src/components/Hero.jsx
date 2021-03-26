import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <header className='hero'>
      <div className='hero__content'>
        <h1>Welcome to Happyweb</h1>
        <Link to='/about' className='hero__content-button'>
          See more
        </Link>
      </div>
    </header>
  );
}
