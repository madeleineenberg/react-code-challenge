import React from 'react';
import giftcard from '../images/GiftCard.png';
import happycard from '../images/Happicard.png';
import ngo from '../images/NGO.png';

export default function Categories() {
  //renders the category section
  return (
    <section className='category-section'>
      <div className='category-section__item'>
        <div className='category-section__item-content'>
          <div className='img-wrapper'>
            <img src={giftcard} alt='gift card' />
          </div>
          <h2>Gift Card</h2>
        </div>
      </div>

      <div className='category-section__item'>
        <div className='category-section__item-content'>
          <div className='img-wrapper'>
            <img src={happycard} alt='happy card' />
          </div>
          <h2>Happy Card</h2>
        </div>
      </div>

      <div className='category-section__item'>
        <div className='category-section__item-content'>
          <div className='img-wrapper'>
            <img src={ngo} alt='NGO' />
          </div>
          <h2>Happi Offers</h2>
        </div>
      </div>
    </section>
  );
}
