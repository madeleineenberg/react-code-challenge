import React from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import heroimg from '../images/hero.png';

//easy and lightweigth image-carousel library
//is used to get the slide effect on hero image

export default function Hero() {
  return (
    <div className='header'>
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={heroimg} alt='hero' />
          <div className='header-content'>
            <h1>Welcome to Happyweb</h1>
            <Link to='/about' className='header-content-button'>
              See more
            </Link>
          </div>
        </div>
        <div>
          <img src={heroimg} alt='hero' />
        </div>
        <div>
          <img src={heroimg} alt='hero' />
        </div>
      </Carousel>
    </div>
  );
}
