import React from 'react';
import giftcard from '../images/GiftCard.png';
import happycard from '../images/Happicard.png';
import ngo from '../images/NGO.png';

export default function Categories() {
  return (
    <section className='category-section'>
      <div className='category-section__item item-1'>
        <div className='category-section__item-content'>
          <img src={giftcard} alt='gift card' />
          <h2>Gift Card</h2>
        </div>
      </div>

      <div className='category-section__item item-2'>
        <div className='category-section__item-content'>
          <img src={happycard} alt='happy card' />
          <h2>Happy Card</h2>
        </div>
      </div>

      <div className='category-section__item item-3'>
        <div className='category-section__item-content'>
          <img src={ngo} alt='NGO' />
          <h2>Happi Offers</h2>
        </div>
      </div>
    </section>
  );
}
