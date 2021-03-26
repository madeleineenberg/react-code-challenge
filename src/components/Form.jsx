import React, { useState } from 'react';

export default function Form() {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscription for ${value}!`);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        placeholder='Email'
        onChange={(e) => setValue(e.target.value)}
      />
      <input type='submit' value='Subscribe' />
    </form>
  );
}
