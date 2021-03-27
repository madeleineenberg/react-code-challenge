import React from 'react';

export default function JobListItem({ props: { title, location, type } }) {
  return (
    <div className='job-container'>
      <h2>{title}</h2>
      <p>
        {location} / {type}
      </p>
    </div>
  );
}
