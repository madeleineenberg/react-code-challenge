import React, { useState } from 'react';

export default function Form() {
  //state for input value
  const [value, setValue] = useState('');

  //this function handles the submit from the form
  //input value is saved in a variable on change.
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
